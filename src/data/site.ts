export type Locale = 'zh' | 'en';

export const profile = {
  name: 'Jinhui Luo',
  nameZh: '罗锦辉',
  role: { zh: '东南大学硕士阶段（研0） · 湖南科技大学大四', en: 'Graduate student at Southeast University · Senior at HNUST' },
  motto: { zh: '从图数据与事件序列中学习结构化智能。', en: 'Learning structured intelligence from graphs and event sequences.' },
  bio: {
    zh: '你好，我是罗锦辉，目前是湖南科技大学大四学生，并进入东南大学硕士阶段（研0）。我的研究聚焦图数据挖掘、图神经网络、大语言模型、Agent 与事件序列预测。',
    en: 'Hi, I am Jinhui Luo, currently a senior at Hunan University of Science and Technology and a graduate student at Southeast University. I work on graph data mining, graph neural networks, large language models, AI agents, and event sequence prediction.',
  },
  location: { zh: '中国 · 湖南', en: 'Hunan, China' },
  affiliation: 'Hunan University of Science and Technology',
  affiliationZh: '湖南科技大学',
  graduateAffiliation: 'Southeast University',
  graduateAffiliationZh: '东南大学',
  lab: 'Hunan Provincial Key Laboratory of Service Computing and New Software Technology',
  labZh: '湖南省服务计算与软件服务新技术重点实验室',
  email: 'Luojh0524@163.com',
  github: 'https://github.com/Jinhui524',
  scholar: 'https://scholar.google.com/',
  university: 'https://www.hnust.edu.cn/',
  avatar: '/images/kiyana.jpg',
};

export const navItems = [
  { href: '/', zh: '首页', en: 'Home' },
  { href: '/all/', zh: '全部', en: 'All' },
  { href: '/research/', zh: '研究', en: 'Research' },
  { href: '/technical/', zh: '技术', en: 'Technical' },
  { href: '/academic/', zh: '学术', en: 'Academic' },
  { href: '/projects/', zh: '项目', en: 'Projects' },
  { href: '/links/', zh: '链接', en: 'Links' },
  { href: '/about/', zh: '关于', en: 'About' },
  { href: '/search/', zh: '搜索', en: 'Search' },
];

export const researchInterests = [
  { zh: '图数据挖掘', en: 'Graph Data Mining' },
  { zh: '图神经网络', en: 'Graph Neural Networks' },
  { zh: '大语言模型', en: 'Large Language Models' },
  { zh: '智能体 Agent', en: 'AI Agents' },
  { zh: '事件序列预测', en: 'Event Sequence Prediction' },
  { zh: '结构化语义建模', en: 'Structured Semantic Modeling' },
];

export const education = [
  {
    period: '研0 · 2026',
    title: { zh: '东南大学 · 硕士阶段', en: 'Southeast University · Graduate stage' },
    detail: { zh: '东南大学研0，研究方向聚焦图数据与智能系统', en: 'Graduate student, focusing on graph data and intelligent systems' },
    link: 'https://www.seu.edu.cn/',
  },
  {
    period: '2023 — 2027',
    title: { zh: '湖南科技大学 · 数据科学与大数据技术', en: 'Hunan University of Science and Technology · Data Science and Big Data Technology' },
    detail: { zh: '计算机科学与工程学院，本科在读', en: 'School of Computer Science and Engineering · Undergraduate' },
    link: 'https://computer.hnust.edu.cn/',
  },
  {
    period: '2024 — 至今',
    title: { zh: '湖南省服务计算与软件服务新技术重点实验室', en: 'Hunan Provincial Key Laboratory of Service Computing and New Software Technology' },
    detail: { zh: '本科生研究成员，导师：康国胜教授', en: 'Undergraduate research member · Advisor: Prof. Guosheng Kang' },
    link: 'https://guoshengkang.github.io/',
  },
];

export const awards = [
  { level: 'National', zh: '第七届传智杯全国 IT 技能大赛编程挑战赛二等奖', en: 'Second Prize, 7th Chuanzhi Cup National IT Skills Competition' },
  { level: 'National', zh: '2025 RAICOM 机器人开发者大赛编程技能赛道三等奖', en: 'Third Prize, 2025 RAICOM Robotics Developer Competition' },
  { level: 'Provincial', zh: '2026 RAICOM 机器人开发者大赛智海算法优化赛道一等奖', en: 'First Prize, 2026 RAICOM Robotics Developer Competition' },
  { level: 'Provincial', zh: '第二十八届中国机器人及人工智能大赛湖南赛区一等奖', en: 'First Prize, 28th China Robot and Artificial Intelligence Competition' },
  { level: 'Provincial', zh: '第二十一届湖南省大学生程序设计竞赛一等奖', en: 'First Prize, 21st Hunan Provincial Collegiate Programming Contest' },
  { level: 'Provincial', zh: '第十六届蓝桥杯软件和信息技术人才大赛二等奖', en: 'Second Prize, 16th Lanqiao Cup Software and Information Technology Competition' },
];

export const stats = [
  { value: '06', zh: '篇论文/稿件', en: 'research outputs' },
  { value: '01', zh: '个重点项目', en: 'featured project' },
  { value: '06', zh: '个研究方向', en: 'research areas' },
  { value: '2027', zh: '预计毕业', en: 'expected graduation' },
];

export const quickLinks = [
  { label: 'GitHub', href: profile.github, icon: '↗', note: { zh: '代码与开源项目', en: 'Code and open source' } },
  { label: 'Email', href: `mailto:${profile.email}`, icon: '@', note: { zh: '欢迎学术交流', en: 'For academic contact' } },
  { label: 'Scholar', href: profile.scholar, icon: 'S', note: { zh: '论文与引用', en: 'Papers and citations' } },
];

export const linkGroups = [
  {
    title: { zh: '学术入口', en: 'Academic' },
    items: [
      { name: 'HNUST', description: { zh: '湖南科技大学', en: 'Hunan University of Science and Technology' }, href: profile.university },
      { name: 'Service Computing Lab', description: { zh: '服务计算与软件服务新技术重点实验室', en: 'Service computing and software service lab' }, href: 'https://guoshengkang.github.io/' },
      { name: 'Google Scholar', description: { zh: '论文与引用信息', en: 'Publications and citations' }, href: profile.scholar },
    ],
  },
  {
    title: { zh: '开发与学习', en: 'Build & Learn' },
    items: [
      { name: 'GitHub', description: { zh: '实验代码与项目归档', en: 'Experiments and projects' }, href: profile.github },
      { name: 'AI Notes', description: { zh: '人工智能学习路线与笔记', en: 'AI roadmap and reading notes' }, href: '/notes/' },
      { name: 'Academic Pages', description: { zh: '原主页的学术模板来源', en: 'The original academic template' }, href: 'https://github.com/academicpages/academicpages.github.io' },
    ],
  },
];

export const i18n = {
  zh: {
    language: '中文',
    switchLanguage: 'English',
    menu: '菜单',
    close: '关闭',
    introEyebrow: 'Graph Learning · LLMs · Agents · Event Sequences',
    aboutTitle: '关于我',
    researchTitle: '研究方向',
    educationTitle: '教育与经历',
    selectedPubs: '代表性论文',
    selectedProjects: '代表性项目',
    allTitle: '全部内容',
    technicalTitle: '技术笔记',
    academicTitle: '学术成果',
    searchTitle: '站内搜索',
    awardsTitle: '荣誉与竞赛',
    statsTitle: '研究轨迹',
    noteTitle: '研究随笔',
    linksTitle: '快速入口',
    viewAll: '查看全部',
    readMore: '阅读详情',
    paperStatus: '状态',
    contribution: '我的贡献',
    overview: '研究概览',
    all: '全部',
    back: '返回',
    contact: '联系我',
    updated: '持续更新中',
    footer: '用 Astro 构建 · 图学习、智能体与事件序列',
  },
  en: {
    language: 'English',
    switchLanguage: '中文',
    menu: 'Menu',
    close: 'Close',
    introEyebrow: 'Graph Learning · LLMs · Agents · Event Sequences',
    aboutTitle: 'About',
    researchTitle: 'Research interests',
    educationTitle: 'Education & experience',
    selectedPubs: 'Selected publications',
    selectedProjects: 'Selected project',
    allTitle: 'All content',
    technicalTitle: 'Technical notes',
    academicTitle: 'Academic output',
    searchTitle: 'Search',
    awardsTitle: 'Awards & recognition',
    statsTitle: 'Research in numbers',
    noteTitle: 'Research note',
    linksTitle: 'Quick links',
    viewAll: 'View all',
    readMore: 'Read more',
    paperStatus: 'Status',
    contribution: 'My contribution',
    overview: 'Overview',
    all: 'All',
    back: 'Back',
    contact: 'Contact',
    updated: 'Always evolving',
    footer: 'Built with Astro · graphs, agents, and event sequences',
  },
} as const;
