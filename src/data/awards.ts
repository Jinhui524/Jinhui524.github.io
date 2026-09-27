export type AwardLevel = 'National' | 'Provincial'

export interface AwardRecord {
  date: string
  titleZh: string
  titleEn: string
  level: AwardLevel
  categoryZh: string
  categoryEn: string
}

/**
 * A single source of truth for the awards shown on Academic and About pages.
 * Keep the dates in ISO-like display order so the lists stay easy to scan.
 */
export const awardRecords: AwardRecord[] = [
  {
    date: '2026.07.15',
    titleZh: '2026 睿抗机器人开发者大赛智海算法调优赛题',
    titleEn: '2026 RAICOM Robotics Developer Competition · Algorithm Optimization',
    level: 'National',
    categoryZh: '国家级二等奖',
    categoryEn: 'National Second Prize'
  },
  {
    date: '2026.07.28',
    titleZh: '第二十八届中国机器人及人工智能大赛',
    titleEn: '28th China Robot and Artificial Intelligence Competition',
    level: 'National',
    categoryZh: '国家级二等奖',
    categoryEn: 'National Second Prize'
  },
  {
    date: '2025.05.08',
    titleZh: '第七届传智杯全国 IT 技能大赛程序设计挑战赛',
    titleEn: '7th Chuanzhi Cup National IT Skills Competition · Programming Challenge',
    level: 'National',
    categoryZh: '国家级二等奖',
    categoryEn: 'National Second Prize'
  },
  {
    date: '2025.08.27',
    titleZh: '2025 睿抗机器人开发者大赛编程技能赛项',
    titleEn: '2025 RAICOM Robotics Developer Competition · Programming Skills',
    level: 'National',
    categoryZh: '国家级三等奖',
    categoryEn: 'National Third Prize'
  },
  {
    date: '2026.07.28',
    titleZh: '第二十八届中国机器人及人工智能大赛',
    titleEn: '28th China Robot and Artificial Intelligence Competition',
    level: 'National',
    categoryZh: '国家级三等奖',
    categoryEn: 'National Third Prize'
  },
  {
    date: '2025.11.02',
    titleZh: '湖南省第 21 届大学生计算机程序设计竞赛',
    titleEn: '21st Hunan Provincial Collegiate Programming Contest',
    level: 'Provincial',
    categoryZh: '省级一等奖',
    categoryEn: 'Provincial First Prize'
  },
  {
    date: '2026.06.12',
    titleZh: '第十九届中国大学生计算机设计大赛中南地区赛',
    titleEn: '19th China Collegiate Computer Design Competition · Central South Region',
    level: 'Provincial',
    categoryZh: '省级二等奖',
    categoryEn: 'Provincial Second Prize'
  },
  {
    date: '2025.05.26',
    titleZh: '第十六届蓝桥杯软件和信息技术专业人才大赛',
    titleEn: '16th Lanqiao Cup Software and Information Technology Competition',
    level: 'Provincial',
    categoryZh: '省级二等奖',
    categoryEn: 'Provincial Second Prize'
  },
  {
    date: '2026.06.22',
    titleZh: '2026 中国高校计算机大赛网络挑战赛华中地区',
    titleEn: '2026 China Collegiate Computer Contest · Network Challenge, Central China',
    level: 'Provincial',
    categoryZh: '省级三等奖',
    categoryEn: 'Provincial Third Prize'
  }
]

export type AwardLocale = 'zh' | 'en'

export interface LocalizedAward {
  date: string
  title: string
  level: AwardLevel
  category: string
}

export interface AwardGroup {
  level: AwardLevel
  title: string
  items: LocalizedAward[]
}

export function getLocalizedAwards(locale: AwardLocale): LocalizedAward[] {
  return awardRecords.map((award) => ({
    date: award.date,
    title: locale === 'zh' ? award.titleZh : award.titleEn,
    level: award.level,
    category: locale === 'zh' ? award.categoryZh : award.categoryEn
  }))
}

export function getAwardGroups(locale: AwardLocale): AwardGroup[] {
  const localizedAwards = getLocalizedAwards(locale)
  const groupTitles: Record<AwardLocale, Record<AwardLevel, string>> = {
    zh: { National: '国家级荣誉', Provincial: '省级荣誉' },
    en: { National: 'National Awards', Provincial: 'Provincial Awards' }
  }

  return (['National', 'Provincial'] as AwardLevel[]).map((level) => ({
    level,
    title: groupTitles[locale][level],
    items: localizedAwards.filter((award) => award.level === level)
  }))
}
