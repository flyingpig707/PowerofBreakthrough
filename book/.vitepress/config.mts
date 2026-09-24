import { defineConfig } from 'vitepress'

const chapter = (text: string, file: string) => ({
  text,
  link: `/${encodeURIComponent(file)}`,
})

export default defineConfig({
  lang: 'zh-CN',
  title: '破圈力',
  titleTemplate: ':title｜破圈力',
  description: '《破圈力》——让城市被AI看见。任国刚、吴鹏著。',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://breakthrough.learn-together.cn',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#174fbd' }],
    ['meta', { property: 'og:type', content: 'book' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: '破圈力' }],
  ],
  themeConfig: {
    siteTitle: '破圈力',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/01-前言%20破圈缘起' },
      { text: '共同写作', link: '/#coauthor' },
      { text: '全书目录', link: '/00-封面' },
    ],
    sidebar: [
      {
        text: '开篇',
        items: [
          chapter('全书目录', '00-封面'),
          chapter('前言 破圈缘起', '01-前言 破圈缘起'),
        ],
      },
      {
        text: '上篇 重新理解破圈',
        items: [
          chapter('上篇导论', '02-上篇导论'),
          chapter('第一章 失效之警', '03-失效之警'),
          chapter('第二章 破圈之力', '04-破圈之力'),
          chapter('第三章 破圈演进', '05-破圈演进'),
        ],
      },
      {
        text: '中篇 建设四种能力',
        items: [
          chapter('中篇导论', '06-中篇导论'),
          chapter('第四章 感知之力', '07-感知之力'),
          chapter('第五章 生成之力', '08-生成之力'),
          chapter('第六章 连接之力', '09-连接之力'),
          chapter('第七章 进化之力', '10-进化之力'),
        ],
      },
      {
        text: '下篇 从能力走向生态',
        items: [
          chapter('下篇导论', '11-下篇导论'),
          chapter('第八章 组织之基', '12-组织之基'),
          chapter('第九章 评估之尺', '13-评估之尺'),
          chapter('第十章 生态之境', '14-生态之境'),
        ],
      },
      {
        text: '收束与工具',
        items: [
          chapter('结语 认知归途', '15-结语 认知归途'),
          chapter('附录', '16-附录'),
        ],
      },
    ],
    outline: {
      level: [2, 3],
      label: '本页目录',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索全书',
            buttonAriaLabel: '搜索全书',
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short',
      },
    },
    editLink: {
      pattern: '/#coauthor',
      text: '用 Agent 参与共同写作',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/flyingpig707/PowerofBreakthrough' },
    ],
    footer: {
      message: '让城市从偶然出圈走向持续生长',
      copyright: '任国刚、吴鹏',
    },
  },
})
