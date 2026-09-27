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
      { name: 'Guosheng Kang', isCoreContributor: true },
      { name: 'Yiping Wen' },
      { name: 'Buqing Cao' }
    ],
    venue: 'WISE',
    year: '2026',
    type: 'conference',
    status: 'accepted',
    ranking: 'CCF B',
    image: '/images/publications/frameworks/llm4ppm.png',
    topics: ['Process intelligence', 'Large language models'],
    abstractZh: '使用大语言模型学习可迁移流程语义，支持下一活动、剩余时间和结果预测。',
    abstractEn: 'A foundation-model framework for transferable process semantics and multi-task predictive process monitoring.',
    overviewZh: '本文提出 LLM4PPM，将事件日志转换为语义故事，通过持续预训练与 LoRA 指令微调构建面向多领域的流程基础模型，并支持下一活动、剩余时间和结果预测。',
    overviewEn: 'LLM4PPM transforms event logs into semantic stories and builds a cross-domain process foundation model through continuous pre-training and LoRA instruction tuning. It supports next-activity, remaining-time, and outcome prediction.',
    contributionZh: '我整理了 13 个结构化事件日志数据集，完成语义故事语料构建，实施持续预训练与 LoRA 多任务微调，并负责实验设计和论文撰写。',
    contributionEn: 'I standardized 13 structured event-log datasets, built the semantic-story corpus, implemented continuous pre-training and LoRA multi-task tuning, and led the experiments and paper writing.',
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
      { name: 'Guosheng Kang', isCoreContributor: true },
      { name: 'Ye Cao' },
      { name: 'Xinci Qiu' }
    ],
    venue: 'IJCNN',
    year: '2026',
    type: 'conference',
    status: 'accepted',
    ranking: 'CCF C',
    image: '/images/publications/frameworks/fhgsn.png',
    topics: ['Graph neural networks', 'Next activity prediction'],
    abstractZh: '通过异构图与序列融合，同时建模交互频率和上下文依赖。',
    abstractEn: 'A graph-sequence fusion network that jointly learns structural dependencies and temporal dynamics.',
    overviewZh: 'FHGSN 构建事件日志异构图，并通过两阶段 GraphSAGE 聚合机制融合交互频率与上下文依赖，用于下一活动预测。',
    overviewEn: 'FHGSN constructs a heterogeneous event-log graph and uses a two-stage GraphSAGE representation framework to capture interaction frequency and contextual dependency for next-activity prediction.',
    contributionZh: '我提出事件日志异构图构建策略，设计两阶段 GraphSAGE 表征框架，完成实验设计和论文撰写。',
    contributionEn: 'I proposed the heterogeneous graph construction strategy, designed the two-stage GraphSAGE framework, and completed the experiments and manuscript.',
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
      { name: 'Guosheng Kang', isCoreContributor: true },
      { name: 'Lifeng Yang' },
      { name: 'Wen Li' },
      { name: 'Jiayan Xiang' }
    ],
    venue: 'CSCWD',
    year: '2026',
    type: 'conference',
    status: 'accepted',
    ranking: 'CCF C',
    image: '/images/publications/frameworks/gsca.png',
    topics: ['Contrastive learning', 'Graph-sequence fusion'],
    abstractZh: '通过对比学习让流程图结构表征与事件序列表征互相增强。',
    abstractEn: 'A contrastive graph-sequence alignment framework for next-event prediction.',
    overviewZh: '本文研究流程拓扑和事件序列的对齐问题，通过对比学习让结构信息与长程依赖互相强化。',
    overviewEn: 'This work aligns process topology and event sequences with contrastive learning so that structural information and long-range dependencies reinforce each other.',
    contributionZh: '我负责 DFG 构建和 GCN 图表征学习模块，参与对比学习框架、实验设计和论文写作。',
    contributionEn: 'I designed the DFG construction and GCN graph representation modules, and contributed to the contrastive framework, experiments, and writing.',
    links: []
  },
  {
    slug: 'cims-semantic-fusion',
    titleZh: '融合事件序列语义与属性关联语义的业务流程下一事件预测',
    titleEn: 'Next Event Prediction by Fusing Event-Sequence and Attribute-Association Semantics',
    authors: [
      { name: 'Jiawei Chen' },
      { name: 'Jinhui Luo', isMe: true },
      { name: 'Guosheng Kang', isCoreContributor: true },
      { name: 'Yingbo Liu' },
      { name: 'Jianxun Liu' }
    ],
    venue: '计算机集成制造系统',
    year: '2026',
    type: 'journal',
    status: 'accepted',
    ranking: '中文核心 / CNKI Q1',
    image: '/images/publications/frameworks/sa4nap.png',
    topics: ['Event sequences', 'Semantic modeling'],
    abstractZh: '融合事件序列语义与属性关联语义，提升业务流程下一事件预测。',
    abstractEn: 'Fusing event-sequence semantics and attribute-association semantics for next-event prediction.',
    overviewZh: '本文结合 BERT 语义故事编码与事件属性关联建模，构建面向业务流程下一事件预测的语义融合方法。',
    overviewEn: 'The method combines BERT-based semantic-story encoding with attribute-association modeling for next-event prediction in business processes.',
    contributionZh: '我实现 BERT 语义故事编码组件，负责实验设计并完成论文撰写。',
    contributionEn: 'I implemented the BERT semantic-story encoder, led the experiments, and wrote the manuscript.',
    links: []
  },
  {
    slug: 'mfml',
    titleZh: '基于多模态融合与多任务学习的预测性业务流程监控',
    titleEn: 'Predictive Business Process Monitoring Based on Multi-Modal Fusion and Multi-Task Learning',
    authors: [
      { name: 'Jiawei Chen' },
      { name: 'Jinhui Luo', isMe: true },
      { name: 'Guosheng Kang', isCoreContributor: true },
      { name: 'Jianxun Liu' },
      { name: 'Yiping Wen' },
      { name: 'Hangyu Cheng' },
      { name: 'Jun Peng' }
    ],
    venue: 'Applied Soft Computing',
    year: '2026',
    type: 'journal',
    status: 'under-review',
    ranking: 'SCI 2 区 TOP / JCR Q1',
    image: '/images/publications/frameworks/mfml.png',
    topics: ['Multimodal learning', 'Predictive monitoring'],
    abstractZh: '以多模态融合和多任务优化共同建模语义、序列与属性特征。',
    abstractEn: 'A multimodal and multi-task framework for semantic, sequential, and attribute-aware process monitoring.',
    overviewZh: 'MFML 通过语义、序列和属性分支进行多模态融合，并使用损失驱动的多任务学习优化下一活动、剩余时间和结果预测。',
    overviewEn: 'MFML couples semantic, sequential, and attribute-aware branches with loss-driven multi-task optimization for predictive business process monitoring.',
    contributionZh: '我实现 Hybrid Transformer-LSTM 序列编码器和 Residual CNN 属性建模分支，设计多任务学习框架，并参与实验与论文撰写。',
    contributionEn: 'I implemented the hybrid Transformer-LSTM sequence encoder and Residual CNN attribute branch, designed the multi-task objective, and contributed to the experiments and manuscript.',
    links: []
  },
  {
    slug: 'sarft',
    titleZh: '结合检索增强生成与微调的下一活动预测语义故事',
    titleEn: 'Semantic Stories for Next Activity Prediction with Retrieval-Augmented Generation and Fine-Tuning',
    authors: [
      { name: 'Xinyao Yan' },
      { name: 'Jinhui Luo', isMe: true },
      { name: 'Jiayi Long' },
      { name: 'Guosheng Kang', isCoreContributor: true },
      { name: 'Jianxun Liu' },
      { name: 'Yiping Wen' },
      { name: 'Xiaoxong Xiao' }
    ],
    venue: 'CCF International Conference on Service Science (ICSS)',
    year: '2026',
    type: 'conference',
    status: 'accepted',
    ranking: 'CCF C',
    image: '/images/publications/frameworks/rag.png',
    topics: ['Retrieval-augmented generation', 'Process mining'],
    abstractZh: '将事件日志组织为语义故事，以检索历史上下文并引导 LLM 预测下一活动。',
    abstractEn: 'A retrieval-augmented semantic-story framework for next-activity prediction.',
    overviewZh: 'SAR-FT 将事件日志组织成语义故事，检索历史上下文，并通过领域微调缓解通用大模型的幻觉问题。',
    overviewEn: 'SAR-FT organizes event logs into semantic stories, retrieves historical context, and adapts an LLM to reduce hallucination in next-activity prediction.',
    contributionZh: '我参与检索增强生成模块的设计，完成领域文献调研并参与论文修改。',
    contributionEn: 'I contributed to the retrieval-augmented generation module, domain literature review, and manuscript revision.',
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
