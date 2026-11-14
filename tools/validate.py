# -*- coding: utf-8 -*-
"""校验 data/timeline.json 的结构与内容一致性。

用法：
    python tools/validate.py            # 只把问题打印出来，错误（error）返回码 1
    python tools/validate.py --strict   # 警告（warn）也算失败，用于 CI

规则见 data/schema.md。CI（.github/workflows/validate.yml）会在每次 push 时跑一遍。
"""
import json
import os
import re
import sys
from urllib.parse import urlparse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(ROOT, "data", "timeline.json")

CATEGORIES = {
    "Foundation", "Dense LLM", "MoE", "Reasoning", "Multimodal", "Agent / 工具生态",
    "代码专精", "文生视频", "图像生成", "语音 / 音频", "具身智能", "世界模型",
    "Efficiency/Edge", "领域特化", "Embedding / 检索", "安全与对齐", "Infrastructure",
    "System 1 / 决策特化",
}
LICENSE_TYPES = {"open", "closed", "other"}
ENTRY_TYPES = {"model", "product", "protocol", "event", "infrastructure"}
COUNTRY_GROUPS = {"CN", "US", "EU", "other"}
# 这些范式本来就没有 token 上下文概念（图像 / 视频 / 音频 / 具身 / 蛋白质等）
NON_TEXT_CATEGORIES = {"图像生成", "文生视频", "语音 / 音频", "具身智能", "世界模型", "领域特化", "Embedding / 检索"}
REQUIRED = ["id", "date", "name", "company", "country", "countryGroup", "license", "licenseType",
            "entryType", "category", "parameters", "contextWindow", "highlight", "keyTech", "era"]

DATE_RE = re.compile(r"^\d{4}-(0[1-9]|1[0-2])$")


def main() -> int:
    strict = "--strict" in sys.argv
    rows = json.load(open(JSON_PATH, encoding="utf-8"))
    errors, warnings = [], []
    seen_ids = set()
    previous_date = ""

    for row in rows:
        rid = row.get("id", "<no-id>")

        for field in REQUIRED:
            if field not in row:
                errors.append(f"{rid}: 缺少字段 {field}")

        if rid in seen_ids:
            errors.append(f"{rid}: id 重复")
        seen_ids.add(rid)

        date = row.get("date", "")
        if not DATE_RE.match(date):
            errors.append(f"{rid}: 日期格式应为 YYYY-MM，实际为 {date!r}")
        elif date < previous_date:
            errors.append(f"{rid}: 时间线顺序错误（{date} 在 {previous_date} 之前）")
        previous_date = max(previous_date, date)

        if row.get("licenseType") not in LICENSE_TYPES:
            errors.append(f"{rid}: licenseType 必须属于 {sorted(LICENSE_TYPES)}")
        if row.get("entryType") not in ENTRY_TYPES:
            errors.append(f"{rid}: entryType 必须属于 {sorted(ENTRY_TYPES)}")
        if row.get("countryGroup") not in COUNTRY_GROUPS:
            errors.append(f"{rid}: countryGroup 必须属于 {sorted(COUNTRY_GROUPS)}")
        if row.get("category") not in CATEGORIES:
            errors.append(f"{rid}: 分类 {row.get('category')!r} 不在白名单内")

        doc_link = row.get("docLink")
        if doc_link:
            path = os.path.join(ROOT, doc_link.replace("/", os.sep))
            if not os.path.exists(path):
                errors.append(f"{rid}: docLink 指向不存在的文件 {doc_link}")

        source = row.get("source")
        if source:
            parsed = urlparse(source)
            if parsed.scheme not in ("http", "https") or not parsed.netloc:
                errors.append(f"{rid}: source 不是合法的 http(s) 链接 {source!r}")
            elif date >= "2025-01" and "wikipedia.org" not in parsed.netloc and parsed.netloc not in ("arxiv.org",):
                warnings.append(f"{rid}: source 不是一手来源（{parsed.netloc}），建议换成官方公告或论文")

        if not isinstance(row.get("keyTech"), list) or not row.get("keyTech"):
            errors.append(f"{rid}: keyTech 应为非空数组")

        if date >= "2025-01" and not source:
            warnings.append(f"{rid}: 2025 年之后的条目建议补 source（当前为空）")

        if row.get("entryType") == "model" and "N/A" in str(row.get("contextWindow")) \
                and row.get("category") not in NON_TEXT_CATEGORIES:
            warnings.append(f"{rid}: 模型的 contextWindow 为 N/A，建议补真实数值")

    print(f"共 {len(rows)} 条记录：error {len(errors)}，warning {len(warnings)}")
    for item in errors:
        print("  [ERROR]", item)
    for item in warnings[:30]:
        print("  [WARN ]", item)
    if len(warnings) > 30:
        print(f"  ... 其余 {len(warnings) - 30} 条警告已省略")

    return 1 if errors or (strict and warnings) else 0


if __name__ == "__main__":
    sys.exit(main())