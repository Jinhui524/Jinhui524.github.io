export type PublicationType = 'conference' | 'journal' | 'workshop' | 'preprint'
export type PublicationStatus = 'published' | 'accepted' | 'under-review' | 'preprint'

export interface PublicationAuthor {
  name: string
  isMe?: boolean
  isEqual?: boolean
  isCoreContributor?: boolean
  role?: 'corresponding' | 'project-leader'
  homepage?: string
}

export interface PublicationLink {
  type: string
  href: string
}

export interface PublicationRecord {
  slug: string
  titleZh: string
  titleEn: string
  authors: PublicationAuthor[]
  venue: string
  year: string
  type: PublicationType
  status: PublicationStatus
  ranking?: string
  image?: string
  topics: string[]
  abstractZh: string
  abstractEn: string
  overviewZh: string
  overviewEn: string
  contributionZh: string
  contributionEn: string
  links: PublicationLink[]
}

/**
 * The single source of truth for the publications shown on both locale pages.
 * Keep venue classifications here so the cards and detail pages never drift.
 */
export const academicPublications: PublicationRecord[] = [
  {
    slug: 'llm4ppm',
    titleZh: 'LLM4PPM：面向预测性业务流程监控的可迁移流程语义学习',
    titleEn: 'LLM4PPM: Learning Transferable Process Semantics for Predictive Process Monitoring',
    authors: [
      { name: 'Jinhui Luo', isMe: true },
      { name: 'Jiayi Long' },
      { name: 'Jiawei Chen' },
      { name: 'Guosheng Kang', isCoreContributor: true }
    ],
    venue: 'WISE',
    year: '2026',
    type: 'conference',
    status: 'accepted',
    ranking: 'CCF B',
    image: '/images/publications/frameworks/llm4ppm.png',
    topics: ['Process intelligence', 'Large language models'],
    abstractZh: '将事件日志转换为语义故事，通过持续预训练与 LoRA 指令微调学习可迁移流程语义。',
    abstractEn: 'A process foundation model learns transferable semantics from event logs with continuous pre-training and LoRA tuning.',
    overviewZh: '本文把离散的事件日志组织为可读、可检索的流程语义故事，并设计面向流程领域的持续预训练与参数高效微调流程，使语言模型能够迁移到不同业务流程的预测性监控任务。',
    overviewEn: 'We turn discrete event logs into readable and retrievable semantic stories, then combine process-oriented continual pre-training with parameter-efficient tuning for predictive monitoring across business processes.',
    contributionZh: '我负责数据语义化方案、模型训练流程和实验分析，重点验证跨数据集迁移能力。',
    contributionEn: 'I worked on the semantic serialization pipeline, model training protocol, and experiments validating transfer across datasets.',
    links: []
  },
  {
    slug: 'fhgsn',
    titleZh: '基于频率的异构图序列融合网络用于下一活动预测',
    titleEn: 'Frequency-Based Heterogeneous Graph-Sequence Fusion Network for Next Activity Prediction',
    authors: [
      { name: 'Jinhui Luo', isMe: true },
      { name: 'Jiayi Long' },
      { name: 'Ziyi Niu' },
      { name: 'Guosheng Kang', isCoreContributor: true }
    ],
    venue: 'IJCNN',
    year: '2026',
    type: 'conference',
    status: 'accepted',
    ranking: 'CCF C',
    image: '/images/publications/frameworks/fhgsn.png',
    topics: ['Graph neural networks', 'Next activity prediction'],
    abstractZh: '通过异构图和序列融合，同时建模事件日志中的交互频率与上下文依赖。',
    abstractEn: 'A graph-sequence fusion network models interaction frequency and contextual dependency in event logs.',
    overviewZh: '方法以事件、属性和活动之间的关系构建异构图，同时保留原始事件顺序，通过频率感知的消息传递和序列编码联合建模局部结构与长期上下文。',
    overviewEn: 'The method builds a heterogeneous graph over events, attributes, and activities while preserving event order, using frequency-aware message passing and sequence encoding to model local structure and long-range context together.',
    contributionZh: '我参与异构图构建、频率特征设计和消融实验，分析图结构对下一活动预测的影响。',
    contributionEn: 'I contributed to heterogeneous graph construction, frequency feature design, and ablations studying the effect of graph structure on next-activity prediction.',
    links: []
  },
  {
    slug: 'aligning-graphs',
    titleZh: '对齐图与序列：用于下一事件预测的对比学习方法',
    titleEn: 'Aligning Graphs and Sequences: A Contrastive Learning Approach for Next Event Prediction',
    authors: [
      { name: 'Jiayi Long' },
      { name: 'Jinhui Luo', isMe: true },
      { name: 'Jiawei Chen' },
      { name: 'Guosheng Kang', isCoreContributor: true }
    ],
    venue: 'CSCWD',
    year: '2026',
    type: 'conference',
    status: 'accepted',
    ranking: 'CCF C',
    image: '/images/publications/frameworks/gsca.png',
    topics: ['Contrastive learning', 'Graph-sequence fusion'],
    abstractZh: '通过对比学习让流程图结构表征与事件序列表征互相增强。',
    abstractEn: 'A contrastive framework strengthens graph structure and event-sequence representations for next-event prediction.',
    overviewZh: '本文构造图视角与序列视角下的正负样本对，使用对比目标将两个视角映射到一致的语义空间，再将融合表征用于下一事件预测。',
    overviewEn: 'We construct positive and negative pairs from graph and sequence views, align them in a shared semantic space with contrastive objectives, and use the fused representation for next-event prediction.',
    contributionZh: '我参与对比样本构造、训练目标实现以及不同图序列融合策略的实验比较。',
    contributionEn: 'I contributed to contrastive pair construction, objective implementation, and experiments comparing graph-sequence fusion strategies.',
    links: []
  },
  {
    slug: 'cims-semantic-fusion',
    titleZh: '融合事件序列语义与属性关联语义的业务流程下一事件预测',
    titleEn: 'Next Event Prediction by Fusing Event-Sequence and Attribute-Association Semantics',
    authors: [
      { name: 'Jiawei Chen' },
      { name: 'Jinhui Luo', isMe: true },
      { name: 'Guosheng Kang', isCoreContributor: true }
    ],
    venue: '计算机集成制造系统',
    year: '2026',
    type: 'journal',
    status: 'accepted',
    ranking: '中文核心 / CNKI Q1',
    image: '/images/publications/frameworks/sa4nap.png',
    topics: ['Event sequences', 'Semantic modeling'],
    abstractZh: '融合事件序列语义与属性关联语义，提升业务流程下一事件预测。',
    abstractEn: 'A semantic fusion method combines event sequences and attribute relations for next-event prediction.',
    overviewZh: '方法从事件发生顺序和事件属性关联两个层面提取语义，利用交互式融合模块减少单一视角造成的信息缺失，从而提升复杂业务流程中的预测稳定性。',
    overviewEn: 'The method extracts semantics from event order and attribute associations, using an interactive fusion module to reduce information loss from either view and improve prediction stability in complex processes.',
    contributionZh: '我负责属性关联图建模、语义融合模块实现与实验结果分析。',
    contributionEn: 'I worked on attribute-association graph modeling, semantic fusion implementation, and analysis of experimental results.',
    links: []
  },
  {
    slug: 'mfml',
    titleZh: '基于多模态融合与多任务学习的预测性业务流程监控',
    titleEn: 'Predictive Business Process Monitoring Based on Multi-Modal Fusion and Multi-Task Learning',
    authors: [
      { name: 'Jiawei Chen' },
      { name: 'Jinhui Luo', isMe: true },
      { name: 'Guosheng Kang', isCoreContributor: true }
    ],
    venue: 'Applied Soft Computing',
    year: '2026',
    type: 'journal',
    status: 'under-review',
    ranking: 'SCI 2 区 TOP / JCR Q1',
    image: '/images/publications/frameworks/mfml.png',
    topics: ['Multimodal learning', 'Predictive monitoring'],
    abstractZh: '以多模态融合和多任务优化共同建模语义、序列与属性特征。',
    abstractEn: 'A multimodal and multi-task framework jointly models semantic, sequential, and attribute features.',
    overviewZh: '本文将流程文本、事件序列和结构化属性作为互补模态，通过共享表示和任务特定解码器同时优化下一事件、时间和风险等预测目标。',
    overviewEn: 'We treat process text, event sequences, and structured attributes as complementary modalities, jointly optimizing next-event, time, and risk objectives with shared representations and task-specific decoders.',
    contributionZh: '我参与多模态输入设计、多任务损失配置和模型鲁棒性分析。',
    contributionEn: 'I contributed to multimodal input design, multi-task loss configuration, and robustness analysis.',
    links: []
  },
  {
    slug: 'rag-semantic-stories',
    titleZh: '结合检索增强生成与微调的下一活动预测语义故事',
    titleEn: 'Semantic Stories for Next Activity Prediction with Retrieval-Augmented Generation and Fine-Tuning',
    authors: [
      { name: 'Xinyao Yan' },
      { name: 'Jinhui Luo', isMe: true },
      { name: 'Jiayi Long' },
      { name: 'Guosheng Kang', isCoreContributor: true }
    ],
    venue: 'ICSS',
    year: '2026',
    type: 'conference',
    status: 'accepted',
    ranking: 'CCF C',
    image: '/images/publications/frameworks/rag.png',
    topics: ['Retrieval-augmented generation', 'Process mining'],
    abstractZh: '将事件日志组织为语义故事，检索历史上下文并引导大模型预测下一活动。',
    abstractEn: 'A retrieval-augmented semantic-story framework retrieves historical context to guide next-activity prediction.',
    overviewZh: '我们把历史轨迹转写为语义故事并建立向量索引，在预测时检索相似流程片段，再结合领域微调的大语言模型生成下一活动及其解释。',
    overviewEn: 'Historical traces are rewritten as semantic stories and indexed for retrieval; similar process fragments are combined with a domain-tuned language model to predict and explain the next activity.',
    contributionZh: '我参与检索语料构建、提示模板设计和生成结果的定量与定性评估。',
    contributionEn: 'I contributed to retrieval corpus construction, prompt template design, and quantitative and qualitative evaluation of generated predictions.',
    links: []
  }
]

export type LocalizedPublication = Omit<PublicationRecord, 'titleZh' | 'titleEn' | 'abstractZh' | 'abstractEn' | 'overviewZh' | 'overviewEn' | 'contributionZh' | 'contributionEn'> & {
  title: string
  abstract: string
  overview: string
  contribution: string
  detailHref: string
  detailLabel: string
}

export function getLocalizedPublications(locale: 'zh' | 'en'): LocalizedPublication[] {
  const prefix = locale === 'en' ? '/en' : ''
  return academicPublications.map((publication) => ({
    ...publication,
    title: locale === 'en' ? publication.titleEn : publication.titleZh,
    abstract: locale === 'en' ? publication.abstractEn : publication.abstractZh,
    overview: locale === 'en' ? publication.overviewEn : publication.overviewZh,
    contribution: locale === 'en' ? publication.contributionEn : publication.contributionZh,
    detailHref: `${prefix}/academic/${publication.slug}`,
    detailLabel: locale === 'en' ? 'Details' : '详情'
  }))
}

export function getPublication(slug: string): PublicationRecord | undefined {
  return academicPublications.find((publication) => publication.slug === slug)
}
