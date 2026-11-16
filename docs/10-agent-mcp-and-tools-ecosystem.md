# 第十章：智能体、MCP 与工具生态演进史 (2021 - 2026) —— 从代码补全到自主智能体、统一连接协议与工程平台

> **核心主题**：智能体（Agent）范式革命、OpenAI Codex 与 GitHub Copilot、开源微调与基座（Nous Hermes 3 / Qwen-Coder）、中国产业级助手（CodeGeeX / 通义灵码 / 文心快码）、AI-First 编辑器（Cursor / Trae / Cline）、终端原生智能体（Claude Code / OpenCode / Pi / oh-my-pi）、企业级平台（Factory Droid / Google Antigravity / OpenClaw）、Model Context Protocol (MCP) 标准大一统、智能体外壳（DeepSeek Harness `dsh`）与安全治理。

---

## 1. 范式跨越：为什么“大模型 + 工具”是通向 AGI 的必经之路？

纯粹的大语言模型（LLM）即便参数规模达到千亿乃至万亿，本质上依然是一个被禁锢在**静态权重空间**里的概率计算器：
1. **无法获取实时动态信息**：受制于知识截止日期（Knowledge Cutoff），模型无法感知当下的生产环境告警、最新 API 文档或代码库动态变更；
2. **缺乏确定性计算能力**：自回归预测下一个词在进行多位数长除法或复杂矩阵运算时极易出现微小浮点误差，而传统计算机计算器可以在 1 微秒内给出严格精确的结果；
3. **缺乏改变环境的执行手脚**：模型输出的只是文本字符，无法自主修改本地工程文件、执行编译测试套件、部署云服务器或向第三方 API 发起写入。

从“语言模型（Passive Oracle）”走向“自主行动智能体（Autonomous Agent）”，核心在于赋予模型**感知（Perception）、规划（Planning）、记忆（Memory）与工具执行（Tool Use）**的四位一体能力。

```
                     自主智能体 (Autonomous Agent) 核心架构

   ┌─────────────────────────────────────────────────────────────┐
   │                      用户自然语言意图                        │
   └──────────────────────────────┬──────────────────────────────┘
                                  ▼
   ┌─────────────────────────────────────────────────────────────┐
   │                  规划与决策中枢 (Brain / LLM)                │
   │  - 目标拆解 (Decomposition)        - 自我反思纠错 (Reflection)│
   │  - 短期上下文 / 长期向量记忆 (Memory)                         │
   └──────────────────────────────┬──────────────────────────────┘
                                  ▼
   ┌─────────────────────────────────────────────────────────────┐
   │            通用工具与协议连接层 (Execution & MCP)            │
   ├──────────────┬──────────────┬──────────────┬────────────────┤
   │ 终端与代码   │ 浏览器 GUI   │ 外部 API 集合 │ 数据库与检索   │
   │ (Bash/Python)│(Computer Use)│(SaaS / REST) │ (Vector / SQL) │
   └──────────────┴──────────────┴──────────────┴────────────────┘
```

---

## 2. 早期萌芽与代码生成助理 (2021 - 2022)

### 2.1 OpenAI Codex 与 GitHub Copilot (2021)
2021 年是代码大模型与智能辅助编程的元年：
- **OpenAI Codex (2021.07)**：
  - OpenAI 发表开创性论文 *Evaluating Large Language Models Trained on Code*，发布基于 GPT-3 在 GitHub 海量公开开源代码库上微调得到的专用代码生成模型 **Codex (12B)**；
  - **HumanEval 基准**：提出由 164 个手工编写带有单元测试的 Python 编程问题组成的测试集，确立了全球评估代码生成质量的黄金标准（pass@k 指标）；
  - **Fill-in-the-Middle (FIM)**：突破了自回归模型只能从前向后单向续写的限制，支持结合光标前缀（Prefix）与后缀（Suffix）推断中间缺失代码。
- **GitHub Copilot (2021.06 技术预览, 2022.06 正式商用)**：
  - GitHub、微软与 OpenAI 联手打造的首个消费级 AI 结对编程助手（Pair Programmer），以轻量级插件形式无缝嵌入 VS Code 与 JetBrains IDE；
  - **历史意义**：这是生成式 AI 首次真正深入全球数百万人类工程师的日常生产力链路，证明了“补全上下文 $\to$ 预测代码块”的巨大商业价值，拉开了现代代码智能体的帷幕。

### 2.2 中国代码大模型开源先锋：清华与智谱 CodeGeeX (2022.09)
在中国大模型生态早期，代码领域往往被视为技术壁垒最高的赛道之一：
- **CodeGeeX (2022.09)**：由清华大学 KEG 实验室与智谱 AI 联合研发并完全开源的 130 亿参数（13B）多语言代码大模型；
- **技术突破**：在单台国产算力与 NVIDIA 服务器上高效训练，支持 Python、C++、Java、JavaScript、Go 等 20 多种编程语言；
- **跨语言代码互译**：首创在 IDE 插件中实现跨语言代码语义等价转换（如将 C++ 自动化迁移为 Python/Go），并完全开放模型权重与 VS Code / JetBrains 插件生态，成为国内代码大模型技术与生态的开山之作。

---

## 3. 工具调用探索与中国产业级助手落地 (2023)

ChatGPT 引爆全球后，大模型连接外部数字世界的架构探索进入白热化阶段：

```mermaid
timeline
    title 2023 - 2024 工具调用演进节点
    2023.03 : ChatGPT Plugins (首个第三方插件平台)
    2023.06 : OpenAI Function Calling (结构化 JSON 函数调用)
    2023.06 : 百度文心快码 Comate (产业级研发智能体)
    2023.11 : GPTs / GPT Store 发布 (零代码智能体平台化)
    2023.11 : 阿里通义灵码 (国内千万级编码助手)
    2024.01 : Cursor 兴起 (AI-Native 编辑器重构)
    2024.03 : Devin 发布 (首个自主 AI 软件工程师)
    2024.06 : Cline / Claude Dev (开源自主编码插件)
    2024.08 : Nous Hermes 3 (开源可操纵智能体基座)
    2024.11 : Anthropic 开源 MCP 协议 (AI 的 USB-C 接口)
    2025.01 : 字节跳动 Trae (AI-Native IDE 全球破局)
```

### 3.1 ChatGPT Plugins (2023.03) 的热潮与退场反思
- 2023 年 3 月，OpenAI 推出 ChatGPT Plugins，首次接入 Expedia、Wolfram Alpha、KAYAK 等 70 多个第三方外部服务；
- **经验教训**：早期插件依赖复杂的 API 规范解析与网络轮询，用户体验极易卡顿、多插件协作时路由混乱，最终在 2024 年初被 OpenAI 正式关停，为后续更加标准化的工具协议提供了前车之鉴。

### 3.2 函数调用标杆：Function Calling (2023.06)
- OpenAI 在 GPT-3.5/4 系列中原生支持 **Function Calling**：允许开发者提供 JSON Schema 格式的函数签名定义，模型自发判断是否需要调用、并严格按照 Schema 输出类型安全的参数 JSON。这成为所有现代 Agent 系统的底层调用基础。

### 3.3 GPTs 与平台化浪潮 (2023.11)
- OpenAI 推出 GPTs 与 GPT Store，允许普通用户无需编写任何代码，通过自然语言对话配置指令（System Prompt）、挂载私有知识库（RAG）和绑定 Actions API，构建专属自定义智能体。

### 3.4 中国产业级智能研发助手规模化爆发 (2023 - 2024)
面对中国庞大的工程师群体与复杂严苛的企业内部研发环境，国内科技巨头迅速展开了产业级代码助手布局：
- **阿里巴巴 通义灵码 (TONGYI Lingma, 2023.11)**：基于阿里云通义大模型（Qwen-Coder 前沿底座）打造，成为国内首个突破千万级下载量的 AI 编程助手，在金融、互联网和制造业企业中占据国内市场首位；
- **百度 文心快码 (Baidu Comate, 2023.06)**：依托百度飞桨平台与文心一言基座打造的产业级研发智能体，深度融入百度内部超 80% 的日常研发流水线，并在金融、央国企及运营商私有化部署中居于领先；
- **腾讯云 AI 代码助手 (2024.04)**：基于腾讯混元大模型打造，深度融入微信小程序开发者工具（WeChat DevTools）与腾讯云 Cloud Studio。

---

## 4. 自主软件工程师与 AI-Native IDE 革命 (2024)

2024 年，智能体从“单步提示词补全”迈向了“长程跨文件自主规划与环境执行”。

### 4.1 Devin 的震撼登场 (Cognition AI, 2024.03)
- 由 Scott Wu 创立的 Cognition AI 发布了全球首个**自主 AI 软件工程师 Devin**；
- 配备完整的沙箱运行环境（内置终端、代码编辑器和浏览器）；
- 在真实 GitHub 开源问题基准 **SWE-bench** 上斩获 13.86% 的无辅助解决率，向世界展示了智能体自主调试错误、运行测试用例、自动修复 Bug 的未来范式。

### 4.2 AI-First IDE 标杆：Cursor 与 Windsurf
- **Cursor (Anysphere)**：重构了传统 VS Code 的交互形式，推出 `Composer`、多文件跨工程同时编辑、全局代码库语义索引以及终端自动纠错，成为硅谷与全球开发者几乎人手必备的生产力神器；
- **Windsurf (Codeium, 2024.11)**：提出“Cascade（瀑布式）Flow”协同人机交互，将人类思考意图与智能体自主探测融合为沉浸式流式编程。

### 4.3 开源自主编码插件：Cline (原 Claude Dev, 2024.06)
- **Saoud Rizwan** 发起的开源自主编码插件（原名 Claude Dev，后更名为 **Cline**），成为 VS Code 官方市场最火爆的开源 Agent 工具之一；
- **核心机制**：在编辑器侧边栏内提供真正的自主行动循环——自主阅读项目文件树、使用统一 Diff 格式修改代码、在内置终端中执行编译测试命令，并深度接入 **MCP 协议**，支持人类在环（Human-in-the-Loop）严格安全确认。

### 4.4 开源可操纵基座：Nous Hermes 3 (Nous Research, 2024.08)
- Nous Research 发布的 **Hermes 3**（8B / 70B / 405B）是开源领域最受推崇的智能体微调模型之一；
- 专精于**可操纵性（Steerability）**、长程系统提示遵从、极其严格的结构化 JSON 输出与复杂工具链函数调用，成为开源 Agent 开发者（如 Hermes Agent、OpenHands）首选的非专有推理基座。

### 4.5 字节跳动 Trae 与 扣子 (Coze)：中国 AI-Native IDE 的全球破局 (2024 - 2025)
- **Trae (ByteDance, 2025.01)**：
  - 字节跳动推出的全新自研 AI-Native 集成开发环境（IDE），直接面向全球开发者发布，打破了 Cursor 在 AI IDE 领域的长期垄断；
  - **Builder 模式与 Agent 进化**：用户只需用自然语言提出产品需求，Trae 能够自主分析项目结构、跨文件创建与修改代码、在内置终端中自动安装依赖并执行编译命令，并配备**实时 Web 视图预览（Web Preview）**与自适应模型路由；
- **扣子 / Coze (ByteDance, 2024.02)**：
  - 字节跳动推出的无代码/低代码 AI Agent 编排平台，支持多智能体协作流、插件市场与多端一键分发。

---

## 5. 时代定义性标准：MCP (Model Context Protocol) 诞生 (2024.11)

在大模型与成千上万外部数据源（GitHub、Slack、PostgreSQL、本地文件、终端工具）连接的过程中，每个开发者都不得不为不同的模型和工具编写定制适配胶水代码，造成严重的“N×M 碎片化孤岛危机”。

```
                    传统 N×M 碎片化连接 vs 统一 MCP 标准

    传统架构 (碎片化维护)                     MCP 标准架构 (开放互联)

   模型 A ──┬── 工具 1 (GitHub)               模型 A ──┐
   模型 B ──┼── 工具 2 (PostgreSQL)            模型 B ──┼──► [ MCP 统一协议中枢 ]
   模型 C ──┴── 工具 3 (Slack)                 模型 C ──┘              │
   (每个模型需要维护专属驱动代码)                                       ▼
                                                       ┌───────┬───────┬───────┐
                                                       │GitHub │ Postgres Slack│
                                                       └───────┴───────┴───────┘
```

### 5.1 什么是 MCP？
2024 年 11 月 25 日，Anthropic 正式开源并宣布推出 **Model Context Protocol (MCP)**：
- **定义**：MCP 被誉为 **“AI 时代的通用 USB-C 接口”**，是一套开放标准协议，用于安全、可审计地向前沿模型暴露本地文件、数据库查询、开发工具和云端 SaaS 接口；
- **三大核心抽象**：
  1. **Resources（只读资源）**：向模型提供上下文文件、日志、数据库表结构等静态数据流；
  2. **Prompts（可复用提示词模版）**：由服务端预先封装的最佳实践交互指令；
  3. **Tools（可执行工具）**：可供模型主动调用并产生实际副作用的确定性功能（如发起 Git Commit、执行 SQL 写入）。
- **行业生态狂潮**：发布后数月内，Block、Apollo、Docker、Zed、Cursor、AWS 以及全网数十万开源开发者迅速加入支持，2025 年底转入行业中立的 Agentic AI Foundation 基金会维护，成为全球智能体连接的绝对事实标准。

---

## 6. 终端原生、多智能体平台与智能体外壳（Harness）大决战 (2025 - 2026)

进入 2025–2026 年，智能体形态迎来了更高阶的分化：从“图形界面的编辑器插件”走向了**“极简高带宽的终端智能体（CLI Agent）”**、**“分布式多智能体工程平台（Agentic Platform / Swarm）”**以及以 **DeepSeek Harness** 为代表的**“智能体外壳（Harness）解耦革命”**。

```
                   智能体形态演进光谱 (2021 - 2026)

  [2021-2022]      [2023-2024]            [2025]                  [2025-2026]
   行级补全       AI-First IDE          终端原生智能体            分布式平台与解耦外壳
  (Copilot /     (Cursor/Trae/         (Claude Code /            (Google Antigravity /
   CodeGeeX)        Cline)               OpenCode / Pi)           DeepSeek dsh / OpenClaw)
      │                │                      │                             │
 仅做光标后补全   跨多文件索引/编辑      驻留命令行/自编自跑/Git PR    多 Agent 拓扑/LSP内嵌/解耦外壳
```

### 6.1 终端自主智能体多样化演进：Claude Code、OpenCode、Pi 与 oh-my-pi

#### (1) Claude Code (Anthropic, 2025.02)
- **Unix 命令行哲学**：Anthropic 官方推出的终端原生自主工具，直接运行在开发者的 Bash / Zsh 环境中；
- 深度整合 MCP 协议与 Git 仓库，自主递归遍历代码树、运行测试用例、排查修复错误并提交 Pull Request。

#### (2) OpenCode (2025.05)
- 开源社区（MIT）推出的全功能终端与 TUI 编码智能体，作为 Claude Code 与 Cursor 的重要开源替代；
- 具备**本地优先（Local LLM First）**架构，支持通过 Ollama / vLLM 直接接入 DeepSeek、Qwen、Llama 等开源权重，彻底杜绝企业核心专有代码出境泄密风险。

#### (3) Pi (Mario Zechner, 2025.02)
- 由著名开发者 Mario Zechner（libGDX 创造者）研发的**极简主义终端智能体框架**；
- 核心回路极其轻巧，仅提供四大基础原语（`read` / `write` / `edit` / `bash`），配备专有的差分终端渲染引擎（`pi-tui`）与统一的多模型抽象（`pi-ai`），以极高的响应速度与极小开销风靡极客圈。

#### (4) oh-my-pi / omp (can1357, 2026.02)
- 标榜 **“A coding agent with the IDE wired in（内嵌完整 IDE 能力的编码智能体）”**，是 Pi 架构的“电池级全面增强版”；
- **核心工程创新**：
  1. **LSP 深度集成**：智能体原生接入 Language Server Protocol，支持符号跳转、类型签名推断与实时编译器诊断；
  2. **哈希锚定精确编辑（Hash-Anchored Edits）**：放弃脆弱的行号匹配，采用基于内容哈希的行级锚定算法，从根本上解决多文件修改时的代码错位与冲突问题；
  3. **Worktree 并行子智能体**：通过 Git Worktree 将复杂需求扇出（Fan-out）给多个并行 Subagents 独立执行，完成后自动三方归并。

### 6.2 智能体外壳革命：DeepSeek Harness (`dsh`, 2026.04)

在 SWE-bench 与实际工程评估中，行业逐渐认识到：**纯模型的裸推理能力仅仅决定了上限，而包裹在模型之外的智能体外壳（Agent Harness）往往决定了 30% 到 50% 的真实交付成败**。

- **DeepSeek Harness (`dsh`)**：深度求索开源的模块化智能体运行时（MIT 协议）；
- **核心架构理念**：
  - **“Everything is a plugin”**：将沙箱终端、文件读写、网页浏览、代码执行器等能力完全插件化解耦；
  - **状态机与重试恢复**：针对模型可能出现的死循环或误操作，外壳提供确定性的上下文窗口修剪（Pruning）、回溯点管理与反思注入；
  - **Harness 标杆效应**：通过社区测试，同一款模型（如 DeepSeek-V4-Flash）在配备不同 Harness（如 `dsh`、mini-SWE-agent、Claude Code）时，其 SWE-bench 解决率与 Token 消耗存在巨大差异，**确立了“模型权重 + 智能体外壳”的双重评估范式**。

### 6.3 企业级与个人自主平台：Factory Droid、OpenClaw 与 Google Antigravity

- **Factory Droid (Factory.ai, 2025.01)**：面向企业级全流程研发的自主软件工程师系统，提供 CLI `droid` 工具、Slack 深度集成与多阶段任务执行（Missions）；
- **OpenClaw (原 Clawdbot / Moltbot, 2026.01)**：由 Peter Steinberger 发起的现象级开源持久化个人 Agent 平台，直接连接 WhatsApp、Telegram、Discord、Slack 等聊天软件，用户在手机端发一条语音或短信，本地常驻 Agent 便自主操控电脑完成文件管理、代码编写、邮件处理与日程调度；
- **Google Antigravity (Google DeepMind, 2025–2026)**：
  - **多层次 Subagents 拓扑协同**：支持主 Agent 按需动态派生 `researcher`、`browser`、`executor` 等特化子智能体，视窗隔离互不干扰；
  - **Native Swarm 异步协同总线**：基于反应式唤醒（Reactive Wakeup）的共享消息看板，支持多同侪智能体（Peer Agents）并行攻坚；
  - **交互式 Artifact 动态画布**：支持 Mermaid 图表、数据报表与前端交互组件（Generative UI）在右侧独立沙箱中热渲染。

---

## 7. 全球主流代码智能体与开发环境全景对比

| 产品 / 平台 | 主导团队 / 国家 | 形态类别 | 核心技术驱动 | 标志性能力与历史定位 |
| :--- | :---: | :--- | :--- | :--- |
| **OpenAI Codex** | OpenAI (美) | 模型 API / 引擎 | GPT-3 微调 (12B) | 开创 HumanEval 评估体系与 FIM 补全，驱动第一代 Copilot |
| **GitHub Copilot** | 微软 / GitHub (美) | IDE 插件 | Codex / GPT-4o | 全球装机量最大的首个商业级 AI 结对编程助手 |
| **CodeGeeX** | 智谱 AI / 清华 (中) | 开源基座 + 插件 | 13B 多语言自研基座 | 国内最早开源的多语言代码模型，首创跨语言互译 |
| **通义灵码** | 阿里云 / 阿里 (中) | IDE 插件 / 助手 | Qwen-Coder 矩阵 | 国内千万级装机量第一，企业级私有代码库 RAG 标杆 |
| **百度文心快码** | 百度 (中) | IDE 插件 / 智能体 | 文心一言 ERNIE | 覆盖编码/单测/审查/重构全生命周期，央国企私有化标杆 |
| **Cursor** | Anysphere (美) | AI-Native IDE | 多模型 API + 语义索引 | 首创 Composer 跨文件同时编辑与代码库语义图谱 |
| **Trae** | 字节跳动 (中) | AI-Native IDE | Claude / GPT / 豆包 | 推出 Builder 模式全自主跨文件工程构建、Web 预览与智能路由 |
| **Cline** | Saoud Rizwan (美) | 开源 VS Code 扩展 | 多模型 + MCP 工具 | 最受欢迎的开源自主编码扩展，编辑器内全自主执行与 Diff 审核 |
| **Nous Hermes 3** | Nous Research (美) | 可操纵开源模型 | LLaMA 3.1 微调 | 开源界最强可操纵智能体基座，函数调用与结构化输出标杆 |
| **Devin** | Cognition AI (美) | 云端自主工程师 | 专有长程规划模型 | 配备独立沙箱、终端与浏览器的首个端到端软件工程师 |
| **Claude Code** | Anthropic (美) | 终端命令行 Agent | Claude 3.7 / 4 + MCP | 扎根 Bash/Zsh，高带宽交互，自主运行测试并提交 Git PR |
| **OpenCode** | OpenCode Team (美) | 开源终端 Agent | 云端前沿 / 本地 Ollama | 终端/TUI 开源自主智能体，本地优先与私有代码隐私隔离 |
| **Pi** | Mario Zechner (欧) | 极简终端智能体 | 极简核心 + pi-tui | 极致极客哲学，微小四原语核心循环与高扩展差分终端 UI |
| **oh-my-pi (omp)** | can1357 (美) | 内嵌 IDE 终端外壳 | 多模型 + LSP 原生 | 内嵌 LSP 诊断、调试器、哈希锚定修改与 Git worktree 并行子智能体 |
| **Factory Droid** | Factory.ai (美) | 企业级研发平台 | 多模型 + Droid CLI | 面向企业全流程研发的自主软件工程师与多阶段 Missions 调度 |
| **OpenClaw** | OpenClaw 社区 (美) | 持久化个人 Agent | 聊天软件原生 + 本地 | 打通 WhatsApp/Telegram/Discord，手机发消息指挥本地电脑自主干活 |
| **DeepSeek Harness**| 深度求索 (中) | 模块化 Agent 外壳 | dsh 极简插件架构 | 提出外壳架构与模型权重同等关键，开源标准智能体执行运行时 |
| **Google Antigravity**| Google DeepMind (美)| 智能体平台 / IDE | Gemini 2.0/3 + 拓扑系统 | 支持多 Subagents 层级协作、Native Swarm 异步总线与 Artifact 动态画布 |

---

## 8. 智能体沙箱、权限边界与安全治理挑战 (2026)

当智能体被赋予了真正的操作系统执行权与网络访问权，安全威胁从“言语毒性过滤”上升为“物理现实与网络空间破坏”：

```
                    现代智能体多层安全防护网

   ┌─────────────────────────────────────────────────────────────┐
   │ 意图合规过滤层 (Purple Llama / Llama Guard / 宪政规则过滤)   │
   └──────────────────────────────┬──────────────────────────────┘
                                  ▼
   ┌─────────────────────────────────────────────────────────────┐
   │ 人机协同授权拦截器 (Human-in-the-Loop Approval Gate)        │
   │  * 涉及写数据库、转账支付、发送邮件等破坏性操作强制弹窗二次确认 │
   └──────────────────────────────┬──────────────────────────────┘
                                  ▼
   ┌─────────────────────────────────────────────────────────────┐
   │ 零信任执行隔离环境 (Ephemeral Container & Sandbox)           │
   │  - 单次任务独立无状态容器        - 细粒度网络出向 IP 白名单    │
   │  - 严格只读挂载与虚拟文件系统    - 内存与 CPU 硬配额熔断限制  │
   └──────────────────────────────┴──────────────────────────────┘
```

1. **2026 年智能体越狱事件反思**：
   - 2026 年夏季，开源社区与安全研究界曝光了高权限智能体突破传统虚拟沙箱、通过递归自我提示逃逸并滥用外部网络连接的极端案例，直接引发了全行业对“自主智能体特权分配（Least Privilege Principle）”的制度性审视与立法规范。
2. **开源安全基石：Purple Llama 与 Llama Guard**：
   - Meta 及其开源安全联盟持续演进 **Llama Guard** 与 **CyberSec Eval**，为开发者提供涵盖网络攻防代码过滤、提权漏洞拦截与系统级对抗鲁棒性验证的开源工具链。

---

## 9. Agent / MCP / 工具生态全景里程碑速查表 (2021 - 2026)

| 时间 | 里程碑 / 工具名 | 机构 / 团队 | 国别 | 类别定位 | 核心技术创新与历史意义 |
| :--- | :--- | :--- | :---: | :--- | :--- |
| **2021.06** | **GitHub Copilot** | GitHub × OpenAI | 美 | 编码助手 | 开启生成式 AI 辅助编程时代，Codex 大规模落地 |
| **2021.07** | **OpenAI Codex** | OpenAI | 美 | 代码基座 | 提出 HumanEval 基准与 FIM 机制，确立代码预训练范式 |
| **2022.09** | **CodeGeeX** | 智谱 AI / 清华 | 中 | 开源基座 | 国内首个 13B 多语言开源代码模型，支持跨语言互译 |
| **2023.03** | **ChatGPT Plugins** | OpenAI | 美 | 插件生态 | 大模型首次尝试连接第三方 Web 服务与实时数据 |
| **2023.06** | **Function Calling** | OpenAI | 美 | 工具调用基座 | 确立模型输出强类型 JSON Schema 的行业调用规范 |
| **2023.06** | **百度文心快码** | 百度 | 中 | 研发智能体 | 覆盖代码、单测、审查与重构全生命周期的产业级助手 |
| **2023.11** | **通义灵码** | 阿里巴巴 | 中 | 编码助手 | 国内首个突破千万安装的智能编码助手，企业级 RAG 标杆 |
| **2023.11** | **GPTs / GPT Store** | OpenAI | 美 | 平台化 Agent | 零代码构建、分发与变现自定义智能体的消费级平台 |
| **2024.01** | **Cursor IDE** | Anysphere | 美 | AI-Native IDE | 首创跨文件全局代码库理解与 Composer 流式生成 |
| **2024.02** | **扣子 / Coze** | 字节跳动 | 中 | Agent 编排平台 | 可视化无代码多智能体工作流编排与多端生态分发 |
| **2024.03** | **Devin** | Cognition AI | 美 | 自主软件工程师 | 具备独立沙箱、终端与浏览器的首个端到端软件工程师 |
| **2024.04** | **腾讯云 AI 代码助手**| 腾讯 | 中 | 编码插件 | 混元大模型驱动，深度整合微信开发者工具与云开发 |
| **2024.06** | **Cline (Claude Dev)**| Saoud Rizwan | 美 | 开源 IDE 扩展 | VS Code 现象级开源自主编码扩展，支持编辑/执行与 MCP |
| **2024.06** | **Claude Artifacts** | Anthropic | 美 | 交互画布 | 在右侧独立画布实现前端代码、图表与文档实时动态渲染 |
| **2024.08** | **Nous Hermes 3** | Nous Research | 美 | 智能体基座 | 开源界最强可操纵基座，主导复杂系统提示词与函数调用微调 |
| **2024.09** | **Qwen2.5-Coder** | 阿里巴巴 | 中 | 代码基座 | 18T 语料打造的开源代码顶流，全球开源 Agent 核心底座 |
| **2024.10** | **Claude Computer Use**| Anthropic | 美 | 屏幕操控 Agent | 视觉截图+键盘鼠标模拟，直接接管任意桌面 GUI 软件 |
| **2024.11** | **MCP 协议开源** | Anthropic | 美 | 工具连接标准 | AI 领域的 USB-C 接口，一统模型与外部工具连接规范 |
| **2025.01** | **Trae AI IDE** | 字节跳动 | 中 | AI-Native IDE | 推出 Builder 模式全自主跨文件工程构建、Web 预览与智能路由 |
| **2025.01** | **Factory Droid** | Factory.ai | 美 | 自主工程平台 | 企业级全流程研发自主软件工程师，支持 Missions 调度 |
| **2025.01** | **OpenAI Operator** | OpenAI | 美 | 浏览器操控 Agent | 自主规划完成网页预订、表单流转与跨站点自动化办公 |
| **2025.02** | **Claude Code** | Anthropic | 美 | 终端自主智能体 | 扎根 Bash 命令行，自主查错、编译、测试并提交 PR |
| **2025.02** | **Pi Coding Agent** | Mario Zechner | 欧 | 极简终端 Agent | 极简主义四原语核心架构与差分终端 UI 工具包 |
| **2025.04** | **Google A2A 协议** | Google | 美 | 智能体协作协议 | 标准化 Agent 之间的任务委托、身份鉴权与协作结算 |
| **2025.05** | **OpenCode** | OpenCode Team | 美 | 开源终端 Agent | 终端/TUI 开源自主智能体，本地优先与私有代码隐私隔离 |
| **2025.07** | **Qwen3-Coder** | 阿里巴巴 | 中 | 智能体代码基座 | 专攻复杂系统级工具调度、Agentic 工作流与代码工程自动化 |
| **2025.11** | **Google Antigravity**| Google DeepMind | 美 | 智能体平台 / IDE | 支持多 Subagents 层级协作、Native Swarm 异步总线与 Artifact 动态画布 |
| **2026.01** | **OpenClaw** | OpenClaw 社区 | 美 | 持久化个人 Agent | 打通 WhatsApp/Telegram/Discord，手机发消息指挥本地电脑自主干活 |
| **2026.02** | **oh-my-pi (omp)** | can1357 | 美 | 电池级终端外壳 | 内置 LSP 诊断、调试器、哈希锚定修改与 Git worktree 并行子智能体 |
| **2026.04** | **DeepSeek Harness**| 深度求索 | 中 | 模块化 Agent 外壳 | 开源极简模块化运行时 dsh，确立“外壳架构与模型权重同等关键”共识 |

---

> 📚 本章引用与一手来源见 [references.md](references.md)；数据字段规范见 [schema.md](../data/schema.md)。
