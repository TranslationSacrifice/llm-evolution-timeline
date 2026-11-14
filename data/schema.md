# 数据字段说明（data/schema.md）

`data/timeline.json` 是唯一数据源，`data/timeline.js` 由 `tools/build_timeline_js.py` 自动生成，
不要手工编辑 `.js`。

## 一条记录长什么样

```json
{
  "id": "claude-opus5-2026",
  "date": "2026-07",
  "name": "Claude Opus 5",
  "company": "Anthropic",
  "country": "US",
  "countryGroup": "US",
  "license": "Proprietary / Closed API",
  "licenseType": "closed",
  "entryType": "model",
  "category": "Reasoning",
  "parameters": "未公开",
  "contextWindow": "1M",
  "highlight": "……",
  "keyTech": ["Opus Tier", "Long-horizon Coding"],
  "source": "https://en.wikipedia.org/wiki/Claude_(AI)",
  "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
  "era": "超级模型与具身 2026"
}
```

## 字段

| 字段 | 必填 | 说明 |
| :--- | :--: | :--- |
| `id` | ✅ | 全局唯一，小写英文 + 连字符；一旦发布尽量不改，避免外链失效 |
| `date` | ✅ | `YYYY-MM`，数组必须按此字段升序（同月保持人工顺序） |
| `name` | ✅ | 展示名；多版本产品用 ` / ` 并列，如 `Grok 4 / 4 Fast / 4.1` |
| `company` | ✅ | 原始机构名，允许带括号注释；聚合请用 `docs/07` 的机构表，不要直接 group by |
| `country` | ✅ | 原始值（US/CN/EU/AE/KR/CA/IL/DE/US-EU…） |
| `countryGroup` | ✅ | 归一后的国别组：`CN` / `US` / `EU` / `other`，页面筛选只用这个 |
| `license` | ✅ | 自由文本，保留原始授权描述（如 `Open Weights (Apache 2.0)`） |
| `licenseType` | ✅ | **枚举**：`open`（有权重可下载）/ `closed`（仅 API 或商业授权）/ `other`（论文、学术、协议、基建） |
| `entryType` | ✅ | **枚举**：`model` / `architecture` / `infrastructure` / `product` / `protocol` / `event`。统计"模型数量"只算 `model` |
| `category` | ✅ | 18 类技术范式之一，白名单见 `tools/validate.py` |
| `parameters` | ✅ | 参数量描述；未知写 `未公开`，不要写 `N/A` 混用 |
| `contextWindow` | ✅ | 文本模型填 token 数（`128K` / `1M`）；图像/视频/具身类填模态容量或 `N/A` |
| `highlight` | ✅ | 一句话讲清"为什么它重要"，60–120 字，避免营销词 |
| `keyTech` | ✅ | 非空字符串数组，3–6 个；尽量复用已有标签（如 `MoE`、`MLA`、`RLHF`） |
| `source` | 建议 | 一手来源：官方公告、论文（arXiv）、厂商博客；2025 年后的条目应尽量补齐 |
| `docLink` | 可选 | 指向 `docs/` 下的章节相对路径；缺失时页面不显示"阅读章节"按钮 |
| `era` | ✅ | 所属阶段，与 `README` 的时间轴粗粒度对齐 |

## 四大核心分层（Layer Taxonomy）

时间线数据划分为四个互相关联的演进层次：
1. **模型与模型家族 (`model`)**：具备具体版本号的基座与衍生权重（如 GPT-4o, DeepSeek-R1, Qwen2.5, Claude 3.5 Sonnet 等）；
2. **架构与算法 (`architecture`)**：底层序列建模、注意力变体、记忆与生成范式（如 Transformer, Mamba / Mamba-2, RWKV-7, Gated DeltaNet, Kimi Linear/KDA, Titans, LLaDA 扩散语言模型, BLT 字节级架构等）；
3. **训练与推理基础设施 (`infrastructure`)**：显存管理、计算调度、低比特量化与加速引擎（如 FlashAttention, PagedAttention / vLLM, SGLang / RadixAttention, Speculative Decoding, BitNet b1.58 等）；
4. **产品、协议与行业事件 (`product` / `protocol` / `event`)**：开发者工具与 Agent 宿主（Cursor, Trae, Claude Code）、连接标准（MCP, A2A）、超算基础设施（Stargate）与安全治理事件。

## 校验与构建

```bash
python tools/build_timeline_js.py      # json -> js
python tools/validate.py               # 结构 + 枚举 + 排序 + 链接校验
python tools/validate.py --strict      # 警告也算失败（发布前自查用）
```

CI（`.github/workflows/validate.yml`）会在 push / PR 时执行上述检查，并校验
`data/timeline.js` 是否与 `.json` 同步。

## 修订记录

- **2026-11-14**：新增 `licenseType` / `entryType` / `countryGroup` 三个枚举字段；
  删除 6 条查无实据或重复的条目；`Claude 5 家族` 改写为已验证的 `Claude Opus 5 (2026-07)`；
  `o1` 正式版日期修正为 2024-12；GPT-4 参数量改为"第三方推测"表述。迁移脚本见
  `tools/migrate_2026_11_14.py`。