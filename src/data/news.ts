export interface NewsItem {
  id: string
  date: string
  emoji: string
  statusZh: string
  statusEn: string
  titleZh: string
  titleEn: string
  href?: string
  labelZh?: string
  labelEn?: string
}

/**
 * Short, high-signal updates shared by the Chinese and English home pages.
 * Keep these entries factual and link only to pages that contain useful context.
 */
export const newsItems: NewsItem[] = [
  {
    id: 'seu-cse-incoming',
    date: '2026.09',
    emoji: '🌱',
    statusZh: '新阶段',
    statusEn: 'Incoming',
    titleZh: '即将加入东南大学计算机科学与工程学院，继续开展图数据与智能系统研究。',
    titleEn: 'Incoming at Southeast University’s School of Computer Science and Engineering to continue research on graph data and intelligent systems.',
    href: 'https://cse.seu.edu.cn/',
    labelZh: '东南大学计算机学院',
    labelEn: 'SEU CSE'
  },
  {
    id: 'wise-accepted',
    date: '2026.08',
    emoji: '🎉',
    statusZh: '论文接收',
    statusEn: 'Accepted',
    titleZh: 'LLM4PPM 被 WISE 2026 接收，继续探索可迁移的流程语义学习。',
    titleEn: 'LLM4PPM was accepted to WISE 2026, extending transferable process semantics.',
    href: '/academic/llm4ppm',
    labelZh: '查看论文',
    labelEn: 'View paper'
  },
  {
    id: 'icss-accepted',
    date: '2026.05',
    emoji: '🎉',
    statusZh: '论文接收',
    statusEn: 'Accepted',
    titleZh: 'SAR-FT 被 ICSS 录用，探索检索增强生成与流程语义故事。',
    titleEn: 'SAR-FT was accepted to ICSS, exploring retrieval-augmented process semantic stories.',
    href: '/academic/sarft',
    labelZh: '查看论文',
    labelEn: 'View paper'
  },
  {
    id: 'ijcnn-accepted',
    date: '2026.03',
    emoji: '🎉',
    statusZh: '论文接收',
    statusEn: 'Accepted',
    titleZh: 'FHGSN 被 IJCNN 录用，继续研究异构图序列融合与下一活动预测。',
    titleEn: 'FHGSN was accepted to IJCNN, advancing heterogeneous graph-sequence fusion for next-activity prediction.',
    href: '/academic/fhgsn',
    labelZh: '查看论文',
    labelEn: 'View paper'
  },
  {
    id: 'cscwd-accepted',
    date: '2026.01',
    emoji: '🎉',
    statusZh: '论文录用',
    statusEn: 'Accepted',
    titleZh: '图与序列对齐论文被 CSCWD 录用，探索对比学习在下一事件预测中的应用。',
    titleEn: 'Our graph-sequence alignment paper was accepted to CSCWD for next-event prediction.',
    href: '/academic/aligning-graphs',
    labelZh: '查看论文',
    labelEn: 'View paper'
  },
  {
    id: 'cims-published',
    date: '2026.01',
    emoji: '📄',
    statusZh: '论文发布',
    statusEn: 'Published',
    titleZh: '第一篇计算机集成制造系统论文发布，关注事件序列与属性关联语义。',
    titleEn: 'Our first CIMS paper was published on event-sequence and attribute-association semantics.',
    href: '/academic/cims-semantic-fusion',
    labelZh: '查看论文',
    labelEn: 'View paper'
  },
  {
    id: 'lab-started',
    date: '2025.05',
    emoji: '🔬',
    statusZh: '加入实验室',
    statusEn: 'Joined lab',
    titleZh: '加入湖南省服务计算与软件服务新技术重点实验室，开始本科生科研。',
    titleEn: 'Joined the Hunan Provincial Key Laboratory of Service Computing and Software Service Technology as a student researcher.',
    href: 'https://guoshengkang.github.io/',
    labelZh: '实验室主页',
    labelEn: 'Lab page'
  }
]
