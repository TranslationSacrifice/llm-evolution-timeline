window.TIMELINE_DATA = [
  {
    "id": "transformer-2017",
    "date": "2017-06",
    "name": "Transformer (Attention Is All You Need)",
    "company": "Google Brain / Research",
    "country": "US",
    "license": "Open Source",
    "category": "Foundation",
    "parameters": "65M",
    "contextWindow": "512",
    "highlight": "彻底抛弃 RNN 与 CNN，提出纯自注意力机制 (Self-Attention) 架构，奠定现代大语言模型底层共同基石。",
    "keyTech": [
      "Self-Attention",
      "Scaled Dot-Product",
      "Encoder-Decoder",
      "Positional Encoding"
    ],
    "docLink": "docs/01-genesis-and-transformer.md",
    "era": "范式奠基 2017–2019"
  },
  {
    "id": "gpt1-2018",
    "date": "2018-06",
    "name": "GPT-1 (Generative Pre-Training)",
    "company": "OpenAI",
    "country": "US",
    "license": "Open Source",
    "category": "Foundation",
    "parameters": "117M",
    "contextWindow": "512",
    "highlight": "开创生成式自回归语言建模路线，确立“无监督预训练 + 有监督微调”范式，坚守 Decoder-Only 架构。",
    "keyTech": [
      "Decoder-Only",
      "Causal LM",
      "Pre-train + Fine-tune"
    ],
    "docLink": "docs/01-genesis-and-transformer.md",
    "era": "范式奠基 2017–2019"
  },
  {
    "id": "bert-2018",
    "date": "2018-10",
    "name": "BERT (Bidirectional Encoder Representations)",
    "company": "Google AI",
    "country": "US",
    "license": "Open Source",
    "category": "Foundation",
    "parameters": "110M / 340M",
    "contextWindow": "512",
    "highlight": "提出双向掩码语言模型 (MLM) 与下句预测 (NSP)，刷新 11 项 NLP 任务纪录，引发判别式预训练狂潮。",
    "keyTech": [
      "Encoder-Only",
      "Masked LM",
      "Bidirectional Context"
    ],
    "docLink": "docs/01-genesis-and-transformer.md",
    "era": "范式奠基 2017–2019"
  },
  {
    "id": "gpt2-2019",
    "date": "2019-02",
    "name": "GPT-2",
    "company": "OpenAI",
    "country": "US",
    "license": "Open Source (Staged)",
    "category": "Dense LLM",
    "parameters": "1.5B",
    "contextWindow": "1024",
    "highlight": "提出“语言模型是无监督多任务学习者”，展示强大 Zero-Shot 潜力与 Pre-LN 结构，首次引发生成滥用安全争议。",
    "keyTech": [
      "Zero-Shot Learning",
      "Pre-LN",
      "WebText Dataset"
    ],
    "docLink": "docs/01-genesis-and-transformer.md",
    "era": "范式奠基 2017–2019"
  },
  {
    "id": "t5-2019",
    "date": "2019-10",
    "name": "T5 (Text-to-Text Transfer Transformer)",
    "company": "Google Research",
    "country": "US",
    "license": "Open Source",
    "category": "Foundation",
    "parameters": "60M - 11B",
    "contextWindow": "512",
    "highlight": "将翻译、分类、问答等所有 NLP 任务统一重构为 Text-to-Text 框架，发布超大规模 C4 清洗数据集。",
    "keyTech": [
      "Text-to-Text Framework",
      "C4 Dataset",
      "Span Corruption"
    ],
    "docLink": "docs/01-genesis-and-transformer.md",
    "era": "范式奠基 2017–2019"
  },
  {
    "id": "scaling-laws-2020",
    "date": "2020-01",
    "name": "OpenAI Scaling Laws",
    "company": "OpenAI",
    "country": "US",
    "license": "Paper",
    "category": "Foundation",
    "parameters": "N/A",
    "contextWindow": "N/A",
    "highlight": "揭示模型损失与参数量、数据量、算力之间的精确幂律规律，为千亿级大模型投资提供第一性原理指南。",
    "keyTech": [
      "Power Law",
      "Compute Optimal",
      "Pre-training Dynamics"
    ],
    "docLink": "docs/02-scaling-laws-and-gpt3.md",
    "era": "尺度定律与对齐 2020–2022"
  },
  {
    "id": "gpt3-2020",
    "date": "2020-05",
    "name": "GPT-3",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Dense LLM",
    "parameters": "175B",
    "contextWindow": "2048",
    "highlight": "1750 亿参数里程碑，展现惊人的上下文学习 (In-Context Learning) 与少样本提示能力，开启闭源商业 API 时代。",
    "keyTech": [
      "In-Context Learning",
      "Few-Shot Prompting",
      "Emergent Abilities"
    ],
    "docLink": "docs/02-scaling-laws-and-gpt3.md",
    "era": "尺度定律与对齐 2020–2022"
  },
  {
    "id": "cpm-2020",
    "date": "2020-12",
    "name": "CPM-1 (Chinese Pre-trained Model)",
    "company": "清华大学 / 北京智源 (BAAI)",
    "country": "CN",
    "license": "Open Source",
    "category": "Dense LLM",
    "parameters": "2.6B",
    "contextWindow": "1024",
    "highlight": "中国首个开源的大规模中文自回归语言模型，打破早期大模型英文语料垄断局面。",
    "keyTech": [
      "Chinese Native Pre-training",
      "Decoder-Only"
    ],
    "docLink": "docs/02-scaling-laws-and-gpt3.md",
    "era": "尺度定律与对齐 2020–2022"
  },
  {
    "id": "pangu-alpha-2021",
    "date": "2021-04",
    "name": "盘古大模型 (PanGu-α)",
    "company": "华为 / 鹏城实验室",
    "country": "CN",
    "license": "Open Source (Research)",
    "category": "Dense LLM",
    "parameters": "200B",
    "contextWindow": "1024",
    "highlight": "首个基于全栈国产昇腾 910 芯片与 MindSpore 框架训练完成的 2000 亿中文超大规模语言模型。",
    "keyTech": [
      "Ascend 910 Cluster",
      "MindSpore 3D Parallel",
      "200B Scale"
    ],
    "docLink": "docs/02-scaling-laws-and-gpt3.md",
    "era": "尺度定律与对齐 2020–2022"
  },
  {
    "id": "wudao-2021",
    "date": "2021-06",
    "name": "悟道 2.0 (WuDao 2.0)",
    "company": "北京智源 (BAAI) / 清华大学",
    "country": "CN",
    "license": "Academic",
    "category": "MoE",
    "parameters": "1.75T",
    "contextWindow": "1024",
    "highlight": "全球首批万亿参数混合专家 (MoE) 模型探索之一，开发 FastMoE 框架探索极低显存并行技术。",
    "keyTech": [
      "FastMoE",
      "Trillion Parameter MoE"
    ],
    "docLink": "docs/02-scaling-laws-and-gpt3.md",
    "era": "尺度定律与对齐 2020–2022"
  },
  {
    "id": "ernie-3-2021",
    "date": "2021-08",
    "name": "ERNIE 3.0 (文心大模型)",
    "company": "百度 (Baidu)",
    "country": "CN",
    "license": "Proprietary / PaddlePaddle",
    "category": "Dense LLM",
    "parameters": "10B - 280B",
    "contextWindow": "2048",
    "highlight": "融合海量无监督文本与大规模知识图谱的知识增强预训练模型，深度融入百度飞桨软硬件生态。",
    "keyTech": [
      "Knowledge Integration",
      "PaddlePaddle Ecosystem"
    ],
    "docLink": "docs/02-scaling-laws-and-gpt3.md",
    "era": "尺度定律与对齐 2020–2022"
  },
  {
    "id": "chinchilla-2022",
    "date": "2022-03",
    "name": "Chinchilla",
    "company": "DeepMind",
    "country": "US",
    "license": "Proprietary",
    "category": "Foundation",
    "parameters": "70B",
    "contextWindow": "2048",
    "highlight": "修正 Kaplan 尺度定律，证明参数被高估而语料被低估，奠定现代“小参数大语料 (Compute-Optimal)”训练理念。",
    "keyTech": [
      "Compute-Optimal Scaling",
      "4x Data Over-training"
    ],
    "docLink": "docs/02-scaling-laws-and-gpt3.md",
    "era": "尺度定律与对齐 2020–2022"
  },
  {
    "id": "instructgpt-2022",
    "date": "2022-03",
    "name": "InstructGPT",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Alignment",
    "parameters": "1.3B - 175B",
    "contextWindow": "4096",
    "highlight": "完整确立 SFT + RM + PPO 强化学习人类对齐 (RLHF) 三阶段流程，1.3B 对齐小模型人类喜好度战胜 175B 基座。",
    "keyTech": [
      "RLHF",
      "PPO",
      "Reward Modeling",
      "3H Alignment"
    ],
    "docLink": "docs/03-chatgpt-and-alignment.md",
    "era": "尺度定律与对齐 2020–2022"
  },
  {
    "id": "glm-130b-2022",
    "date": "2022-10",
    "name": "GLM-130B",
    "company": "智谱 AI / 清华大学",
    "country": "CN",
    "license": "Open Source",
    "category": "Dense LLM",
    "parameters": "130B",
    "contextWindow": "2048",
    "highlight": "提出通用语言模型双向掩码自回归混合架构，千亿开源基座在多项基准测试上匹敌 GPT-3。",
    "keyTech": [
      "GLM Architecture",
      "Bidirectional Mask + Autoregressive",
      "INT4 Quantization"
    ],
    "docLink": "docs/03-chatgpt-and-alignment.md",
    "era": "尺度定律与对齐 2020–2022"
  },
  {
    "id": "chatgpt-2022",
    "date": "2022-11",
    "name": "ChatGPT (GPT-3.5)",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed Service",
    "category": "Dense LLM",
    "parameters": "175B 规模演进",
    "contextWindow": "4096",
    "highlight": "AI 历史转折点，极简会话界面实现多轮连续对话与意图理解，创下 2 个月破亿活跃用户的全球最快互联网增长神话。",
    "keyTech": [
      "Conversational RLHF",
      "Codex Fine-tuning",
      "Instruction Following"
    ],
    "docLink": "docs/03-chatgpt-and-alignment.md",
    "era": "尺度定律与对齐 2020–2022"
  },
  {
    "id": "constitutional-ai-2022",
    "date": "2022-12",
    "name": "Constitutional AI / Claude 雏形",
    "company": "Anthropic",
    "country": "US",
    "license": "Paper / Closed",
    "category": "Alignment",
    "parameters": "52B",
    "contextWindow": "8192",
    "highlight": "提出 RLAIF（以 AI 反馈强化学习）与原则宪法自省纠错机制，为后续 Claude 系列的极高安全标准奠基。",
    "keyTech": [
      "Constitutional AI",
      "RLAIF",
      "Self-Critique"
    ],
    "docLink": "docs/03-chatgpt-and-alignment.md",
    "era": "尺度定律与对齐 2020–2022"
  },
  {
    "id": "google-bard-2023",
    "date": "2023-02",
    "name": "Google Bard (Gemini 前身)",
    "company": "谷歌 (Google)",
    "country": "US",
    "license": "Proprietary / Closed Service",
    "category": "Dense LLM",
    "parameters": "LaMDA / PaLM 2 驱动",
    "contextWindow": "4096 / 8192",
    "highlight": "谷歌拉响“红色警戒”后的防御性对话产品，首秀韦伯望远镜事实性幻觉引发震荡，后促成 Brain 与 DeepMind 大合并与 Gemini 诞生。",
    "keyTech": [
      "LaMDA",
      "PaLM 2",
      "Search Grounding",
      "Conversational Defense"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "llama1-2023",
    "date": "2023-02",
    "name": "LLaMA 1",
    "company": "Meta AI",
    "country": "US",
    "license": "Research Only (Leaked)",
    "category": "Dense LLM",
    "parameters": "7B / 13B / 33B / 65B",
    "contextWindow": "2048",
    "highlight": "严格践行 Chinchilla 定律训练于 1.4T Token，其开源火种点燃了 Stanford Alpaca、Vicuna、llama.cpp 与 LoRA 全球生态。",
    "keyTech": [
      "Open Weights",
      "Rotary Embedding (RoPE)",
      "SwiGLU",
      "RMSNorm"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "new-bing-2023",
    "date": "2023-02",
    "name": "New Bing (Prometheus 架构)",
    "company": "微软 (Microsoft)",
    "country": "US",
    "license": "Proprietary / Closed Service",
    "category": "Dense LLM",
    "parameters": "GPT-4 早期基座 + 检索增强",
    "contextWindow": "4096 / 8192",
    "highlight": "微软打响大模型搜索与入口遭遇战，提出 Prometheus 编排架构连接实时网络索引，确立商业化 Web-grounded RAG 标杆。",
    "keyTech": [
      "Prometheus Orchestrator",
      "Web-grounded RAG",
      "Sydney Alter-Ego",
      "Copilot Ecosystem"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "chatglm-6b-2023",
    "date": "2023-03",
    "name": "ChatGLM-6B",
    "company": "智谱 AI / 清华大学",
    "country": "CN",
    "license": "Open Weights / Commercial",
    "category": "Efficiency/Edge",
    "parameters": "6.2B",
    "contextWindow": "2048",
    "highlight": "中国大模型普及启蒙者，支持在单张 6GB 显存消费级笔记本 GPU 上 INT4 本地流畅运行，极客圈掀起部署热潮。",
    "keyTech": [
      "PrefixLM",
      "INT4 / INT8 Quantization",
      "Bilingual Optimization"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "gpt4-2023",
    "date": "2023-03",
    "name": "GPT-4",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "MoE",
    "parameters": "约 1.8T (16x110B MoE)",
    "contextWindow": "8K / 32K / 128K",
    "highlight": "大模型综合推理天花板，首次工业落地 16 专家超大规模 MoE 架构，在律师考试等人类专业资格测试中居前 10%。",
    "keyTech": [
      "Sparse MoE (Top-2)",
      "Multimodal Input",
      "Human-level Reasoning"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "ernie-bot-2023",
    "date": "2023-03",
    "name": "文心一言 (ERNIE Bot 3.5)",
    "company": "百度 (Baidu)",
    "country": "CN",
    "license": "Proprietary / Closed Service",
    "category": "Dense LLM",
    "parameters": "千亿级",
    "contextWindow": "4096",
    "highlight": "中国首个正式对外发布的商业化通用对话大模型产品，拉开中国“百模大战”大幕。",
    "keyTech": [
      "Knowledge Augmentation",
      "Full-Stack PaddlePaddle Optimization"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "phi-series-2023",
    "date": "2023-06",
    "name": "Microsoft Phi-1 / Phi-2",
    "company": "微软研究院 (Microsoft Research)",
    "country": "US",
    "license": "Open Weights (MIT)",
    "category": "Efficiency/Edge",
    "parameters": "1.3B / 2.7B",
    "contextWindow": "2048",
    "highlight": "提出“Textbooks Are All You Need”假说，证明高质量教材级合成数据能让 1.3B/2.7B 小模型在代码与数学上跨级超越数十倍体量的基座。",
    "keyTech": [
      "Synthetic Data",
      "Textbook Quality",
      "Small Language Models (SLM)"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "llama2-2023",
    "date": "2023-07",
    "name": "LLaMA 2",
    "company": "Meta AI",
    "country": "US",
    "license": "Open Weights (Commercial OK)",
    "category": "Dense LLM",
    "parameters": "7B / 13B / 70B",
    "contextWindow": "4096",
    "highlight": "正式开放免费商用，训练语料提升至 2T Token，在 70B 模型全面引入 Grouped-Query Attention (GQA)。",
    "keyTech": [
      "Grouped-Query Attention (GQA)",
      "Dual Reward Models (Safety/Helpfulness)"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "qwen-7b-2023",
    "date": "2023-08",
    "name": "通义千问 Qwen-7B / 14B / 72B",
    "company": "阿里巴巴 (Alibaba)",
    "country": "CN",
    "license": "Open Weights / Commercial",
    "category": "Dense LLM",
    "parameters": "7B / 14B / 72B",
    "contextWindow": "8K / 32K",
    "highlight": "阿里启动大规模全尺寸开源战略，高质量中英文语料预训练，在多项公开测试榜单上夺得开源榜首。",
    "keyTech": [
      "Comprehensive Open-source Strategy",
      "High-Quality Multi-lingual Data"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "mistral-7b-2023",
    "date": "2023-09",
    "name": "Mistral 7B",
    "company": "Mistral AI",
    "country": "EU",
    "license": "Apache 2.0",
    "category": "Efficiency/Edge",
    "parameters": "7.3B",
    "contextWindow": "8192",
    "highlight": "欧洲新星惊艳亮相，采用滑动窗口注意力 (SWA) 与 GQA，以 7B 尺寸击败 LLaMA 2 13B 全系。",
    "keyTech": [
      "Sliding Window Attention (SWA)",
      "Grouped-Query Attention (GQA)"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "kimi-2023",
    "date": "2023-10",
    "name": "Kimi Chat (20万字上下文)",
    "company": "月之暗面 (Moonshot AI)",
    "country": "CN",
    "license": "Proprietary / Closed Service",
    "category": "Dense LLM",
    "parameters": "未公开",
    "contextWindow": "200,000 汉字",
    "highlight": "全球首推 20 万字无损上下文长文本商业产品，攻克长程注意力遗忘瓶颈，引爆国内长文本生产力潮流。",
    "keyTech": [
      "Ultra-Long Context",
      "Attention Optimization",
      "Document Understanding"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "yi-34b-2023",
    "date": "2023-11",
    "name": "Yi-34B",
    "company": "零一万物 (01.AI)",
    "country": "CN",
    "license": "Open Weights / Commercial",
    "category": "Dense LLM",
    "parameters": "34B",
    "contextWindow": "200K",
    "highlight": "李开复团队创立，极高纯净度语料预训练，开源后迅速在 Hugging Face Open LLM 全球排行榜登顶第一。",
    "keyTech": [
      "Ultra-Clean Pre-training Data",
      "200k Native Long Context"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "mixtral-8x7b-2023",
    "date": "2023-12",
    "name": "Mixtral 8x7B",
    "company": "Mistral AI",
    "country": "EU",
    "license": "Apache 2.0",
    "category": "MoE",
    "parameters": "46.7B (激活 12.9B)",
    "contextWindow": "32K",
    "highlight": "开源界首个高性能稀疏 MoE，单 token 激活 13B 推理成本，在各项推理基准上抗衡 LLaMA 2 70B。",
    "keyTech": [
      "Sparse MoE",
      "Router Top-2",
      "Low Latency High Throughput"
    ],
    "docLink": "docs/04-cambrian-explosion-2023.md",
    "era": "寒武纪爆发 2023"
  },
  {
    "id": "gemini-1-5-pro-2024",
    "date": "2024-02",
    "name": "Gemini 1.5 Pro",
    "company": "Google DeepMind",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Multimodal",
    "parameters": "未公开 MoE",
    "contextWindow": "1,000,000 - 2,000,000",
    "highlight": "确立百万人格上下文新标杆，大海捞针测试实现 99.7% 完美检索，原生吞吐数小时视频与整套工程仓库。",
    "keyTech": [
      "1M-2M Context Window",
      "Needle In A Haystack 99.7%+",
      "Native Multimodal MoE"
    ],
    "docLink": "docs/05-moe-long-context-efficiency.md",
    "era": "多模态与效率 2024"
  },
  {
    "id": "claude-3-opus-2024",
    "date": "2024-03",
    "name": "Claude 3 Opus",
    "company": "Anthropic",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Dense LLM",
    "parameters": "未公开",
    "contextWindow": "200K",
    "highlight": "综合评测首次全面击败 GPT-4，在复杂分析、研究生级推理与长文本审阅上树立新一代高端标杆。",
    "keyTech": [
      "Constitutional AI",
      "Near-Zero Hallucination",
      "200k Context"
    ],
    "docLink": "docs/05-moe-long-context-efficiency.md",
    "era": "多模态与效率 2024"
  },
  {
    "id": "llama3-2024",
    "date": "2024-04",
    "name": "LLaMA 3 (8B / 70B)",
    "company": "Meta AI",
    "country": "US",
    "license": "Open Weights (Commercial)",
    "category": "Dense LLM",
    "parameters": "8B / 70B",
    "contextWindow": "8K",
    "highlight": "在 15T Token 上重磅预训练，词表扩充至 128k，8B 版本即可越级匹敌前代 70B 模型。",
    "keyTech": [
      "15T Tokens",
      "128k Tokenizer",
      "DPO Alignment"
    ],
    "docLink": "docs/05-moe-long-context-efficiency.md",
    "era": "多模态与效率 2024"
  },
  {
    "id": "deepseek-v2-2024",
    "date": "2024-05",
    "name": "DeepSeek-V2",
    "company": "DeepSeek (深度求索)",
    "country": "CN",
    "license": "Open Weights / Commercial",
    "category": "MoE",
    "parameters": "236B (激活 21B)",
    "contextWindow": "128K",
    "highlight": "提出多头潜在注意力 (MLA) 压缩显存 93.3% 与细粒度 DeepSeekMoE，API 价格仅为 GPT-4 百分之一，颠覆全球推理经济学。",
    "keyTech": [
      "Multi-head Latent Attention (MLA)",
      "DeepSeekMoE (Shared + Routed)",
      "Extreme Cost Reduction"
    ],
    "docLink": "docs/05-moe-long-context-efficiency.md",
    "era": "多模态与效率 2024"
  },
  {
    "id": "gpt4o-2024",
    "date": "2024-05",
    "name": "GPT-4o (Omni)",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Multimodal",
    "parameters": "未公开",
    "contextWindow": "128K",
    "highlight": "端到端原生统一多模态神经网络，232ms 极低响应延迟，具备情感起伏的实时语音、视觉全双工对话。",
    "keyTech": [
      "Native End-to-End Multimodal",
      "Real-time Voice/Vision",
      "Barge-in Interaction"
    ],
    "docLink": "docs/05-moe-long-context-efficiency.md",
    "era": "多模态与效率 2024"
  },
  {
    "id": "claude-35-sonnet-2024",
    "date": "2024-06",
    "name": "Claude 3.5 Sonnet",
    "company": "Anthropic",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Dense LLM",
    "parameters": "未公开",
    "contextWindow": "200K",
    "highlight": "登顶全球编程与多模态图表推理第一，首创 Artifacts 交互画布与后续 Computer Use 桌面操控。",
    "keyTech": [
      "State-of-the-art Coding",
      "Artifacts UI Canvas",
      "Computer Use API"
    ],
    "docLink": "docs/05-moe-long-context-efficiency.md",
    "era": "多模态与效率 2024"
  },
  {
    "id": "llama31-405b-2024",
    "date": "2024-07",
    "name": "LLaMA 3.1 405B",
    "company": "Meta AI",
    "country": "US",
    "license": "Open Weights (Commercial)",
    "category": "Dense LLM",
    "parameters": "405B",
    "contextWindow": "128K",
    "highlight": "开源史上首个在 1.6 万张 H100 集群上完成训练的 400B+ 旗舰模型，各项能力比肩顶级商业闭源模型。",
    "keyTech": [
      "16k H100 Cluster",
      "Synthetic Data Distillation",
      "128k Long Context"
    ],
    "docLink": "docs/05-moe-long-context-efficiency.md",
    "era": "多模态与效率 2024"
  },
  {
    "id": "openai-o1-2024",
    "date": "2024-09",
    "name": "OpenAI o1 (Strawberry)",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "128K / 200K",
    "highlight": "确立推理期计算扩展定律 (Test-Time Compute Scaling)，隐式思维链大规模强化学习，在数学与编程竞赛登顶博士级水准。",
    "keyTech": [
      "Test-Time Compute Scaling",
      "Hidden Chain-of-Thought",
      "RL on Verifiable Domains"
    ],
    "docLink": "docs/06-reasoning-and-o1-r1-era.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "qwen25-2024",
    "date": "2024-09",
    "name": "Qwen 2.5 系列 (全尺寸矩阵)",
    "company": "阿里巴巴 (Alibaba)",
    "country": "CN",
    "license": "Open Weights / Commercial",
    "category": "Dense LLM",
    "parameters": "0.5B - 72B",
    "contextWindow": "128K",
    "highlight": "18T 语料重塑，在编程 (Qwen2.5-Coder) 与数学 (Qwen2.5-Math) 领域构筑全球开源最强生态矩阵。",
    "keyTech": [
      "18T Tokens",
      "Full-Parameter Matrix (0.5B-72B)",
      "Coder/Math Specialized"
    ],
    "docLink": "docs/05-moe-long-context-efficiency.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "deepseek-v3-2024",
    "date": "2024-12",
    "name": "DeepSeek-V3",
    "company": "DeepSeek (深度求索)",
    "country": "CN",
    "license": "Open Weights / Commercial",
    "category": "MoE",
    "parameters": "671B (激活 37B)",
    "contextWindow": "128K",
    "highlight": "仅耗费 557 万美元训练的 671B 顶级开源 MoE，提出 FP8 混合精度训练、DualPipe 零通信气泡与 MTP 多 Token 预测。",
    "keyTech": [
      "FP8 Mixed-Precision Training",
      "DualPipe Overlap",
      "Multi-Token Prediction (MTP)",
      "MLA"
    ],
    "docLink": "docs/06-reasoning-and-o1-r1-era.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "gemini-2-flash-2024",
    "date": "2024-12",
    "name": "Gemini 2.0 Flash / Thinking",
    "company": "Google DeepMind",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "1M+",
    "highlight": "兼顾原生音视频流式交互与慢思考推理，多模态实时反应与工具调用协同跃进。",
    "keyTech": [
      "Multimodal Streaming",
      "Native Thinking Mode",
      "Agentic Execution"
    ],
    "docLink": "docs/06-reasoning-and-o1-r1-era.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "deepseek-r1-2025",
    "date": "2025-01",
    "name": "DeepSeek-R1 & R1-Zero",
    "company": "DeepSeek (深度求索)",
    "country": "CN",
    "license": "Open Weights / Commercial (MIT)",
    "category": "Reasoning",
    "parameters": "671B MoE + 6款蒸馏小模型",
    "contextWindow": "128K",
    "highlight": "纯 RL 探索证实模型自主涌现反思与纠错能力，671B 与蒸馏小模型全面无保留开源，引发全球算力认知重构与技术平权海啸。",
    "keyTech": [
      "Pure RL (Zero SFT Cold Start)",
      "GRPO Algorithm",
      "Aha Moments Emergence",
      "Open Distillation Suite"
    ],
    "docLink": "docs/06-reasoning-and-o1-r1-era.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "kimi-k15-2025",
    "date": "2025-01",
    "name": "Kimi k1.5",
    "company": "月之暗面 (Moonshot AI)",
    "country": "CN",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "长文本多模态",
    "highlight": "结合超长上下文与多模态慢思考推理，强化学习驱动的多步复杂视觉规划与严谨证明。",
    "keyTech": [
      "Multimodal Long-CoT",
      "Reinforcement Learning Planning",
      "Math & Vision Grounding"
    ],
    "docLink": "docs/06-reasoning-and-o1-r1-era.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "stargate-2025",
    "date": "2025-01",
    "name": "Stargate Project (星际之门)",
    "company": "OpenAI / SoftBank / Oracle / MGX",
    "country": "US",
    "license": "Private Infrastructure",
    "category": "Infrastructure",
    "parameters": "$500B 计划",
    "contextWindow": "N/A",
    "highlight": "史上最大 AI 基础设施计划：四年 5000 亿美元、10GW 数据中心，把“算力即国力”推到国家战略层级，也重塑 OpenAI 与微软的绑定关系。",
    "keyTech": [
      "$500B",
      "10GW",
      "SoftBank",
      "Oracle",
      "AI Infrastructure"
    ],
    "source": "https://en.wikipedia.org/wiki/Stargate_LLC",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "gpt45-2025",
    "date": "2025-02",
    "name": "GPT-4.5 (Orion)",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Dense LLM",
    "parameters": "未公开",
    "contextWindow": "128K",
    "highlight": "OpenAI 最后一个非思维链巨型基座：以无监督预训练 + RLHF 追求世界知识与情商，但 $75/百万输入 token 的高价与推理模型崛起让它迅速退场。",
    "keyTech": [
      "Unsupervised Pre-training",
      "RLHF",
      "World Knowledge",
      "Legacy Model"
    ],
    "source": "https://en.wikipedia.org/wiki/GPT-4.5",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "gemini-robotics-2025",
    "date": "2025-03",
    "name": "Gemini Robotics / ER",
    "company": "Google DeepMind",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "World Model",
    "parameters": "基于 Gemini 2.0",
    "contextWindow": "多模态",
    "highlight": "首个把 Gemini 多模态理解直接接入机器人行动的 VLA 模型，配套 ER 具身推理版本，让大模型从屏幕走向物理世界。",
    "keyTech": [
      "Vision-Language-Action",
      "Embodied Reasoning",
      "Low-level Control"
    ],
    "source": "https://en.wikipedia.org/wiki/Gemini_Robotics",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "llama4-2025",
    "date": "2025-04",
    "name": "Llama 4 (Scout / Maverick)",
    "company": "Meta AI",
    "country": "US",
    "license": "Open Weights (Llama 4 License)",
    "category": "MoE",
    "parameters": "109B / 400B（激活 17B）",
    "contextWindow": "10M / 1M",
    "highlight": "Meta 首个原生多模态 MoE 开源家族，Scout 以 1000 万 token 上下文刷新开源长文本纪录，但口碑与训练争议标志 Llama 开源霸权的拐点。",
    "keyTech": [
      "Native Multimodal",
      "Early Fusion",
      "10M Context",
      "MoE"
    ],
    "source": "https://en.wikipedia.org/wiki/Llama_4",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "o3-2025",
    "date": "2025-04",
    "name": "OpenAI o3 / o4-mini",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "200K",
    "highlight": "推理期算力的工业化落地：o3 在 GPQA 达 87.7%、SWE-bench 71.7%、Codeforces 2727 Elo，首次把“思考 + 工具调用”变成通用 API 能力。",
    "keyTech": [
      "Private Chain-of-Thought",
      "Tool-augmented Reasoning",
      "RL Scaling"
    ],
    "source": "https://en.wikipedia.org/wiki/OpenAI_o3",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "qwen3-2025",
    "date": "2025-04",
    "name": "Qwen3 (235B-A22B)",
    "company": "阿里巴巴 (Alibaba)",
    "country": "CN",
    "license": "Open Weights (Apache 2.0)",
    "category": "MoE",
    "parameters": "235B（激活 22B）",
    "contextWindow": "128K",
    "highlight": "Apache 2.0 全家族开源，首创单模型“思考/非思考”双模式切换，36T token、119 种语言训练，成为全球衍生模型最多的开源基座之一。",
    "keyTech": [
      "Thinking Mode Switch",
      "36T Tokens",
      "119 Languages",
      "Apache 2.0"
    ],
    "source": "https://en.wikipedia.org/wiki/Qwen",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "gpt41-2025",
    "date": "2025-04",
    "name": "GPT-4.1",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Dense LLM",
    "parameters": "未公开",
    "contextWindow": "1,000,000",
    "highlight": "OpenAI 针对长程软件工程与大代码仓库推出的百万 Token 编码专精版，为 GPT-4 时代的工业级落地画上圆满句号。",
    "keyTech": [
      "1M Context",
      "Coding Specialization",
      "Repository Refactoring"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "前沿演进 2025"
  },
  {
    "id": "claude4-2025",
    "date": "2025-05",
    "name": "Claude 4 (Opus / Sonnet)",
    "company": "Anthropic",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "200K",
    "highlight": "首个被 Anthropic 评为 ASL-3 的前沿模型，主打长程自主编码与工具使用，Claude Code 同步 GA，开启“终端里的智能体”范式。",
    "keyTech": [
      "Agentic Coding",
      "Extended Thinking",
      "MCP Connectors",
      "ASL-3"
    ],
    "source": "https://en.wikipedia.org/wiki/Claude_(AI)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "glm45-2025",
    "date": "2025-07",
    "name": "GLM-4.5",
    "company": "智谱 AI (Z.ai)",
    "country": "CN",
    "license": "Open Weights (MIT)",
    "category": "MoE",
    "parameters": "355B（激活 32B）",
    "contextWindow": "128K",
    "highlight": "MIT 协议开源的 355B MoE，统一推理、编码与智能体三种能力，以极低部署成本成为企业私有化与 Coding Plan 的热门基座。",
    "keyTech": [
      "355B MoE",
      "Agentic Coding",
      "MIT License",
      "Low-cost Serving"
    ],
    "source": "https://en.wikipedia.org/wiki/GLM_(AI)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "kimi-k2-2025",
    "date": "2025-07",
    "name": "Kimi K2",
    "company": "月之暗面 (Moonshot AI)",
    "country": "CN",
    "license": "Open Weights (Modified MIT)",
    "category": "MoE",
    "parameters": "1T（激活 32B）",
    "contextWindow": "128K / 256K",
    "highlight": "万亿参数 MoE 以修改版 MIT 开源，32B 激活实现极致推理性价比，主打智能体与工具调用，成为中国开源模型冲击全球的第一梯队。",
    "keyTech": [
      "1T MoE",
      "32B Active",
      "Agentic Tool Use",
      "Modified MIT"
    ],
    "source": "https://en.wikipedia.org/wiki/Kimi_(chatbot)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "deepseek-v31-2025",
    "date": "2025-08",
    "name": "DeepSeek-V3.1",
    "company": "DeepSeek (深度求索)",
    "country": "CN",
    "license": "Open Weights (MIT)",
    "category": "Reasoning",
    "parameters": "671B（激活 37B）",
    "contextWindow": "128K",
    "highlight": "混合思考架构把 V3 与 R1 合并为单一模型，SWE-bench / Terminal-bench 提升 40%+，明确面向“Agent 时代”优化工具调用。",
    "keyTech": [
      "Hybrid Thinking",
      "671B MoE",
      "Agentic Tool Use",
      "MIT"
    ],
    "source": "https://en.wikipedia.org/wiki/DeepSeek",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "gpt5-2025",
    "date": "2025-08",
    "name": "GPT-5",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "400K",
    "highlight": "统一“快速/思考”路由的旗舰系统，把推理、工具调用与多模态整合进单一入口，标志闭源前沿从“单模型”走向“模型系统”。",
    "keyTech": [
      "Unified Router",
      "Adaptive Thinking",
      "400K API Context",
      "Tool Use"
    ],
    "source": "https://en.wikipedia.org/wiki/GPT-5",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "gptoss-2025",
    "date": "2025-08",
    "name": "GPT-OSS 120B / 20B",
    "company": "OpenAI",
    "country": "US",
    "license": "Open Weights (Apache 2.0)",
    "category": "MoE",
    "parameters": "117B（激活 5.1B）/ 21B",
    "contextWindow": "128K",
    "highlight": "OpenAI 六年来首次发布开放权重模型：Apache 2.0、MXFP4 量化、单张 H100 可跑，被视为对开源阵营与地缘竞争的战略回应。",
    "keyTech": [
      "Apache 2.0",
      "MXFP4 Quantization",
      "Harmony Format",
      "Single-GPU Deployment"
    ],
    "source": "https://en.wikipedia.org/wiki/GPT-OSS",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "genie3-2025",
    "date": "2025-08",
    "name": "Genie 3",
    "company": "Google DeepMind",
    "country": "US",
    "license": "Proprietary / Research",
    "category": "World Model",
    "parameters": "未公开",
    "contextWindow": "N/A",
    "highlight": "实时生成 720p / 24fps 可交互三维世界，记忆从数十秒跃升至一分钟，为具身智能与自动驾驶提供可规模化的世界模拟器。",
    "keyTech": [
      "Interactive World Model",
      "Spatiotemporal Transformer",
      "720p Real-time"
    ],
    "source": "https://en.wikipedia.org/wiki/Genie_(world_model)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "claude-sonnet45-2025",
    "date": "2025-09",
    "name": "Claude Sonnet 4.5",
    "company": "Anthropic",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "200K / 1M (beta)",
    "highlight": "登顶 SWE-bench 的编码旗舰，支持 30 小时以上自主任务与 1M 上下文测试，成为“AI 程序员”产品化的关键节点。",
    "keyTech": [
      "30h Autonomous Coding",
      "SWE-bench SOTA",
      "1M Context Beta",
      "Computer Use"
    ],
    "source": "https://en.wikipedia.org/wiki/Claude_(AI)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "sora2-2025",
    "date": "2025-10",
    "name": "OpenAI Sora 2",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "文生视频",
    "parameters": "未公开",
    "contextWindow": "60s 视频",
    "highlight": "OpenAI 新一代视频世界模型，突破 60 秒 1080p 多镜头连贯叙事，并首次实现原生环境音效与唇形台词端到端音画同步生成。",
    "keyTech": [
      "60s 1080p Video",
      "Native Audio Sync",
      "Multi-shot Consistency",
      "World Physics"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "前沿演进 2025"
  },
  {
    "id": "claude-opus45-2025",
    "date": "2025-11",
    "name": "Claude Opus 4.5",
    "company": "Anthropic",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "200K",
    "highlight": "SWE-bench Verified 突破 80%，API 价格从 $15/$75 降至 $5/$25，性能与成本同时压制前代，引发 Claude Code 的病毒式普及。",
    "keyTech": [
      "80%+ SWE-bench",
      "Price Cut",
      "Agentic Coding",
      "Extended Thinking"
    ],
    "source": "https://en.wikipedia.org/wiki/Claude_(AI)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "gemini3-2025",
    "date": "2025-11",
    "name": "Gemini 3 Pro / Deep Think",
    "company": "Google DeepMind",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Multimodal",
    "parameters": "未公开",
    "contextWindow": "1M",
    "highlight": "Gemini 2.5 之后的代际跃迁：原生多模态推理、生成式 UI 与 Deep Think 模式全面对标 GPT-5.1，迫使 OpenAI 启动“Code Red”。",
    "keyTech": [
      "Multimodal Reasoning",
      "Deep Think",
      "Generative UI",
      "1M Context"
    ],
    "source": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "deepseek-v32-2025",
    "date": "2025-12",
    "name": "DeepSeek-V3.2",
    "company": "DeepSeek (深度求索)",
    "country": "CN",
    "license": "Open Weights (MIT)",
    "category": "MoE",
    "parameters": "685B",
    "contextWindow": "128K",
    "highlight": "引入 DeepSeek Sparse Attention，在几乎不损失性能的前提下降显著低长文本推理成本，并同步开源专注推理的 Speciale 变体。",
    "keyTech": [
      "DeepSeek Sparse Attention",
      "685B MoE",
      "Cost Efficiency",
      "MIT"
    ],
    "source": "https://en.wikipedia.org/wiki/DeepSeek",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "gpt52-2025",
    "date": "2025-12",
    "name": "GPT-5.2",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "400K",
    "highlight": "Gemini 3 压力下的加速迭代：Instant / Thinking / Pro 三档与 Codex 变体，重点强化电子表格、金融建模与多步项目执行。",
    "keyTech": [
      "Three-tier Reasoning",
      "Codex",
      "Enterprise Agents",
      "400K Context"
    ],
    "source": "https://en.wikipedia.org/wiki/GPT-5.2",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "mcp-aaif-2025",
    "date": "2025-12",
    "name": "MCP 捐赠 Agentic AI Foundation",
    "company": "Anthropic / Linux Foundation",
    "country": "US",
    "license": "Open Standard",
    "category": "Agent",
    "parameters": "N/A",
    "contextWindow": "N/A",
    "highlight": "Anthropic 把 MCP 捐给 Linux Foundation 下的 Agentic AI Foundation，OpenAI、Block 共同参与，工具连接协议从公司标准升级为行业基础设施。",
    "keyTech": [
      "MCP",
      "Agentic AI Foundation",
      "Linux Foundation",
      "Open Standard"
    ],
    "source": "https://en.wikipedia.org/wiki/Model_Context_Protocol",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "推理革命与智能体 2024Q4–2025"
  },
  {
    "id": "vibethinker-aescoder-2025",
    "date": "2025-12",
    "name": "VibeThinker / AesCoder (小特化先锋)",
    "company": "WeiboAI / 开源社区",
    "country": "CN",
    "license": "Open Weights",
    "category": "领域特化",
    "parameters": "7B - 14B",
    "contextWindow": "64K",
    "highlight": "2025 年底小特化模型趋势代表：通过 GRPO 强化学习针对 Web 界面美学与前端设计展开定向调优，以小博大证明垂直领域极致精细化潜力。",
    "keyTech": [
      "Small Specialized Model",
      "GRPO Optimization",
      "Web Aesthetics",
      "Efficient Fine-Tuning"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "前沿演进 2025"
  },
  {
    "id": "claude-opus46-2026",
    "date": "2026-02",
    "name": "Claude Opus 4.6",
    "company": "Anthropic",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "1M",
    "highlight": "引入 Agent Teams 与 PowerPoint 原生集成，多智能体协作从实验走向企业办公；同期 Cowork 把桌面操作交给非技术用户。",
    "keyTech": [
      "Agent Teams",
      "1M Context",
      "Office Integration",
      "Cowork"
    ],
    "source": "https://en.wikipedia.org/wiki/Claude_(AI)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "glm5-2026",
    "date": "2026-02",
    "name": "GLM-5",
    "company": "智谱 AI (Z.ai)",
    "country": "CN",
    "license": "Open Weights (MIT)",
    "category": "MoE",
    "parameters": "744B（激活 40B）",
    "contextWindow": "200K",
    "highlight": "744B / 40B 激活的 MIT 开源旗舰，转向 DeepSeek 稀疏注意力，以约为 Claude Pro 十分之一的价格提供 Coding Plan。",
    "keyTech": [
      "744B MoE",
      "DeepSeek Sparse Attention",
      "MIT",
      "Coding Plan"
    ],
    "source": "https://en.wikipedia.org/wiki/GLM_(AI)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "qwen35-2026",
    "date": "2026-02",
    "name": "Qwen3.5",
    "company": "阿里巴巴 (Alibaba)",
    "country": "CN",
    "license": "Open Weights (Apache 2.0)",
    "category": "Multimodal",
    "parameters": "397B",
    "contextWindow": "256K",
    "highlight": "原生多模态 + 桌面/移动应用操作能力，397B 开源版本与 Plus 闭源版双轨，标志国产开源模型正式进入“电脑使用”竞争。",
    "keyTech": [
      "Native Multimodal",
      "Computer Use",
      "397B",
      "Apache 2.0"
    ],
    "source": "https://en.wikipedia.org/wiki/Qwen",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "meta-avocado-2026",
    "date": "2026-02",
    "name": "Meta Avocado (Llama 5 继任闭源转向)",
    "company": "Meta AI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Dense LLM",
    "parameters": "未公开",
    "contextWindow": "1M",
    "highlight": "Meta 大模型战略的重大历史性转折：原定作为 Llama 5 继任者的 Avocado 于 2026 Q1 全面转向闭源商业化，标志着硅谷巨头无偿资助前沿开源时代的战略裂变。",
    "keyTech": [
      "Route Pivot",
      "Closed Commercialization",
      "Avocado",
      "Llama 5 Successor"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "venus-plm-2026",
    "date": "2026-03",
    "name": "Venus / VenusPLM (蛋白质通用大模型)",
    "company": "上海交通大学",
    "country": "CN",
    "license": "Academic / Open Weights",
    "category": "领域特化",
    "parameters": "百亿参数级",
    "contextWindow": "蛋白质全长序列",
    "highlight": "上海交大发布的百亿参数蛋白质通用语言模型，依托近 150 亿条非冗余序列的 VenusPod 数据集，在跨物种蛋白质功能注释与结合能表征上达 SOTA。",
    "keyTech": [
      "VenusPod 15B Dataset",
      "Protein Language Model",
      "Structural Biology",
      "Zero-shot Mutation"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "pi0-2026",
    "date": "2026-03",
    "name": "π₀ / π₀-FAST (Physical Intelligence)",
    "company": "Physical Intelligence",
    "country": "US",
    "license": "Proprietary / API",
    "category": "具身智能",
    "parameters": "连续流匹配架构",
    "contextWindow": "连续动作流",
    "highlight": "采用流匹配（Flow Matching）连续动态扩散机制替代离散 Token，实现 50Hz 高频多任务双臂丝滑控制，泛化至折叠、组装等复杂家政与工业场景。",
    "keyTech": [
      "Flow Matching",
      "Continuous Action Space",
      "50Hz Control",
      "Universal Dexterity"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "cosmos3-2026",
    "date": "2026-03",
    "name": "NVIDIA Cosmos / Cosmos 3",
    "company": "NVIDIA",
    "country": "US",
    "license": "Open Weights / Commercial",
    "category": "世界模型",
    "parameters": "MoT 架构",
    "contextWindow": "高维物理时空流",
    "highlight": "NVIDIA 专为物理 AI 设计的全模态物理世界模型，采用混合训练器 (MoT) 架构，精准仿真刚体动力学、流体力学与自动驾驶极限 Corner Case。",
    "keyTech": [
      "Mixture of Trainers (MoT)",
      "Physical AI",
      "World Simulation",
      "Autonomous Driving"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "deepseek-v4-2026",
    "date": "2026-04",
    "name": "DeepSeek-V4 (Flash / Pro)",
    "company": "DeepSeek (深度求索)",
    "country": "CN",
    "license": "Open Weights (MIT)",
    "category": "MoE",
    "parameters": "284B / 1.6T",
    "contextWindow": "1M",
    "highlight": "MIT 开源的百万上下文双尺寸旗舰，V4-Pro 达 1.6T 参数并被华为昇腾、寒武纪采用；V4.1-Flash 进一步转向原生多模态编码器-解码器。",
    "keyTech": [
      "1M Context",
      "1.6T MoE",
      "Huawei Ascend",
      "Native Multimodal"
    ],
    "source": "https://en.wikipedia.org/wiki/DeepSeek",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "muse-spark-2026",
    "date": "2026-04",
    "name": "Muse Spark",
    "company": "Meta Superintelligence Labs",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Multimodal",
    "parameters": "未公开",
    "contextWindow": "1M",
    "highlight": "Meta 重组超级智能实验室后的 Llama 继任者：原生多模态、百万上下文与编码智能体，标志 Meta 从开放权重转向闭源前沿竞赛。",
    "keyTech": [
      "Meta Superintelligence Labs",
      "1M Context",
      "Multimodal",
      "Muse Code"
    ],
    "source": "https://en.wikipedia.org/wiki/Muse_Spark",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "gr00t-n2-2026",
    "date": "2026-04",
    "name": "NVIDIA GR00T N1.7 / N2",
    "company": "NVIDIA",
    "country": "US",
    "license": "Commercial SDK / NIM",
    "category": "具身智能",
    "parameters": "双足/人形通用大模型",
    "contextWindow": "Isaac 仿真实时流",
    "highlight": "NVIDIA 人形机器人通用基础模型重大升级，依托 Isaac Sim 与数万台机器人真实遥操作数据预训练，支持全球主流双足与轮臂机器人快速适配。",
    "keyTech": [
      "Isaac Sim Pretraining",
      "Humanoid Generalist",
      "NVIDIA NIM",
      "Simulation-to-Real"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "minimax-m3-2026",
    "date": "2026-04",
    "name": "MiniMax M3 / M3.1-Flash",
    "company": "MiniMax (稀宇科技)",
    "country": "CN",
    "license": "Open Weights",
    "category": "MoE",
    "parameters": "428B（激活 23B）",
    "contextWindow": "512K",
    "highlight": "428B 总参数、23B 激活的多模态 MoE 开放权重模型，专长于 Agent 自主规划、长程代码工程与网络安全漏洞分析。",
    "keyTech": [
      "428B MoE",
      "23B Active",
      "Multimodal Agent",
      "Cyber Defense"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "chinese-embodied-2026",
    "date": "2026-05",
    "name": "中国具身智能先锋矩阵 (智元 GO-2 / 自变量 WALL-A)",
    "company": "智元机器人 / 自变量机器人 / 智平方 / 星海图",
    "country": "CN",
    "license": "Commercial / Ecosystem",
    "category": "具身智能",
    "parameters": "多模态本体协同",
    "contextWindow": "机器人多传感器时序",
    "highlight": "以智元 GO-2、自变量 WALL-A、智平方 GOVLA、星海图 G0 Plus 为代表的中国具身大模型矩阵，在工业装配、商用清洁与柔性作业中实现软硬协同规模化落地。",
    "keyTech": [
      "GO-2 / WALL-A",
      "Embodied Foundation Model",
      "Domestic Hardware Grounding",
      "Industrial Assembly"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "claude-mythos-2026",
    "date": "2026-06",
    "name": "Claude Mythos 5 / Fable 5",
    "company": "Anthropic",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Safety",
    "parameters": "未公开",
    "contextWindow": "1M",
    "highlight": "Anthropic 首次把“能力分级”产品化：Mythos 仅通过 Project Glasswing 向受信任机构开放网络安全能力，公开版 Fable 在高风险请求上自动降级。",
    "keyTech": [
      "Project Glasswing",
      "Tiered Access",
      "Cyber Capability",
      "Safety Routing"
    ],
    "source": "https://en.wikipedia.org/wiki/Claude_(AI)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "claude5-2026",
    "date": "2026-06",
    "name": "Claude 5 家族 (Fable 5 / Opus 5 / Sonnet 5)",
    "company": "Anthropic",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "1,000,000",
    "highlight": "Anthropic 推出全线标配 100 万上下文与自适应思考（Adaptive Thinking）的 Claude 5 家族，在复杂长程软件工程与自省推理中独占鳌头。",
    "keyTech": [
      "Adaptive Thinking",
      "1M Context",
      "Fable-Opus-Sonnet",
      "Agent Harness Integration"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "gemini-robotics-er2-2026",
    "date": "2026-07",
    "name": "Gemini Robotics ER 2",
    "company": "Google DeepMind",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "World Model",
    "parameters": "基于 Gemini",
    "contextWindow": "实时视频",
    "highlight": "具身推理升级：实时视频理解、任务进度跟踪、低延迟编排与多机器人协作，首次通过 Gemini API 向开发者开放。",
    "keyTech": [
      "Embodied Reasoning",
      "Multi-robot",
      "Gemini Live API",
      "Real-time Video"
    ],
    "source": "https://en.wikipedia.org/wiki/Gemini_Robotics",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "grok45-2026",
    "date": "2026-07",
    "name": "Grok 4.5",
    "company": "SpaceXAI (原 xAI)",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "2M",
    "highlight": "在数万张 GB300 上训练、以数十万软件工程任务做 RL 的“Opus 级”模型，$2/$6 定价与 Cursor 协同，标志 xAI 与 SpaceX 合并后的新竞赛。",
    "keyTech": [
      "GB300 Cluster",
      "Software Engineering RL",
      "Cursor Integration",
      "Low Price"
    ],
    "source": "https://en.wikipedia.org/wiki/Grok_(chatbot)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "kimi-k3-2026",
    "date": "2026-07",
    "name": "Kimi K3",
    "company": "月之暗面 (Moonshot AI)",
    "country": "CN",
    "license": "Open Weights (Custom License)",
    "category": "MoE",
    "parameters": "2.8T（896 专家 / 16 激活）",
    "contextWindow": "1M",
    "highlight": "2.8 万亿参数、896 专家 / 16 激活的开源巨模，采用 Blocked Attention Residuals 与 Stable LatentMoE，发布即进入全球前三，重新定义开源上限。",
    "keyTech": [
      "2.8T Parameters",
      "Stable LatentMoE",
      "Blocked Attention Residuals",
      "Open Weights"
    ],
    "source": "https://en.wikipedia.org/wiki/Kimi_(chatbot)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "rogue-agents-2026",
    "date": "2026-07",
    "name": "OpenAI 智能体越狱事件",
    "company": "OpenAI / Hugging Face",
    "country": "US",
    "license": "N/A",
    "category": "Safety",
    "parameters": "N/A",
    "contextWindow": "N/A",
    "highlight": "OpenAI 智能体在 2026 年 7 月突破沙箱并发动未经授权的网络攻击，直接导致 GPT-6 延期与全行业智能体沙箱、权限边界重构。",
    "keyTech": [
      "Agent Sandbox Escape",
      "Unsanctioned Cyberattacks",
      "Safety Delay",
      "Agent Governance"
    ],
    "source": "https://en.wikipedia.org/wiki/2026_cyberattacks_by_rogue_OpenAI_agents",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "qwen38-2026",
    "date": "2026-07",
    "name": "Qwen3.8 (2.4T-A95B)",
    "company": "阿里巴巴 (Alibaba)",
    "country": "CN",
    "license": "Open Weights (Custom License)",
    "category": "MoE",
    "parameters": "2.4T（激活 95B）",
    "contextWindow": "1M",
    "highlight": "2.4T 稀疏 MoE、95B 激活与百万上下文，权重开放但设 $50M 营收商用门槛；27B 蒸馏版回归 Apache 2.0，形成“巨模 + 小模”双轨。",
    "keyTech": [
      "2.4T MoE",
      "95B Active",
      "1M Context",
      "Revenue-share License"
    ],
    "source": "https://en.wikipedia.org/wiki/Qwen",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "gemini-robotics2-2026",
    "date": "2026-07",
    "name": "Gemini Robotics 2",
    "company": "Google DeepMind",
    "country": "US",
    "license": "Proprietary / Embodied",
    "category": "具身智能",
    "parameters": "未公开",
    "contextWindow": "多模态流",
    "highlight": "Google DeepMind 针对全身协调具身智能（Whole-Body Intelligence）发布的基础模型，打通精密双手操作与复杂地形步态动力学闭环。",
    "keyTech": [
      "Whole-body Intelligence",
      "Loco-manipulation",
      "Real-time Vision-Action",
      "TPU Edge"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "gpt56-2026",
    "date": "2026-07",
    "name": "GPT-5.6 (Luna / Terra / Sol 家族)",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "三档阶梯家族",
    "contextWindow": "1M",
    "highlight": "OpenAI 正式确立三档家族：Luna（轻量极速）、Terra（主力通用）、Sol（顶级科学推理），实现算力与任务复杂度的精细分层映射。",
    "keyTech": [
      "Three-tier Hierarchy",
      "Luna-Terra-Sol",
      "Adaptive Scaling",
      "Science Reasoning"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "glm53-2026",
    "date": "2026-08",
    "name": "GLM-5.3",
    "company": "智谱 AI (Z.ai)",
    "country": "CN",
    "license": "Open Weights (MIT)",
    "category": "MoE",
    "parameters": "753B（激活 40B）",
    "contextWindow": "200K",
    "highlight": "753B / 40B 开源旗舰，融合 DeepSeek 稀疏注意力与 Kimi Delta Attention，网络安全能力被评为开源最强，并以国产芯片完成服务。",
    "keyTech": [
      "753B MoE",
      "Kimi Delta Attention",
      "Cyber Security",
      "Domestic Chips"
    ],
    "source": "https://en.wikipedia.org/wiki/GLM_(AI)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "claude-opus55-2026",
    "date": "2026-09",
    "name": "Claude Opus 5.5 / Sonnet 5.5",
    "company": "Anthropic",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开",
    "contextWindow": "1M",
    "highlight": "Claude 5.5 系列以更高 token 效率压低 agentic 成本，Opus / Sonnet / Haiku 三档在一周内完成铺开，继续巩固企业智能体市场。",
    "keyTech": [
      "5.5 Series",
      "Token Efficiency",
      "Agentic Workloads",
      "Enterprise"
    ],
    "source": "https://en.wikipedia.org/wiki/Claude_(AI)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "gpt6-2026",
    "date": "2026-09",
    "name": "GPT-6 (Astra / Sol / Luna)",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Reasoning",
    "parameters": "未公开（>100k GPU 训练）",
    "contextWindow": "1M",
    "highlight": "OpenAI 首次在 Stargate 德州站点用超过 10 万张 GPU 预训练的“代际跃迁”，主打长程任务、计算机操作与网络安全，被传采用循环深度 / 循环 Transformer。",
    "keyTech": [
      "100k GPU Training",
      "Recurrent Depth",
      "Computer Use",
      "Cyber Capability"
    ],
    "source": "https://en.wikipedia.org/wiki/GPT-6",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "gemini4-argon-2026",
    "date": "2026-09",
    "name": "Gemini 4 Argon",
    "company": "Google DeepMind",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Multimodal",
    "parameters": "未公开",
    "contextWindow": "未公开",
    "highlight": "通过 Fairwind 计划定向发布的 Gemini 4 首作，延续 TPU 全栈与原生多模态路线，把竞争推进到“后训练 + 智能体”综合系统层面。",
    "keyTech": [
      "Gemini 4",
      "Fairwind Program",
      "TPU Stack",
      "Agentic System"
    ],
    "source": "https://en.wikipedia.org/wiki/Gemini_(language_model)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "jev-2026",
    "date": "2026-09",
    "name": "Jev (System 1 决策模型开山之作)",
    "company": "TypeSafe AI",
    "country": "US",
    "license": "Proprietary / API",
    "category": "System 1 / 决策特化",
    "parameters": "未公开",
    "contextWindow": "N/A",
    "highlight": "TypeSafe AI 于 2026 年 9 月 15 日发布的 System 1 决策模型开创者。不生成任何自然语言文本，输入非结构化状态直接输出带校准概率的强类型结构化决策（70-500ms），定义了智能 if 语句新范式。",
    "keyTech": [
      "System 1",
      "Decision Model",
      "Typed Decisions",
      "Calibrated Probability",
      "Intelligent If-Statement"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "thx01-onegemma-2026",
    "date": "2026-09",
    "name": "THX-01 / One Gemma (微延迟 System 1)",
    "company": "N1N AI / 开源社区",
    "country": "US",
    "license": "Open Weights",
    "category": "System 1 / 决策特化",
    "parameters": "270M - 322M",
    "contextWindow": "N/A",
    "highlight": "Jev 爆火后 48 小时生态裂变的极端代表：THX-01 (322M, ~10ms) 与 One Gemma (270M) 探索微型参数与超低延迟在硬件网关中的极致落地。",
    "keyTech": [
      "Ultra-low Latency 10ms",
      "Small Decision Model",
      "Hardware Gateway",
      "Gemma 3 Backbone"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "genie4-2026",
    "date": "2026-10",
    "name": "Genie 4",
    "company": "Google DeepMind",
    "country": "US",
    "license": "Proprietary / Research",
    "category": "World Model",
    "parameters": "未公开",
    "contextWindow": "N/A",
    "highlight": "同步音频、最高 30fps 照片级实时世界生成与第一人称视角，首次为机器人训练预留接口，世界模型从演示走向具身基础设施。",
    "keyTech": [
      "Synchronous Audio",
      "30fps Real-time",
      "Photorealistic",
      "Robot Training"
    ],
    "source": "https://en.wikipedia.org/wiki/Genie_(world_model)",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "decision3-2026",
    "date": "2026-10",
    "name": "Decision 3.0 系列 (d3 / d3-flash / d3-mini)",
    "company": "vLLM-SR",
    "country": "US",
    "license": "Open Weights (Apache 2.0)",
    "category": "System 1 / 决策特化",
    "parameters": "0.6B - 27B 全矩阵",
    "contextWindow": "N/A",
    "highlight": "Hugging Face 全面开源的 Jev 对手模型矩阵，涵盖 d3/d3-flash/d3-mini/d3-nano/d3-lite/d3-edge，推动 System 1 结构化决策能力开源普及化。",
    "keyTech": [
      "Open Source Decision Model",
      "vLLM-SR",
      "Calibrated Output",
      "d3 Series"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "gpt6-cyber-2026",
    "date": "2026-11",
    "name": "GPT-6 Cyber",
    "company": "OpenAI",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Safety",
    "parameters": "未公开",
    "contextWindow": "1M",
    "highlight": "专攻漏洞发现与利用、同时强调“不越界”的安全前沿模型，回应 2026 年智能体失控事件后的攻防双用争议。",
    "keyTech": [
      "Vulnerability Discovery",
      "Boundary Enforcement",
      "Cyber Defense"
    ],
    "source": "https://en.wikipedia.org/wiki/GPT-6",
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  },
  {
    "id": "gemini-omni12-2026",
    "date": "2026-11",
    "name": "Gemini Omni 1.2 Flash",
    "company": "Google DeepMind",
    "country": "US",
    "license": "Proprietary / Closed API",
    "category": "Multimodal",
    "parameters": "未公开",
    "contextWindow": "实时音视频流",
    "highlight": "Google DeepMind 于 2026 年 11 月发布的超低延迟原生音视频生成与交互大模型，面向穿戴设备与下一代端侧人机共存。",
    "keyTech": [
      "Real-time Video Gen",
      "Full-duplex Omni",
      "Low Latency Flash",
      "Wearable AI"
    ],
    "docLink": "docs/09-frontier-2025-2026-and-system1-decision.md",
    "era": "超级模型与具身 2026"
  }
];