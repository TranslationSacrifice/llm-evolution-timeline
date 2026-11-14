# LLM Evolution Atlas (全球大语言模型演进全景图谱)

> **从 2017 年 Transformer 与 2018 年 GPT-1 起源，全面梳理全球大模型技术脉络、中美科技企业竞争格局、开源与闭源博弈、智能体 MCP 生态及未来智能范式展望（覆盖至 2026 年底）。**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Tracked Models: 222+](https://img.shields.io/badge/Tracked%20Models-222%2B-blueviolet.svg)](#-交互式时间线与数据资产)
[![Awesome](https://awesome.re/badge.svg)](https://github.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## 📖 项目定位与导读

本项目系统梳理了从 2017 年至今大语言模型（LLM）领域的全景发展脉络。全书分为**十章深度专题**、**一套收录 222 个关键模型（另含 19 条产品 / 协议 / 事件 / 基建条目）的结构化历史数据库**，以及一个**支持 GitHub Pages 与开箱即用的前端可视化时间线交互系统**。

### 核心亮点
- **时间主线清晰**：从序列建模危机、预训练范式奠基，到千亿尺度定律、对齐革命，再到 MoE、多模态、System 2 慢思考与 System 1 决策特化。
- **中美企业全景**：系统梳理 21 家顶级机构演进历程，深度拆解 9 大核心企业演进树（OpenAI, Anthropic, Google, Meta, DeepSeek, 阿里通义千问, 字节跳动豆包, Mistral, xAI）。
- **开源闭源博弈**：深度复盘开源（Open Weights）与商业 API 的周期律、知识蒸馏生态、价格战与 Meta 前沿线转向闭源（Muse Spark，内部代号 Avocado）的关键转折。
- **智能体与 MCP 生态**：专门设立第十章，全景剖析从 Copilot、Function Calling、Devin、Cursor 到 Claude Code、Operator 与 Model Context Protocol (MCP)。
- **交互式时间线**：内置零外部依赖的可视化网页 (`index.html` / `visualizer/index.html`)，支持 18 种技术范式、国别归属与授权属性的高维交叉过滤。

---

## 🗺️ 全景演化时间轴 (2017 - 2026+)

```
2017: Transformer 架构诞生 (Attention Is All You Need)
 │
2018: GPT-1 (生成式自回归) 与 BERT (双向掩码) 范式奠基
 │
2019: GPT-2 验证 Zero-Shot 潜力; T5 统一 Text-to-Text 框架
 │
2020: OpenAI 确立 Scaling Laws; GPT-3 揭示 In-Context Learning
 │
2021: 中美千亿参数竞赛启动 (CPM, 盘古, 悟道, ERNIE, Megatron)
 │
2022: Chinchilla 修正尺度定律; InstructGPT 确立 RLHF; ChatGPT 引爆消费级交互
 │
2023: GPT-4 开启万亿 MoE 时代; New Bing 与 Bard 打响搜索入口战; LLaMA 点燃全球开源浪潮; 中国开启“百模大战”
 │
2024: 百万长上下文突破 (Gemini 1.5); 原生多模态 (GPT-4o); DeepSeek-V2 提出 MLA 架构; OpenAI o1 确立慢思考
 │
2025: 推理期算力扩展与纯 RL 平权 (DeepSeek-R1); GPT-5 统一内生推理; 智能体工具层 (MCP / Claude Code)
 │
2026: Meta 前沿线转向闭源（内部代号 Avocado，落地产物 Muse Spark）; Jev 掀起 System 1 决策模型讨论; 具身智能 (π₀/GR00T/GO-2) 与世界模型 (Cosmos/Genie 3) 全面分流
```

---

## 🌳 九大核心科技公司演进谱系树 (Company Evolution Trees)

### 1. OpenAI (美国 · 拓荒与内生统一)
```
GPT-1 (2018.06) ──> GPT-2 (2019.02) ──> GPT-3 (2020.05) ──> InstructGPT / ChatGPT (2022.11)
  │
  └──> GPT-4 (2023.03, 万亿MoE) ──> GPT-4 Turbo (2023.11) ──> GPT-4o (2024.05) ──> GPT-4o mini (2024.07)
         │
         ├──> o1-preview / o1-mini (2024.09) ──> o1 / o3-mini (2024.12-2025.01) ──> o3-pro (2025.06)
         │
         ├──> GPT-4.1 (2025.04, 1M 上下文编码)
         │
         └──> GPT-5 (2025.08, 内生自适应推理统一) ──> gpt-oss (2025.08, 本地权重)
                │
                └──> GPT-5.6 (Luna/Terra/Sol, 2026.07) ──> GPT-6 (Astra/Sol/Luna, 2026.09) ──> GPT-6 Cyber (2026.11)
```

### 2. Anthropic (美国 · 宪政对齐与代码王座)
```
Claude 1.0 (2023.03) ──> Claude 2 / 2.1 (2023, 100k-200k) ──> Claude 3 (Haiku / Sonnet / Opus, 2024.03)
  │
  └──> Claude 3.5 Sonnet / Haiku (2024.06/10, 代码登顶 / Computer Use / 开源 MCP 协议)
         │
         ├──> Claude 3.7 Sonnet (2025.02, 首创混合推理 Extended Thinking)
         │
         └──> Claude 4 系列 (Opus/Sonnet, 2025.05) ──> Opus 4.1 / Sonnet 4.5 (2025 下半年)
                │
                └──> Claude Fable 5 / Mythos 5 (2026.06, Mythos 走受限访问 Project Glasswing)
                       │
                       └──> Claude Opus 5 (2026.07) ──> Opus 5.5 / Sonnet 5.5 / Haiku 5.5 (2026.09-10)
                              │
                              └──> Fable 5.2 / Mythos 5.2 (2026.11)
```

### 3. Google / Google DeepMind (美国 · 全栈硬件与原生多模态)
```
Transformer (2017) ──> BERT / T5 (2018-2019) ──> Chinchilla / PaLM (2022) ──> Bard / LaMDA (2023)
  │
  └──> Gemini 1.0 (Nano/Pro/Ultra, 2023.12)
         │
         ├──> Gemini 1.5 Pro / Flash (2024.02/05, 1M-2M 极限上下文捞针)
         ├──> Gemma 1 / 2 / 4 家族 (2024-2026, 端侧轻量级开放权重)
         │
         └──> Gemini 2.0 (Flash/Thinking, 2024.12) ──> Gemini 3 Pro / Flash (2026)
                │
                └──> Gemini 4 家族 (Argon 2026.09 / Carbon 2026.10 / Hydrogen 2026.11) ──> Gemini Omni (2026.05, 任意模态输入生成视频)
```

### 4. Meta (美国 · 开源主力到 Muse Spark 闭源转折)
```
LLaMA 1 (2023.02, 7B-65B 学术开源) ──> LLaMA 2 (2023.07, 商用许可/GQA)
  │
  └──> LLaMA 3 (2024.04, 8B/70B, 15T 语料) ──> LLaMA 3.1 (2024.07, 405B 首个平齐顶级闭源开源巨模)
         │
         ├──> LLaMA 3.2 (2024.09, 端侧+视觉多模态)
         ├──> Llama 4 Scout / Maverick (2025-2026, 开放权重主力基座)
         │
         └──> ★ 路线转向: Muse Spark (2026.04, 内部代号 Avocado; 原 Llama 5 继任者转向闭源商业 API)
```

### 5. 深度求索 DeepSeek (中国 · 算法第一性原理与极端能效)
```
DeepSeek-LLM 67B / Coder (2023.11) ──> DeepSeek-Math (2024.02, GRPO 算法探索)
  │
  └──> DeepSeek-V2 / Lite (2024.05, 提出 MLA 注意力机制与 DeepSeekMoE, 显存骤降 93%)
         │
         ├──> DeepSeek-Coder-V2 (2024.06, 236B MoE 支持 338 种编程语言)
         │
         └──> DeepSeek-V3 (2024.12, 671B MoE, FP8 训练, 557 万美元极限低成本)
                │
                └──> DeepSeek-R1 (2025.01, 纯 RL 自发顿悟, 671B 全尺寸与蒸馏权重全开源)
                       │
                       └──> DeepSeek-V4 (Flash 284B / Pro 1.6T, 2026.04, MIT) ──> V4.1-Flash (2026.09)
```

### 6. 阿里巴巴 通义千问 Qwen (中国 · 全尺寸矩阵与 Apache 2.0 开源主力)
```
Qwen-7B / 14B / 72B (2023.08-11) ──> Qwen 1.5 (2024.02) ──> Qwen 2 (2024.06)
  │
  └──> Qwen 2.5 家族 (Dense / Coder / Math, 2024.09, 18T 优质语料, 全球开源标杆)
         │
         ├──> QwQ-32B-Preview (2024.11, 开源慢思考推理) ──> Qwen 2.5-Max (2025.01, 闭源旗舰)
         │
         └──> Qwen3 / Qwen3.8 系列 (2026)
                │
                ├──> Qwen3.8-27B (2026, Apache 2.0 协议, 原生高保真多模态)
                ├──> Qwen3-Coder (2025.07, 480B-A35B, Agentic 编码基座)
                └──> Qwen3.x Thinking (2026, 全尺寸覆盖的深度思考变体)
```

### 7. 字节跳动 豆包 / ByteDance (中国 · 流量吞吐、极低单价与 Seed 全模态)
```
云雀大模型 (2023.08) ──> 豆包通用模型 (2024.05, 0.0008元/千Token, 开启大模型“厘时代”价格战)
  │
  └──> 豆包 1.5 Pro (2025.01, 百万上下文, 支撑日均万亿 Token 流量)
         │
         ├──> Seed-TTS (2024.06, 接近真人的高质量零样本语音合成与克隆)
         ├──> Seedream (即梦 AI 文生图核心引擎) & Seedance (物理规律与高一致性视频生成)
         │
         └──> Seed 2.0 (2025-2026, 全新自研多模态大一统基座)
```

### 8. Mistral AI (欧洲 · 主权 AI、开源 MoE 与企业级 Agent 矩阵)
```
Mistral 7B (2023.09) ──> Mixtral 8x7B (2023.12, 首个引爆开源生态的稀疏 MoE)
  │
  └──> Mistral Large 1/2 (2024, 123B 商业闭源旗舰) ──> Mixtral 8x22B (2024.04)
         │
         ├──> Mistral Nemo (2024.07, 与 NVIDIA 联合研发 12B/128K, Tekken Tokenizer)
         ├──> Mistral Small 3 / 4 (2025-2026, 统一 Instruct + 视觉 + 推理)
         ├──> Mistral Large 3 / 4 (2025-2026, >1T MoE, 1M 上下文, 欧洲主权数据合规)
         │
         └──> 垂直生态矩阵: Devstral (代码专精) / Magistral (推理专精) / Voxtral (端到端全双工语音)
```

### 9. xAI (美国 · 马斯克十万卡集群与真实数据激进派)
```
Grok-0 (2023.07) ──> Grok-1 (2023.11 / 2024.03 开源 314B 稀疏 MoE, Apache 2.0)
  │
  └──> Grok-2 & Grok-2 mini (2024.08, LMSYS 排行前列, 集成 FLUX 图像生成)
         │
         └──> Grok 3 (2025.02, 基于田纳西州孟菲斯 10万卡 Colossus 集群, DeepSearch + Think 慢思考)
                │
                └──> Grok 4 / 4 Fast (2025.07, 2M 上下文, 工具调用标杆)
                       │
                       └──> Grok 4.5 / 4.6 (2026.07-08, 终端自动化与 Agentic 执行标杆)
```

---

## 📂 专题章节索引 (全景长卷)

| 章节目录 | 核心涵盖模型与技术 | 演进主线概要 |
| :--- | :--- | :--- |
| [第一章：起源与基石 (2017-2019)](docs/01-genesis-and-transformer.md) | Transformer, GPT-1, BERT, GPT-2, T5 | 循环网络瓶颈突破、自注意力原理、自回归与双向掩码范式确立 |
| [第二章：尺度定律与 GPT-3 (2020-2021)](docs/02-scaling-laws-and-gpt3.md) | Scaling Laws, GPT-3, CPM, 盘古, Chinchilla | 幂律规律指导千亿投入、涌现能力辩证、算力最优配置修正 |
| [第三章：对齐革命与 ChatGPT (2022)](docs/03-chatgpt-and-alignment.md) | InstructGPT, RLHF, PPO, ChatGPT, Claude 原型 | 语言概率续写与人类意图对齐、3H原则、RLAIF 宪政自省 |
| [第四章：寒武纪大爆发与搜索战 (2023)](docs/04-cambrian-explosion-2023.md) | GPT-4, LLaMA 1/2, New Bing, Bard, Phi, ChatGLM, 文心, 通义 | 搜索入口白刃战、Prometheus RAG、万亿 MoE、小模型 SLM、百模大战 |
| [第五章：架构能效与长上下文 (2023末-2024中)](docs/05-moe-long-context-efficiency.md) | Gemini 1.5, GPT-4o, Claude 3.5, LLaMA 3.1, DeepSeek-V2 | 百万 Token 大海捞针、端到端语音交互、MLA 低显存压缩与降本 |
| [第六章：深度推理与后训练强化 (2024末-2025)](docs/06-reasoning-and-o1-r1-era.md) | OpenAI o1/o3, DeepSeek-V3, DeepSeek-R1, QwQ | 数据墙危机、Test-Time Compute 慢思考、GRPO 与纯 RL 顿悟涌现 |
| [第七章：中美双雄与开源/闭源演进矩阵](docs/07-us-cn-and-open-closed-matrix.md) | 中美欧企业战略阵型、21家科技公司全景矩阵 | 算力供给差异下的系统工程突破、代差收敛周期、私有化落地 |
| [第八章：未来展望与未解挑战](docs/08-future-horizons-and-challenges.md) | SSM/Mamba, 具身智能, 世界模型, 能源墙 | 后 Transformer 骨干网络、通用工具协议、物理模拟与合成数据陷阱 |
| [第九章：前沿裂变与范式重构 (2025-2026)](docs/09-frontier-2025-2026-and-system1-decision.md) | GPT-5/6, Claude 5/Mythos, Muse Spark（代号 Avocado）, Jev, Decision 3.0, 具身/世界模型 | 旗舰内生统一、Meta闭源转向、Jev“智能 if 语句”决策模型破局、具身控制与世界仿真分流 |
| [第十章：智能体、MCP 与工具生态演进史](docs/10-agent-mcp-and-tools-ecosystem.md) | Codex, Copilot, CodeGeeX, 通义灵码, 文心快码, Devin, Cursor, Trae, Claude Code, Google Antigravity, MCP, A2A | 从单步代码补全到完全自主软件工程、AI-Native IDE、终端原生智能体与分布式 Agent 协同平台 |

---

## 🛠️ 全球与中国 AI 编码智能体 & AI-Native IDE 演进主线

大模型最先被验证带来质变性生产力的垂直领域即为**软件工程**。从 2021 年 Codex 问世至今，中美科技阵营在智能编程与 Agent 工具链上形成了极具特色的演进双轨：

```
                    全球与中国 AI 编程智能体演进双轨 (2021 - 2026)

  时间阶段               🇺🇸 美国阵营 (US)                             🇨🇳 中国阵营 (CN)
─────────────────────────────────────────────────────────────────────────────────────────────
 2021-2022  OpenAI Codex (HumanEval / FIM 基准确立)       清华/智谱 CodeGeeX (13B 多语言开源基座)
            GitHub Copilot (首创 IDE 补全插件体验)
 ─────────────────────────────────────────────────────────────────────────────────────────────
 2023       OpenAI Function Calling (JSON 调用标准)       百度文心快码 Comate (产业级全生命周期助手)
            ChatGPT Plugins & Custom GPTs 平台化          阿里通义灵码 (千万级安装，企业代码库 RAG 标杆)
 ─────────────────────────────────────────────────────────────────────────────────────────────
 2024       Cognition AI Devin (首个自主软件工程师)       字节跳动 扣子 Coze (可视化多 Agent 编排平台)
            Cursor (AI-First IDE, Composer 跨文件编辑)    腾讯云 AI 代码助手 (混元引擎与小程序云生态)
            Windsurf (Cascade Flow 协同编程)
            Anthropic MCP (Model Context Protocol 开源)
 ─────────────────────────────────────────────────────────────────────────────────────────────
 2025-2026  Anthropic Claude Code (终端原生自主 CLI 智能体) 字节跳动 Trae (AI-Native IDE, Builder模式)
            OpenAI Operator (浏览器 GUI 操控智能体)        Qwen3-Coder (专攻复杂工具调度与 Agentic 编码)
            Google Antigravity (多 Subagents 协同、       DeepSeek-V4 (极低成本端到端 Agent 编码基座)
            Native Swarm 消息总线与动态画布平台)
```

---

## 💡 交互式时间线与数据资产

仓库提供完整、结构化的大模型历史数据库与开箱即用的前端交互式系统：

- **结构化历史数据**（字段定义见 `data/schema.md`，校验脚本 `tools/validate.py`）：
  - `data/timeline.json`：收录 222 个关键模型（另含 19 条产品 / 协议 / 事件条目）的完整元数据（模型名、机构、发布年月、国别、开源/闭源、参数规模、上下文窗口、关键技术点与历史意义）。
  - `data/timeline.js`：适配浏览器本地离线运行的轻量数据载体。
  - `data/company-profiles.json`：21 家全球顶尖大模型研发机构与企业的战略定位、算力集群与产品矩阵。
- **可视化时间线交互界面**：
  - `index.html`（根目录直出，直接支持 GitHub Pages）与 `visualizer/index.html`。
  - **18 种技术范式筛选**：基础理论 (Foundation)、稠密基座 (Dense)、混合专家 (MoE)、深度推理 (Reasoning)、System 1 纯决策 (Jev)、原生多模态 (Multimodal)、智能体/工具 (Agent/MCP)、代码专精、文生视频、图像生成、语音音频、具身智能、世界模型、极致效率端侧 (SLM)、垂直特化 (Science/Bio)、向量检索 (Embedding)、安全与对齐、算力基础设施。
  - **国别与授权过滤**：中国 (CN) / 美国 (US) / 欧洲 (EU) / 其他，以及开源权重、专有闭源、协议论文三类授权属性交叉分析。
  - **全文实时检索**：按模型名、企业、技术关键词（如 `MLA`, `RLHF`, `FP8`, `o1`, `GRPO`, `Jev`, `MCP`）秒级搜索。

### 运行方式
- **GitHub Pages 在线访问**：[https://translationsacrifice.github.io/llm-evolution-timeline/](https://translationsacrifice.github.io/llm-evolution-timeline/)
- **本地直接打开**：双击根目录下 `index.html` 即可在任意现代浏览器中浏览，零环境依赖（`visualizer/index.html` 现为兼容旧链接的跳转页）。
- **本地静态服务器运行**（推荐）：
  ```bash
  python -m http.server 8000
  # 浏览器访问 http://localhost:8000
  ```

---

## 📄 许可协议与参与贡献

- 本项目基于 [MIT 许可证](LICENSE) 完全开源。
- 欢迎提交 PR 补充最新模型、修正技术参数或完善章节解读，详情请参阅 [贡献指南](CONTRIBUTING.md)。
