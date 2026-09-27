import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from './types'

export const theme: ThemeUserConfig = {
  title: 'Jinhui Luo · 罗锦辉',
  author: '罗锦辉',
  author_en: 'Jinhui Luo',
  description:
    '罗锦辉的学术主页，关注图数据挖掘、图神经网络、大语言模型、智能体与事件序列预测。',
  description_en:
    'Academic homepage of Jinhui Luo, working on graph mining, graph neural networks, foundation models, agents, and event sequence prediction.',
  favicon: '/favicon/favicon.ico',
  locale: {
    lang: 'zh-CN',
    attrs: 'zh_CN',
    dateLocale: 'zh-CN',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  logo: {
    src: 'src/assets/avatar.png',
    alt: 'Jinhui Luo'
  },
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',
  head: [],
  customCss: [],
  header: {
    menu: [
      { title: 'Blog', link: '/blog/research' },
      { title: 'Academic', link: '/academic' },
      { title: 'Projects', link: '/projects' },
      { title: 'Links', link: '/links' },
      { title: 'About', link: '/about' }
    ]
  },
  footer: {
    registration: {},
    credits: true,
    social: {
      github: 'https://github.com/Jinhui524/Jinhui524.github.io'
    }
  },
  content: {
    externalLinksContent: ' ↗',
    blogPageSize: 15,
    externalLinkArrow: true,
    share: []
  },
  personal: {
    location: 'Hunan, China',
    githubUsername: 'Jinhui524',
    email: 'Luojh0524@163.com',
    googleScholar: 'https://scholar.google.com/',
    blogStartDate: '2026-04-14',
    domains: {
      main: 'jinhui524.github.io',
      githubPages: 'jinhui524.github.io'
    }
  }
}

export const integ: IntegrationUserConfig = {
  links: {
    logbook: [],
    applyTip: [
      { name: 'Name', val: theme.title },
      { name: 'Desc', val: theme.description || '' },
      { name: 'Link', val: 'https://jinhui524.github.io' },
      { name: 'Avatar', val: 'https://jinhui524.github.io/avatar/avatar.png' }
    ]
  },
  pagefind: true,
  quote: {
    server:
      'data:application/json,%5B%7B%22content%22%3A%22Learning%20structured%20intelligence%20from%20graphs%20and%20event%20sequences.%22%7D%5D',
    target: '(data) => data[0].content'
  },
  typography: {
    class: 'break-words prose prose-axi dark:prose-invert dark:prose-axi prose-headings:font-medium'
  },
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: { className: 'zoomable' }
  },
  waline: {
    enable: false,
    server: undefined,
    emoji: [],
    additionalConfigs: {}
  }
}

export const terms: CardListData = {
  title: 'Site policy',
  list: [
    { title: 'Privacy Policy', link: '/terms/privacy-policy' },
    { title: 'Terms and Conditions', link: '/terms/terms-and-conditions' },
    { title: 'Copyright', link: '/terms/copyright' },
    { title: 'Disclaimer', link: '/terms/disclaimer' }
  ]
}

const config = { ...theme, integ } as Config
export default config
