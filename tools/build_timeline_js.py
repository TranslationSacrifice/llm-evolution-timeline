# -*- coding: utf-8 -*-
"""把 data/timeline.json 编译成浏览器可直接 <script> 引入的 data/timeline.js。

用法：python tools/build_timeline_js.py [--check]
--check 只校验是否最新（CI 用），不写文件；不一致时退出码 1。
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(ROOT, "data", "timeline.json")
JS_PATH = os.path.join(ROOT, "data", "timeline.js")
HEADER = "// 由 tools/build_timeline_js.py 从 timeline.json 自动生成，请勿手工编辑。\n"


def render() -> str:
    rows = json.load(open(JSON_PATH, encoding="utf-8"))
    body = json.dumps(rows, ensure_ascii=False, indent=2)
    return HEADER + "window.TIMELINE_DATA = " + body + ";\n"


def main() -> int:
    content = render()
    check = "--check" in sys.argv
    if check:
        current = open(JS_PATH, encoding="utf-8").read() if os.path.exists(JS_PATH) else ""
        if current != content:
            print("data/timeline.js 与 timeline.json 不同步，请运行 python tools/build_timeline_js.py")
            return 1
        print("timeline.js 已是最新")
        return 0
    with open(JS_PATH, "w", encoding="utf-8", newline="\n") as f:
        f.write(content)
    print("wrote", os.path.relpath(JS_PATH, ROOT))
    return 0


if __name__ == "__main__":
    sys.exit(main())