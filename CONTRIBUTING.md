# 贡献指南 (Contributing Guide)

感谢关注与参与 **LLM Evolution Atlas** 项目！大语言模型领域发展日新月异，我们非常欢迎来自社区的补充、修正与完善。

## 在提 PR 之前

请先跑一遍本地校验（CI 也会跑同样的命令）：

```bash
python tools/build_timeline_js.py      # 由 data/timeline.json 生成 data/timeline.js
python tools/validate.py               # 结构、枚举、排序、docLink 校验
```

- **不要再手工编辑 `data/timeline.js`**，它由脚本生成。
- 新增条目请遵循 [`data/schema.md`](data/schema.md) 的字段定义，尤其是三个枚举字段
  `licenseType` / `entryType` / `countryGroup`。
- 2025 年之后的条目请尽量填写 `source`（官方公告、论文或厂商博客），只有 Wikipedia 的条目会被
  标记为待补。

## 贡献方向

1. **里程碑补充**：新发布的重要模型、产品、协议或行业事件，请同时更新 `data/timeline.json`
   与对应章节。
2. **事实修正**：参数规模、上下文窗口、发布日期、授权协议有误时，请附上一手来源链接。
3. **文档补引用**：往 [`docs/references.md`](docs/references.md) 增加可核验的一手来源，
   替换掉仅有二手报道的条目。
4. **可视化改进**：`index.html` + `assets/app.js` + `assets/style.css` 是全部前端代码。

## 提交流程

1. Fork 本仓库；
2. 新建分支：`git checkout -b feature/model-update`；
3. 修改后跑 `python tools/build_timeline_js.py && python tools/validate.py`；
4. 发起 Pull Request，并在描述里写明修改依据或参考引用。

## 关于"待核实"条目

仓库对查无实据的说法采取**删除或标注**策略（见 [`docs/references.md`](docs/references.md) 第四节）。
如果你能提供一手来源，欢迎把条目加回来——带上链接即可。