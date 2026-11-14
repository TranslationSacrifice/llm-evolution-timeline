# -*- coding: utf-8 -*-
"""一次性数据迁移（2026-11-14）：

1. 删除 6 条查无实据 / 重复的条目；
2. 修正 4 条的日期与参数表述（o1 正式版、GPT-4 参数、Claude Opus 5、Muse Spark 代号）；
3. 为全部条目补 `licenseType` / `entryType` / `countryGroup` 三个枚举字段；
4. 为已核对过的 2025–2026 条目补 `source`。

字段枚举定义见 data/schema.md。迁移完成后由 tools/build_timeline_js.py 重新生成 timeline.js。
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(ROOT, "data", "timeline.json")

DELETE_IDS = {
    "thx01-onegemma-2026",   # N1N AI / THX-01：Wikipedia 与新闻检索均无痕迹
    "venus-plm-2026",        # VenusPLM / VenusPod：无痕迹
    "gemini-omni12-2026",    # "Omni 1.2 Flash" 版本号无来源
    "gemini-robotics2-2026",  # 与 ER 2 重复
    "meta-avocado-2026",     # Avocado 是内部代号，落地为 Muse Spark，合并
    "gr00t-n2-2026",         # GR00T N1.7 / N2 无痕迹，真实谱系到 N1
}

# 许可文本 -> 枚举。open=有权重可下载；closed=仅 API/商业授权；other=论文/学术/协议/基础设施等
LICENSE_TYPE = {
    "Proprietary / Closed API": "closed",
    "Open Weights": "open",
    "Open Weights (Apache 2.0)": "open",
    "Open Source": "open",
    "Proprietary / API": "closed",
    "Proprietary / Closed Service": "closed",
    "Open Weights / Commercial": "open",
    "Open Weights (MIT)": "open",
    "Proprietary": "closed",
    "Commercial SaaS": "closed",
    "Open Source (Apache 2.0)": "open",
    "Apache 2.0": "open",
    "Open Source (MIT)": "open",
    "Open Weights (Commercial)": "open",
    "Proprietary / Commercial API": "closed",
    "Proprietary / Cloud API": "closed",
    "Commercial": "closed",
    "Open Standard": "other",
    "Commercial / API": "closed",
    "Open Source (CreativeML)": "open",
    "Freemium / Commercial": "closed",
    "Open Weights (Llama License)": "open",
    "Proprietary / Research": "closed",
    "Open Weights (Custom License)": "open",
    "Open Source (Staged)": "open",
    "Paper": "other",
    "Open Source (Research)": "open",
    "Academic": "other",
    "Proprietary / PaddlePaddle": "closed",
    "Open Weights / Apache 2.0": "open",
    "Paper / Closed": "closed",
    "Research Only (Leaked)": "other",
    "Proprietary / Discord Service": "closed",
    "Proprietary / Creative Cloud": "closed",
    "Open Source (BigCode OpenRAIL-M)": "open",
    "Open Weights (Commercial OK)": "open",
    "Open Source (Apache 2.0 权重)": "open",
    "Proprietary / On-device": "closed",
    "Proprietary / Web API": "closed",
    "Proprietary / Commercial": "closed",
    "Proprietary / Web Service": "closed",
    "Proprietary + Open Weights (R)": "open",
    "Open Weights (Codestral Mamba: Apache 2.0)": "open",
    "Proprietary / Academic Server": "closed",
    "Proprietary / On-device + PCC": "closed",
    "Proprietary / Product": "closed",
    "Open Weights (dev) / Commercial (pro)": "open",
    "Apache 2.0 (12B) / Commercial (Large)": "open",
    "Open Weights / Research": "open",
    "Proprietary / AWS Bedrock": "closed",
    "Open Weights / Commercial (MIT)": "open",
    "Private Infrastructure": "other",
    "Proprietary / ChatGPT Pro": "closed",
    "Free / Commercial": "closed",
    "Proprietary / Enterprise": "closed",
    "Open Weights (Llama 4 License)": "open",
    "Open Weights (Permissive)": "open",
    "Open Weights (Modified MIT)": "open",
    "Developer Platform": "closed",
    "Academic / Open Weights": "open",
    "Open Source / Commercial": "open",
    "Commercial SDK / NIM": "closed",
    "Commercial / Ecosystem": "closed",
    "N/A": "other",
    "Proprietary / Embodied": "closed",
}

PRODUCT_IDS = {
    "copilot-2021", "chatgpt-plugins-2023", "gpts-store-2023", "baidu-comate-2023",
    "tongyi-lingma-2023", "cursor-ide-2024", "coze-bytedance-2024", "devin-2024",
    "tencent-ai-code-2024", "windsurf-2024", "trae-bytedance-2025", "claude-code-2025",
    "codex-agent-2025", "google-antigravity-2025",
}
PROTOCOL_IDS = {"mcp-2024", "a2a-2025"}
EVENT_IDS = {"rogue-agents-2026", "mcp-aaif-2025"}
INFRA_IDS = {"stargate-2025"}

COUNTRY_GROUP = {"US": "US", "CN": "CN", "EU": "EU"}

SOURCES = {
    "jev-2026": "https://en.wikipedia.org/wiki/Jev_(AI_model)",
    "grok45-2026": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
    "gpt56-2026": "https://en.wikipedia.org/wiki/GPT-5.6",
    "gpt6-2026": "https://en.wikipedia.org/wiki/GPT-6",
    "gpt6-cyber-2026": "https://en.wikipedia.org/wiki/GPT-6",
    "gemini4-argon-2026": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
    "claude-mythos-2026": "https://en.wikipedia.org/wiki/Claude_(AI)",
    "claude-opus5-2026": "https://en.wikipedia.org/wiki/Claude_(AI)",
    "claude-opus55-2026": "https://en.wikipedia.org/wiki/Claude_(AI)",
    "deepseek-v4-2026": "https://en.wikipedia.org/wiki/DeepSeek_(AI)",
    "qwen38-2026": "https://en.wikipedia.org/wiki/Qwen",
    "google-antigravity-2025": "https://en.wikipedia.org/wiki/Google_Antigravity",
}

ORDER = ["id", "date", "name", "company", "country", "countryGroup", "license", "licenseType",
         "entryType", "category", "parameters", "contextWindow", "highlight", "keyTech",
         "source", "docLink", "era"]


def entry_type(rid):
    if rid in PRODUCT_IDS:
        return "product"
    if rid in PROTOCOL_IDS:
        return "protocol"
    if rid in EVENT_IDS:
        return "event"
    if rid in INFRA_IDS:
        return "infrastructure"
    return "model"


def reorder(d):
    out = {k: d[k] for k in ORDER if k in d}
    for k, v in d.items():
        if k not in out:
            out[k] = v
    return out


def main():
    rows = json.load(open(JSON_PATH, encoding="utf-8"))
    rows = [r for r in rows if r["id"] not in DELETE_IDS]
    by_id = {r["id"]: r for r in rows}

    # Claude 5 家族 -> Claude Opus 5（真实发布日 2026-07-24）
    idx = next(i for i, r in enumerate(rows) if r["id"] == "claude5-2026")
    c5 = rows[idx]
    by_id.pop("claude5-2026")
    c5.update({
        "id": "claude-opus5-2026",
        "date": "2026-07",
        "name": "Claude Opus 5",
        "contextWindow": "1M",
        "highlight": "Claude 5 代际的 Opus 常规旗舰（2026-07-24）：在 6 月 Fable 5 / Mythos 5 之后补齐 Opus 档位，"
                     "主打长程软件工程与智能体任务；同年 9 月由 Opus 5.5 / Sonnet 5.5 接棒。",
        "keyTech": ["Opus Tier", "Long-horizon Coding", "Agentic Workflows"],
    })
    by_id["claude-opus5-2026"] = c5

    # o1 正式版（2024-12-05）与 9 月的 preview 区分开
    o1 = by_id["openai-o1-2024"]
    o1.update({
        "date": "2024-12",
        "name": "OpenAI o1 (正式版)",
        "highlight": "推理期计算扩展定律 (Test-Time Compute Scaling) 的正式落地：隐式思维链 + 大规模强化学习，"
                     "在数学与编程竞赛上达到博士级水准，2024-12-05 起向付费用户全量开放。",
    })

    # GPT-4 参数：泄露推测不写成定论
    g4 = by_id["gpt4-2023"]
    g4["parameters"] = "未公开（第三方推测约 1.8T / 16×110B MoE）"
    g4["highlight"] = ("大模型综合推理天花板，在律师考试等人类专业资格测试中位居前 10%；"
                       "架构据第三方推测为 16 专家 MoE，OpenAI 从未确认。")
    by_id["gpt4v-2023"]["parameters"] = "未公开（推测约 1.8T MoE）"

    # Muse Spark 吸收 Avocado 代号
    ms = by_id["muse-spark-2026"]
    ms["highlight"] = ms["highlight"].rstrip("。") + "。内部代号 Avocado——2026 年上半年多家媒体报道其从“Llama 5 继任者”转向闭源商业线。"

    # 补枚举字段 + 来源
    for r in rows:
        lic = r["license"]
        if lic not in LICENSE_TYPE:
            raise SystemExit("未覆盖的 license 取值: %r (%s)" % (lic, r["id"]))
        r["licenseType"] = LICENSE_TYPE[lic]
        r["entryType"] = entry_type(r["id"])
        r["countryGroup"] = COUNTRY_GROUP.get(r["country"], "other")
        if r["id"] in SOURCES and not r.get("source"):
            r["source"] = SOURCES[r["id"]]

    rows = [reorder(r) for r in rows]
    rows.sort(key=lambda r: r["date"])  # 稳定排序：同月保持原顺序

    with open(JSON_PATH, "w", encoding="utf-8", newline="\n") as f:
        json.dump(rows, f, ensure_ascii=False, indent=2)
        f.write("\n")

    import collections
    print("entries:", len(rows))
    print("entryType:", dict(collections.Counter(r["entryType"] for r in rows)))
    print("licenseType:", dict(collections.Counter(r["licenseType"] for r in rows)))
    print("countryGroup:", dict(collections.Counter(r["countryGroup"] for r in rows)))
    print("with source:", sum(1 for r in rows if r.get("source")))


if __name__ == "__main__":
    main()