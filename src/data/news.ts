export interface NewsItem {
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
    date: '2026.06',
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
    date: '2026.03',
    emoji: '🌱',
    statusZh: '新阶段',
    statusEn: 'Incoming',
    titleZh: '即将进入东南大学计算机科学与工程学院，开展图数据与智能系统研究。',
    titleEn: 'Incoming at Southeast University’s School of Computer Science and Engineering to study graph data and intelligent systems.',
    href: 'https://cse.seu.edu.cn/',
    labelZh: '东南大学计算机学院',
    labelEn: 'SEU CSE'
  },
  {
    date: '2025.09',
    emoji: '🔬',
    statusZh: '实验室',
    statusEn: 'Research',
    titleZh: '在湖南省服务计算与软件服务新技术重点实验室参与本科生科研。',
    titleEn: 'Joined the Hunan Provincial Key Laboratory of Service Computing and New Software Technology as a student researcher.',
    href: 'https://guoshengkang.github.io/',
    labelZh: '实验室主页',
    labelEn: 'Lab page'
  },
  {
    date: '2024.09',
    emoji: '🧭',
    statusZh: '研究起点',
    statusEn: 'Started',
    titleZh: '开始系统学习图数据挖掘与事件序列预测。',
    titleEn: 'Started a focused study of graph mining and event sequence prediction.',
    href: 'https://computer.hnust.edu.cn/',
    labelZh: '本科院系',
    labelEn: 'Department'
  }
]

