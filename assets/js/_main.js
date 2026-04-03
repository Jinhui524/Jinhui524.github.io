/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  return (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") ? "system" : themeSetting;
};

// Determine the computed theme, which can be "dark" or "light". If the theme setting is
// "system", the computed theme is determined based on the user's system preference.
let determineComputedTheme = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting != "system") {
    return themeSetting;
  }
  return (userPref && userPref("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
};

// detect OS/browser preference
const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Determine the expected language state of the site. Default is English so that the
// current authored content remains unchanged until the user explicitly switches.
let determineLanguageSetting = () => {
  let languageSetting = localStorage.getItem("language");
  return languageSetting === "zh" ? "zh" : "en";
};

const siteTranslations = {
  "home.about.lead": {
    en: `Hello! I am Jinhui Luo, an undergraduate student at <a href="https://www.hnust.edu.cn/" target="_blank" rel="noopener">Hunan University of Science and Technology</a> (2023-2027). My current academic interests center on artificial intelligence and its related research directions. During my undergraduate studies, I have been working at the <a href="https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E8%AE%A1%E7%AE%97%E4%B8%8E%E8%BD%AF%E4%BB%B6%E6%9C%8D%E5%8A%A1%E6%96%B0%E6%8A%80%E6%9C%AF%E6%B9%96%E5%8D%97%E7%9C%81%E9%87%8D%E7%82%B9%E5%AE%9E%E9%AA%8C%E5%AE%A4/61317819" target="_blank" rel="noopener">Hunan Provincial Key Laboratory of Service Computing and New Software Technology</a> under the supervision of <a href="https://guoshengkang.github.io/" target="_blank" rel="noopener">Prof. Guosheng Kang</a>.`,
    zh: `你好！我叫罗锦辉，是 <a href="https://www.hnust.edu.cn/" target="_blank" rel="noopener">湖南科技大学</a> 2023-2027 级本科生，目前主要关注人工智能相关研究方向。本科期间，我在 <a href="https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E8%AE%A1%E7%AE%97%E4%B8%8E%E8%BD%AF%E4%BB%B6%E6%9C%8D%E5%8A%A1%E6%96%B0%E6%8A%80%E6%9C%AF%E6%B9%96%E5%8D%97%E7%9C%81%E9%87%8D%E7%82%B9%E5%AE%9E%E9%AA%8C%E5%AE%A4/61317819" target="_blank" rel="noopener">湖南省服务计算与软件新技术重点实验室</a> 开展研究，在 <a href="https://guoshengkang.github.io/" target="_blank" rel="noopener">康国胜教授</a> 指导下进行学习与科研。`
  },
  "home.about.more": {
    en: `So far, I have worked on topics including Transformers, GNN, LSTM, RAG and LLM, and have produced several preliminary research outputs in these areas.`,
    zh: `到目前为止，我已经围绕 Transformers、GNN、LSTM、RAG 与 LLM 等方向开展研究，并取得了一些初步研究成果。`
  },
  "home.education.school": {
    en: `I am currently an undergraduate student at <a href="https://computer.hnust.edu.cn/" target="_blank" rel="noopener">School of Computer Science and Engineering, Hunan University of Science and Technology</a>, majoring in Data Science and Big Data Technology and expected to graduate in 2027.`,
    zh: `我目前就读于 <a href="https://computer.hnust.edu.cn/" target="_blank" rel="noopener">湖南科技大学计算机科学与工程学院</a>，本科专业为数据科学与大数据技术，预计于 2027 年毕业。`
  },
  "home.education.lab": {
    en: `I work in <a href="https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E8%AE%A1%E7%AE%97%E4%B8%8E%E8%BD%AF%E4%BB%B6%E6%9C%8D%E5%8A%A1%E6%96%B0%E6%8A%80%E6%9C%AF%E6%B9%96%E5%8D%97%E7%9C%81%E9%87%8D%E7%82%B9%E5%AE%9E%E9%AA%8C%E5%AE%A4/61317819" target="_blank" rel="noopener">Hunan Provincial Key Laboratory of Service Computing and New Software Technology</a> as an undergraduate member, where my recent work focuses on predictive process monitoring.`,
    zh: `我目前在 <a href="https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E8%AE%A1%E7%AE%97%E4%B8%8E%E8%BD%AF%E4%BB%B6%E6%9C%8D%E5%8A%A1%E6%96%B0%E6%8A%80%E6%9C%AF%E6%B9%96%E5%8D%97%E7%9C%81%E9%87%8D%E7%82%B9%E5%AE%9E%E9%AA%8C%E5%AE%A4/61317819" target="_blank" rel="noopener">湖南省服务计算与软件新技术重点实验室</a> 以本科成员身份参与研究，近期主要聚焦于预测性流程监控。`
  },
  "pub.llm4ppm.overview": {
    en: `This paper proposes <strong>LLM4PPM</strong>, the first foundation large language model for predictive process monitoring with both <strong>zero-shot prediction ability</strong> and <strong>multi-task support</strong>. It addresses two key limitations of existing work: the inability to fully exploit the rich semantics hidden in event data, and the lack of a unified cross-domain large model for predictive process monitoring. The paper is currently <strong>under review at ICWS</strong>.`,
    zh: `针对现有预测性流程监控方法无法充分利用事件数据中隐含的丰富语义，且当前尚无统一的跨域多任务基础大模型，本文提出首个面向预测性流程监控、具备<strong>零样本预测能力</strong>与<strong>多任务支持</strong>的基础大语言模型 <strong>LLM4PPM</strong>。该成果目前<strong>已投稿至 ICWS</strong>。`
  },
  "pub.llm4ppm.contribution": {
    en: `I standardized <strong>13 structured event-log datasets</strong> and transformed them into semantic stories to build a large-scale cross-domain corpus. I then implemented the core foundation-model pipeline, including <strong>continuous pre-training</strong> and <strong>multi-task fine-tuning with LoRA</strong>, and further took responsibility for experimental design and the writing of the full paper.`,
    zh: `我将 <strong>13 个结构化事件日志数据集</strong> 进行了标准化处理并转换为语义故事，构建了跨领域大型语料库；随后具体实现了包含 <strong>连续预训练</strong> 与 <strong>基于 LoRA 的多任务微调</strong> 在内的基础大模型构建流程，并负责实验设计与完整论文撰写。`
  },
  "pub.fhgsn.overview": {
    en: `This paper presents <strong>FHGSN</strong>, a <strong>frequency-based heterogeneous graph-sequence fusion network</strong> for next activity prediction. It is motivated by a key gap in prior work: purely sequential models often fail to capture complex structural relations among process attributes, while graph-based approaches usually struggle to jointly model interaction frequency and contextual dependency. The paper has been <strong>accepted by IJCNN</strong>.`,
    zh: `针对现有下一活动预测方法中，纯序列模型难以捕捉流程属性间的复杂结构信息，而图方法又难以同时刻画属性交互频率与上下文依赖关系的问题，本文提出 <strong>FHGSN</strong>，即一种面向下一活动预测的<strong>基于频率的异构图与序列融合网络</strong>。该成果已<strong>被 IJCNN 录用</strong>。`
  },
  "pub.fhgsn.contribution": {
    en: `I proposed an event-log <strong>heterogeneous graph construction strategy</strong> and designed the concrete implementation of a <strong>two-stage GraphSAGE-based representation framework</strong> with two aggregation mechanisms. This model effectively captures both temporal interaction frequency and contextual dependency strength. I also completed the experimental design and wrote the full paper.`,
    zh: `我提出了一种事件日志<strong>异构图构建策略</strong>，并设计实现了包含两种聚合机制的<strong>两阶段 GraphSAGE 表征框架</strong>，能够有效编码时序交互频率与上下文依赖强度。随后我还负责实验设计与完整论文撰写。`
  },
  "pub.mfml.overview": {
    en: `This paper proposes <strong>MFML</strong>, a framework for predictive business process monitoring based on <strong>multi-modal fusion</strong> and <strong>multi-task learning</strong>. Existing methods are often trained for a single task and therefore cannot fully exploit the collaborative value of cross-task knowledge, while also overlooking the intrinsic correlations among different data modalities. This work is currently <strong>under review at Applied Soft Computing</strong>.`,
    zh: `针对现有预测性业务流程监控方法大多采用单任务训练、未能充分挖掘跨任务知识协同价值，同时忽略不同数据模态之间内在关联的问题，本文提出基于<strong>多模态融合</strong>与<strong>多任务学习</strong>的 <strong>MFML</strong> 框架。该成果目前<strong>已投稿至 Applied Soft Computing</strong>。`
  },
  "pub.mfml.contribution": {
    en: `I implemented the branch that uses a <strong>hybrid Transformer-LSTM encoder</strong> to model sequential features and a <strong>Residual CNN</strong> to capture dependencies among event attributes. I also designed the <strong>loss-driven multi-task learning framework</strong>, and contributed to experimental design as well as the method and experiment sections of the manuscript.`,
    zh: `我完成了使用<strong>混合 Transformer-LSTM 编码器</strong>建模序列特征、以及利用<strong>Residual CNN</strong> 捕捉事件属性依赖关系的分支实现，并设计了基于损失函数的<strong>多任务学习框架</strong>；随后参与实验设计以及论文方法与实验部分撰写。`
  },
  "pub.align.overview": {
    en: `This paper studies <strong>graph-sequence alignment for next event prediction</strong> through a contrastive learning framework. It is motivated by the fact that many existing methods either rely mainly on sequence models or simply fuse multi-view data, without sufficiently modeling both process topology and long-range dependencies in event sequences. The paper has been <strong>accepted by CSCWD</strong>.`,
    zh: `针对现有下一事件预测方法往往依赖序列模型，或仅对多视图数据进行简单融合、难以同时充分捕捉流程拓扑结构与事件序列长程依赖的问题，本文提出一种面向下一事件预测的<strong>图与序列对齐对比学习框架</strong>。该成果已<strong>被 CSCWD 录用</strong>。`
  },
  "pub.align.contribution": {
    en: `I designed the module for <strong>DFG construction</strong> and <strong>GCN-based graph representation learning</strong>, and participated in the discussion and development of the contrastive learning framework. I further contributed to experimental design, wrote the abstract and introduction, and helped refine the final manuscript in detail.`,
    zh: `我设计了基于<strong>DFG 构建</strong>与<strong>GCN 图表征学习</strong>的模块实现，参与了对比学习框架的讨论与构建；随后完成了实验设计、摘要与引言撰写，并对最终论文进行了细节层面的完善。`
  },
  "pub.sarft.overview": {
    en: `This paper proposes <strong>SAR-FT</strong>, a semantic-story-based framework for next activity prediction using <strong>retrieval-augmented generation</strong> and <strong>fine-tuning</strong>. It addresses two practical issues in existing methods: the heavy training cost of prediction models and the hallucination problem of general-purpose LLMs when domain adaptation is insufficient. The paper is currently <strong>under review at ICSS</strong>.`,
    zh: `针对现有下一活动预测方法训练成本较高，以及通用大语言模型在领域适应不足时容易产生幻觉的问题，本文提出基于语义故事的<strong>检索增强生成</strong>与<strong>微调</strong>框架 <strong>SAR-FT</strong>。该成果目前<strong>已投稿至 ICSS</strong>。`
  },
  "pub.sarft.contribution": {
    en: `I participated in the design and discussion of the <strong>retrieval-augmented generation module</strong>, and later contributed to the domain literature review and the revision of the full manuscript.`,
    zh: `我参与了<strong>检索增强生成模块</strong>的方法讨论与构建，随后完成了相关领域文献调研，并参与了完整论文的修改与完善。`
  },
  "pub.cims.overview": {
    en: `This paper proposes a next-event prediction method for business processes by integrating <strong>event-sequence semantics</strong> with <strong>attribute-association semantics</strong>. It is designed to address the limitations of existing predictive business process monitoring methods in modeling both semantic event sequences and the implicit relations among event attributes. The paper has been <strong>accepted by CIMS</strong>.`,
    zh: `针对现有预测性业务流程监控中的下一事件预测方法在捕捉事件序列语义与事件属性隐含关联关系方面的局限性，本文提出一种融合<strong>事件序列语义</strong>与<strong>属性关联语义</strong>的业务流程下一事件预测方法。该成果已<strong>被 CIMS 录用</strong>。`
  },
  "pub.cims.contribution": {
    en: `I implemented the component that uses <strong>BERT</strong> to encode transformed semantic stories, and then took responsibility for experimental design and the writing of the full paper.`,
    zh: `我具体实现了使用 <strong>BERT</strong> 对转换后的语义故事进行编码的模块，随后负责实验设计与完整论文撰写。`
  }
};

const exactTextTranslations = {
  "Publications": "论文",
  "Projects": "项目",
  "AI Notes": "AI随笔",
  "CV": "简历",
  "Hi There": "你好",
  "Welcome to my homepage!": "欢迎来到我的主页！",
  "About Me": "关于我",
  "Research Interests": "研究兴趣",
  "Natural Language Processing": "自然语言处理",
  "Large Language Models": "大语言模型",
  "Deep Learning": "深度学习",
  "Computer Vision": "计算机视觉",
  "Time Series Forecasting": "时间序列预测",
  "Vision-Language Models": "视觉语言模型",
  "Education": "教育经历",
  "Research Note": "研究注记",
  "What is Predictive Process Monitoring?": "什么是预测性流程监控？",
  "From BPM to prediction": "从 BPM 到预测",
  "Business Process": "业务流程",
  "Event Log": "事件日志",
  "Running Prefix": "运行前缀",
  "Future State": "未来状态",
  "Typical prediction targets": "典型预测目标",
  "Next activity": "下一活动",
  "Remaining time": "剩余时间",
  "Outcome and risk": "结果与风险",
  "Method evolution": "方法演进",
  "Rules": "规则方法",
  "ML": "机器学习",
  "In business process management (BPM), predictive process monitoring (PPM) asks a forward-looking question: given the event trace that has already happened in an ongoing case, what is likely to happen next? In practice, this means learning from historical process logs to estimate future activities, remaining time, outcomes, or risks before the case is completed.": "在业务流程管理（BPM）中，预测性流程监控（PPM）关注的是一个面向未来的问题：给定某个正在执行案例已经发生的事件轨迹，接下来最可能发生什么？在实际中，这意味着从历史流程日志中学习模式，在案例完成之前就预测其未来活动、剩余时间、结果或风险。",
  "An intuitive example": "一个直观例子",
  "Consider an order-handling process in BPM. Each event log row records one completed action in an ongoing case. At prediction time, we do not see the full case yet: we only observe a prefix of the trace, and the model estimates what will happen next.": "以一个 BPM 中的订单处理流程为例。事件日志中的每一行都记录了该案例中已经完成的一次操作。在预测时，我们并不能看到完整案例，只能观测到当前轨迹的一个前缀，而模型需要根据这个前缀去估计接下来会发生什么。",
  "Order": "序号",
  "Event": "事件",
  "Resource": "资源",
  "Action": "动作",
  "Cost": "成本",
  "Create Offer": "创建报价",
  "Created": "已创建",
  "Sent mail": "发送邮件",
  "State change": "状态变更",
  "Cancelled": "已取消",
  "Returned": "已退回",
  "In this toy example, rows 1-3 are the observed prefix. The model is asked to predict row 4 before it actually occurs.": "在这个示意例子中，第 1-3 行构成已观测到的前缀，模型的任务是在第 4 行真正发生之前先将其预测出来。",
  "How the prediction is made": "预测是如何进行的",
  "Step 1": "步骤 1",
  "Step 2": "步骤 2",
  "Step 3": "步骤 3",
  "Historical event logs": "历史事件日志",
  "Collect completed process traces from past cases.": "收集历史已完成案例的流程轨迹。",
  "Prefix encoding": "前缀编码",
  "Create Offer → Created → Sent mail": "创建报价 → 已创建 → 发送邮件",
  "Prediction model": "预测模型",
  "LSTM / GNN / Transformer learns process patterns.": "LSTM / GNN / Transformer 学习流程模式。",
  "Output": "输出",
  "Next event prediction": "下一事件预测",
  "Most likely next event:": "最可能的下一事件：",
  "Problem Definition": "问题定义",
  "Classic Methods": "经典方法",
  "Why It Matters": "研究意义",
  "Given a partially executed case, predict a future attribute of that case from its observed prefix, event sequence, timestamps, and contextual information.": "给定一个尚未执行完成的案例，根据其已观测前缀、事件序列、时间戳和上下文信息，预测该案例未来的某个属性。",
  "Representative approaches include process-mining features, statistical learning, sequence models such as LSTM, graph-based models for richer structural relations, and more recent Transformer, RAG, and LLM-enhanced methods.": "代表性方法包括基于流程挖掘特征的方法、统计学习方法、LSTM 等序列模型、用于建模更丰富结构关系的图模型，以及近年来的 Transformer、RAG 和 LLM 增强方法。",
  "PPM turns process data into early signals for intervention. It can help organizations anticipate delays, optimize resources, improve service quality, and support more proactive decision-making in BPM systems.": "PPM 能够把流程数据转化为可提前干预的早期信号，帮助组织预判延迟、优化资源配置、提升服务质量，并支持 BPM 系统中的更主动决策。",
  "Awards": "奖项荣誉",
  "[National]": "[国家级]",
  "[Provincial]": "[省级]",
  "Second Prize, Programming Challenge, 7th Chuanzhi Cup National IT Skills Competition.": "第七届传智杯全国 IT 技能大赛程序设计挑战赛二等奖。",
  "Second Prize, Programming Challenge, 7th Chuanzhi Cup National IT Skills Competition": "第七届传智杯全国 IT 技能大赛程序设计挑战赛二等奖",
  "Third Prize, Programming Skills Track, RAICOM Robotics Developer Competition.": "睿抗机器人开发者大赛（RAICOM）编程技能赛项三等奖。",
  "Third Prize, Programming Skills Track, RAICOM Robotics Developer Competition": "睿抗机器人开发者大赛（RAICOM）编程技能赛项三等奖",
  "First Prize, 21st Hunan Provincial Collegiate Programming Contest.": "湖南省第 21 届大学生计算机程序设计竞赛一等奖。",
  "First Prize, 21st Hunan Provincial Collegiate Programming Contest": "湖南省第 21 届大学生计算机程序设计竞赛一等奖",
  "Second Prize, 16th Lanqiao Cup Software and Information Technology Talent Competition.": "第十六届蓝桥杯软件和信息技术专业人才大赛二等奖。",
  "Second Prize, 16th Lanqiao Cup Software and Information Technology Talent Competition": "第十六届蓝桥杯软件和信息技术专业人才大赛二等奖",
  "Graduate Outreach / Academic CV": "保研展示 / 学术简历",
  "Undergraduate student at Hunan University of Science and Technology (2023-2027), currently working at the Hunan Provincial Key Laboratory of Service Computing and New Software Technology under the supervision of Prof. Guosheng Kang. My research focuses on artificial intelligence, predictive process monitoring, graph learning, retrieval-augmented generation, and large language models.": "湖南科技大学 2023-2027 级本科生，目前在湖南省服务计算与软件新技术重点实验室开展研究，导师为康国胜教授。我的研究聚焦于人工智能、预测性流程监控、图学习、检索增强生成与大语言模型。",
  "Affiliation": "所属单位",
  "Laboratory": "实验室",
  "Research Focus": "研究方向",
  "Contact": "联系方式",
  "Hunan Provincial Key Laboratory of Service Computing and New Software Technology": "湖南省服务计算与软件新技术重点实验室",
  "AI, Process Prediction, Graph Learning, RAG, LLMs": "人工智能、流程预测、图学习、RAG、大语言模型",
  "Academic Focus": "学术关注",
  "Research Output": "研究成果",
  "Implementation": "实践经历",
  "Recognition": "荣誉奖项",
  "Selected Publications": "代表性论文",
  "Selected Projects": "代表性项目",
  "National Level": "国家级",
  "Provincial Level": "省级",
  "Email": "邮箱",
  "China": "中国",
  "Method Snapshot": "方法框架",
  "Framework Overview": "框架概览",
  "Original framework figure of LLM4PPM.": "LLM4PPM 的原始方法框架图。",
  "Original framework figure of FHGSN.": "FHGSN 的原始方法框架图。",
  "Original framework figure of the multi-modal fusion and multi-task learning method.": "多模态融合与多任务学习方法的原始框架图。",
  "Original framework figure of the graph-sequence contrastive learning approach.": "图与序列对比学习方法的原始框架图。",
  "Original framework figure of the retrieval-augmented generation method.": "检索增强生成方法的原始框架图。",
  "Original framework figure of the semantic fusion method.": "语义融合方法的原始框架图。",
  "Overview": "概述",
  "My Contribution": "个人贡献",
  "Project Overview": "项目概述",
  "Project Overview:": "项目概述：",
  "My Contribution:": "个人贡献：",
  "Keywords:": "关键词：",
  "National Undergraduate Innovation Project": "国家级大创项目",
  "Core Member": "核心成员",
  "Currently under review for": "当前投稿于",
  "Accepted to appear in": "已被接收至",
  "Published in": "发表于",
  "Recommended citation:": "推荐引用：",
  "Download Paper": "下载论文",
  "Download Slides": "下载幻灯片",
  "Download Bibtex": "下载 BibTeX",
  "Under Review": "在审",
  "Accept": "已录用",
  "This is not a traditional blog so much as an AI learning log. I plan to keep writing about papers, implementation reflections, learning routes, and my evolving understanding of artificial intelligence.": "这里与其说是传统博客，不如说是一份 AI 学习日志。我会持续记录论文阅读、实现反思、学习路径，以及我对人工智能不断变化的理解。",
  "There are no public publication entries here yet.": "这里暂时还没有公开论文条目。",
  "I will gradually add papers, course research, preprints, or polished technical writing that I can openly share.": "我会逐步补充能够公开展示的论文、课程研究、预印本和技术写作。",
  "This projects page is still being curated.": "项目页面仍在持续整理中。",
  "I will gradually add the projects, implementation notes, and retrospectives that best represent my strengths.": "我会逐步补充最能代表我能力的项目、实现笔记与复盘总结。",
  "This notes page is still at an early stage.": "AI 随笔页面目前还在起步阶段。",
  "I plan to keep writing about:": "我计划持续记录：",
  "my understanding of artificial intelligence and large language models": "我对人工智能与大语言模型的理解",
  "learning routes, paper reading, and stage-by-stage reflections": "学习路径、论文阅读与阶段性反思",
  "implementation notes, choices, and lessons from projects": "项目中的实现笔记、技术选择与经验总结",
  "A national-level undergraduate innovation project on intelligent tongue diagnosis using ESP32 and deep learning.": "一个基于 ESP32 与深度学习的智能舌诊国家级大学生创新项目。",
  "This project focuses on tongue diagnosis in traditional Chinese medicine and develops a multi-platform intelligent framework that integrates constitution theory with deep learning. To address the limitations of traditional tongue inspection, including strong dependence on practitioner experience, inconsistent standards, and sensitivity to lighting conditions, the system combines YOLOv11-based tongue detection, U²-Net image segmentation, and ResNet50-based constitution classification. It also builds a standardized dataset of 3,000 tongue images collected under different lighting conditions across nine constitution types, providing a practical path toward more objective and standardized tongue diagnosis and exploring its potential for mobile-assisted diagnostic applications.": "本项目围绕中医舌诊场景，构建了一个融合体质理论与深度学习技术的多平台智能舌诊框架。针对传统舌诊依赖经验、标准不一且易受光照干扰等问题，系统结合基于 YOLOv11 的舌体检测、U²-Net 图像分割与基于 ResNet50 的体质分类模型，并构建了覆盖九种中医体质、包含 3000 张不同光照条件舌象图像的标准化数据集，为舌诊的客观化与标准化提供了可行路径，也探索了其在移动端辅助诊断中的应用潜力。",
  "I was mainly responsible for the core deep learning component of the project. I completed tongue-image annotation and classification, defined the labeling scheme, and split the 3,000 samples into training and test sets. I then applied YOLOv11, U²-Net, and ResNet50 to the three major modules of detection, segmentation, and constitution classification, respectively, and further improved performance through automated hyperparameter tuning with Optuna. In addition, I conducted systematic experimental evaluation using metrics such as mAP50, Precision, and Recall to validate the overall framework under complex scenarios.": "我主要负责项目中的核心深度学习部分，完成了舌象图像的标注与分类、标签体系定义以及 3000 张样本的训练集与测试集划分。随后分别将 YOLOv11、U²-Net 与 ResNet50 应用于检测、分割和体质分类三大模块，并利用 Optuna 进行了自动超参数优化，进一步提升整体性能。此外，我还基于 mAP50、Precision、Recall 等指标完成了系统实验分析，验证了该框架在复杂场景下的有效性。",
  "This paper can be extended with open links, project page material, or supplementary notes later.": "后续可以在此补充公开链接、项目材料或补充说明。",
  "Under construction.": "建设中。"
};

let translatableTextNodes = [];

let normalizeI18nText = (value) => (value || "").replace(/\s+/g, " ").trim();

let initTranslatableTextNodes = () => {
  if (translatableTextNodes.length > 0) {
    return;
  }

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) {
        return NodeFilter.FILTER_REJECT;
      }

      if (["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      if (
        parent.closest("[data-i18n], [data-i18n-html], .language-switch") ||
        parent.closest("svg")
      ) {
        return NodeFilter.FILTER_REJECT;
      }

      return normalizeI18nText(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  let currentNode;
  while ((currentNode = walker.nextNode())) {
    currentNode.__i18nOriginal = currentNode.nodeValue;
    translatableTextNodes.push(currentNode);
  }
};

let updateThemeToggleUI = (theme) => {
  const isDark = theme === "dark";
  const isChinese = determineLanguageSetting() === "zh";
  const toggleTitle = isDark
    ? (isChinese ? "切换到浅色模式" : "Switch to light mode")
    : (isChinese ? "切换到深夜模式" : "Switch to dark mode");

  $("#theme-toggle")
    .attr("aria-pressed", isDark ? "true" : "false")
    .attr("aria-label", toggleTitle)
    .attr("title", toggleTitle)
    .attr("data-mode", isDark ? "dark" : "light");

  $("#theme-icon")
    .toggleClass("fa-sun", !isDark)
    .toggleClass("fa-moon", isDark);
};

let updateLanguageToggleUI = (language) => {
  const isChinese = language === "zh";
  const buttonTitle = isChinese ? "Switch to English" : "切换到中文";

  $("#language-toggle")
    .attr("aria-pressed", isChinese ? "true" : "false")
    .attr("aria-label", buttonTitle)
    .attr("title", buttonTitle)
    .attr("data-language", language);

  $("#language-toggle-label").text(isChinese ? "EN" : "中文");
};

let applyKeyTranslations = (language) => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (siteTranslations[key] && siteTranslations[key][language]) {
      element.textContent = siteTranslations[key][language];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.getAttribute("data-i18n-html");
    if (siteTranslations[key] && siteTranslations[key][language]) {
      element.innerHTML = siteTranslations[key][language];
    }
  });
};

let applyExactTextTranslations = (language) => {
  translatableTextNodes.forEach((node) => {
    const originalText = node.__i18nOriginal || node.nodeValue;
    if (language !== "zh") {
      node.nodeValue = originalText;
      return;
    }

    const normalizedText = normalizeI18nText(originalText);
    const translatedText = exactTextTranslations[normalizedText];
    if (!translatedText) {
      node.nodeValue = originalText;
      return;
    }

    const leadingWhitespace = originalText.match(/^\s*/)[0];
    const trailingWhitespace = originalText.match(/\s*$/)[0];
    node.nodeValue = `${leadingWhitespace}${translatedText}${trailingWhitespace}`;
  });
};

let setLanguage = (language) => {
  const resolvedLanguage = language === "zh" ? "zh" : "en";
  document.documentElement.setAttribute("data-language", resolvedLanguage);
  document.documentElement.setAttribute("lang", resolvedLanguage === "zh" ? "zh-CN" : "en");
  applyKeyTranslations(resolvedLanguage);
  applyExactTextTranslations(resolvedLanguage);
  updateLanguageToggleUI(resolvedLanguage);
  updateThemeToggleUI($("html").attr("data-theme") === "dark" ? "dark" : "light");
};

let toggleLanguage = () => {
  const currentLanguage = determineLanguageSetting();
  const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
  localStorage.setItem("language", nextLanguage);
  setLanguage(nextLanguage);
};

let setTheme = (theme) => {
  const use_theme =
    theme ||
    localStorage.getItem("theme") ||
    $("html").attr("data-theme") ||
    browserPref;

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
  }

  updateThemeToggleUI(use_theme === "dark" ? "dark" : "light");
};

// Toggle the theme manually
var toggleTheme = () => {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", new_theme);
  setTheme(new_theme);
};

// Subtle click burst so the site feels a little more alive without losing the academic tone.
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

let spawnClickBurst = (x, y) => {
  const burst = document.createElement("span");
  burst.className = "click-burst";
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;

  const ring = document.createElement("span");
  ring.className = "click-burst__ring";
  burst.appendChild(ring);

  const glow = document.createElement("span");
  glow.className = "click-burst__glow";
  burst.appendChild(glow);

  const sparkAngles = [0, 52, 118, 180, 238, 304];
  sparkAngles.forEach((angle, index) => {
    const spark = document.createElement("span");
    spark.className = "click-burst__spark";
    spark.style.setProperty("--angle", `${angle + (Math.random() * 14 - 7)}deg`);
    spark.style.setProperty("--travel", `${0.75 + Math.random() * 0.5}rem`);
    spark.style.setProperty("--delay", `${index * 14}ms`);
    spark.style.setProperty(
      "--spark-color",
      index % 3 === 0 ? "var(--outreach-spark-warm)" : "var(--outreach-spark-core)"
    );
    burst.appendChild(spark);
  });

  document.body.appendChild(burst);
  window.setTimeout(() => burst.remove(), 720);
};

let initClickBurst = () => {
  if (!window.PointerEvent || reducedMotionQuery.matches) {
    return;
  }

  document.addEventListener("pointerdown", (event) => {
    if (event.isPrimary === false) {
      return;
    }

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    spawnClickBurst(event.clientX, event.clientY);
  }, { passive: true });
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // If the user hasn't chosen a theme, follow the OS preference
  initTranslatableTextNodes();
  setTheme();
  setLanguage(determineLanguageSetting());
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", (e) => {
          if (!localStorage.getItem("theme")) {
            setTheme(e.matches ? "dark" : "light");
          }
        });

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);
  $('#language-toggle').on('click', toggleLanguage);

  // Add a light click flourish across the site.
  initClickBurst();

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

});
