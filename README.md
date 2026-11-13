# LLM Evolution Atlas (大语言模型演进全景图谱)

> 从 2017 年 Transformer 与 2018 年 GPT-1 起源，全面梳理全球大模型技术脉络、中美科技企业竞争格局、开源与闭源博弈及未来智能范式展望。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Awesome](https://awesome.re/badge.svg)](https://github.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## 📖 项目定位与导读

本项目系统梳理了从 2017 年至今大语言模型（LLM）领域的全景发展脉络。全书分为八个核心专题、一套结构化历史数据库，以及一个支持开箱即用的前端可视化时间线系统。

### 核心亮点
- **时间主线清晰**：从序列建模危机、预训练范式奠基，到千亿尺度定律、对齐革命，再到 MoE、多模态与 System 2 推理期算力演进。
- **中美企业全景**：系统对比美国（OpenAI, Google, Meta, Anthropic, xAI, Microsoft）与中国（DeepSeek, 阿里通义千问, 智谱 AI, 月之暗面 Kimi, 百度, 字节跳动, 腾讯等）的战略布局。
- **开源闭源博弈**：深度复盘权重开源与专有商业 API 的竞争动态、蒸馏生态与成本重构。
- **交互式时间线**：内置无依赖的可视化网页 (`visualizer/index.html`)，支持多维度国别、许可类型与技术范式筛选。

---

## 🗺️ 全景演化时间轴 (2017 - 2025+)

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
2024: 百万长上下文突破 (Gemini 1.5); 原生多模态 (GPT-4o); DeepSeek-V2 提出 MLA 架构
 │
2025+: 推理期算力扩展 (o1/o3); DeepSeek-R1 纯强化学习涌现顿悟; 智能体与具身物理世界
```

---

## 📂 专题章节索引

| 章节目录 | 核心涵盖模型与技术 | 演进主线概要 |
| :--- | :--- | :--- |
| [第一章：起源与基石 (2017-2019)](docs/01-genesis-and-transformer.md) | Transformer, GPT-1, BERT, GPT-2, T5 | 循环网络瓶颈突破、自注意力原理、自回归与双向掩码范式确立 |
| [第二章：尺度定律与 GPT-3 (2020-2021)](docs/02-scaling-laws-and-gpt3.md) | Scaling Laws, GPT-3, CPM, 盘古, Chinchilla | 幂律规律指导千亿投入、涌现能力辩证、算力最优配置修正 |
| [第三章：对齐革命与 ChatGPT (2022)](docs/03-chatgpt-and-alignment.md) | InstructGPT, RLHF, PPO, ChatGPT, Claude 原型 | 语言概率续写与人类意图对齐、3H原则、RLAIF 宪政自省 |
| [第四章：寒武纪大爆发与搜索战 (2023)](docs/04-cambrian-explosion-2023.md) | GPT-4, LLaMA 1/2, New Bing, Bard, Phi, ChatGLM, 文心, 通义 | 搜索入口白刃战、Prometheus RAG、万亿 MoE、小模型 SLM、百模大战 |
| [第五章：架构能效与长上下文 (2023末-2024中)](docs/05-moe-long-context-efficiency.md) | Gemini 1.5, GPT-4o, Claude 3.5, LLaMA 3.1, DeepSeek-V2 | 百万 Token 大海捞针、端到端语音交互、MLA 低显存压缩与降本 |
| [第六章：深度推理与后训练强化 (2024末-2025+)](docs/06-reasoning-and-o1-r1-era.md) | OpenAI o1/o3, DeepSeek-V3, DeepSeek-R1, QwQ | 数据墙危机、Test-Time Compute 慢思考、GRPO 与纯 RL 顿悟涌现 |
| [第七章：中美双雄与开源/闭源演进矩阵](docs/07-us-cn-and-open-closed-matrix.md) | 中美科技企业战略阵型、全尺寸企业级矩阵 | 算力供给差异下的系统工程突破、代差收敛周期、私有化落地 |
| [第八章：未来展望与未解挑战](docs/08-future-horizons-and-challenges.md) | SSM/Mamba, MCP 智能体, 具身世界模型, 能源墙 | 后 Transformer 骨干网络、通用工具协议、物理模拟与合成数据陷阱 |

---

## 🏢 中美重点机构与模型产品矩阵概览

```
 机构分类        代表企业 / 团队                     主力模型系列与技术特色
─────────────────────────────────────────────────────────────────────────────────
 美国前沿实验室  OpenAI                             GPT 系列, GPT-4o, o1, o3 (尺度定律与推理开拓)
                 Microsoft                          New Bing, Copilot, Phi-1~4 (Prometheus 搜索 RAG 与合成数据 SLM)
                 Anthropic                          Claude 1-3.7, MCP 协议, Computer Use (安全与代码)
                 Google DeepMind                    Gemini 1.5/2.0, Bard, Gemma, T5 (全栈 TPU 与原生多模态)
                 Meta AI                            LLaMA 1, 2, 3, 3.1 405B (全球开源事实标准)
                 xAI                                Grok-1/2/3 (万卡 Colossus 集群与实时数据)
                 xAI                                Grok-1/2/3 (万卡 Colossus 集群与实时数据)

 中国领军力量    DeepSeek (深度求索)                 DeepSeek-V2/V3, R1 (MLA架构, 纯RL推理, 极端能效)
                 阿里巴巴 (通义千问)                 Qwen 1-2.5, QwQ, Qwen-Max (全尺寸矩阵, 顶级开源基座)
                 智谱 AI                            ChatGLM, GLM-4, GLM-Voice (清华传承, 端侧友好与全模态)
                 月之暗面 (Moonshot AI)              Kimi Chat, Kimi k1.5 (超长无损上下文, 多模态慢思考)
                 百度                               文心一言 (ERNIE 3.5/4.0), 飞桨协同 (产业级知识增强)
                 字节跳动                           豆包通用模型, 豆包 1.5 Pro (国民级日均万亿 Token 落地)
                 腾讯                               混元 (Hunyuan-Large 389B MoE), 微信生态赋能
─────────────────────────────────────────────────────────────────────────────────
```

---

## 🖥️ 本地可视化时间线运行方式

仓库自带一个交互式时间线可视化界面，无需安装繁琐的后端依赖环境，开箱即用：

1. **直接浏览器打开**：
   - 导航至 `visualizer/index.html`，双击或右键选择任意现代浏览器（Chrome / Edge / Firefox / Safari）打开即可。
2. **本地静态服务器运行**（推荐）：
   ```bash
   cd visualizer
   python -m http.server 8000
   # 浏览器访问 http://localhost:8000
   ```
3. **功能特性**：
   - 支持按**国家归属（中国 / 美国 / 欧洲）**、**授权属性（开源权重 / 专有闭源）**、**技术类型（基础 / 稠密 / MoE / 推理 / 多模态）** 进行多维度交叉过滤；
   - 实时检索模型名称、技术术语（如 `MLA`、`RLHF`、`o1`、`FP8`）；
   - 点击卡片弹窗查看详细规格参数与章节解析。

---

## 🔭 未来演进趋势展望简述

1. **计算重心转移**：由单纯依靠海量无监督语料的预训练算力（Pre-training Compute），向利用环境反馈与强化学习的推理期算力（Test-Time Compute）大幅倾斜；
2. **连接标准确立**：以 Model Context Protocol (MCP) 为代表的通用协议使大模型真正成为数字世界的操纵中枢；
3. **物理世界闭环**：通过具身智能机器人与空间物理世界模型，突破纯符号文本空间，实现三维感知交互。

---

## 📄 许可与贡献

- 本项目采用 [MIT 许可证](LICENSE)；
- 欢迎提交 PR 补充最新模型基准、修正技术细节，详见 [贡献指南](CONTRIBUTING.md)。
