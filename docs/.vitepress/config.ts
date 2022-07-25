export default ({
  lang: 'en-US',
  title: 'TWIL',
  description: 'Today What I Learned',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/Q&A/': sidebarQA(),
      '/BLL/': sidebarBLL(),
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
      '/book/': sidebarBook(),
      '/other/': sidebarOther(),
      '/JavaScript/':sidebarJS(),
      '/components/':sidebarComponents()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hazel-Lin/TWIL' }
    ],

    footer: {
      // message: 'Released under the MIT License.',
      // copyright: 'Copyright © 2019-present Evan You'
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },
    
    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // }
  }
})

function nav() {
  return [
    { text: 'Q&A', link: '/Q&A/README', activeMatch: '/Q&A/' },
    { text: 'BLL', link: '/BLL/README', activeMatch: '/BLL/' },
    { text: 'Book', link: '/book/README', activeMatch: '/book/' },
    { text: 'Other', link: '/other/README', activeMatch: '/other/' },
    { text: 'JavaScript', link: '/JavaScript/README', activeMatch: '/JavaScript/' },
    { text: 'Components', link: '/components/README', activeMatch: '/components/' },


  ]
}
function sidebarComponents(){
  return [
    {
      text: 'Components',
      collapsible: true,
      items: [
        { text: '删除按钮', link: '/components/deleteBtn/README' },
        { text: '上传组件', link: '/components/upload/README' },
      ]
    }
  ]
}
function sidebarJS(){
  return [
    {
      text: 'JavaScript',
      collapsible: true,
      items: [
        { text: '对象如何使用变量作为key', link: '/JavaScript/对象如何使用变量作为key' },
        { text: '程序员软技能', link: '/JavaScript/数组包含' },
        { text: '代码优化上的思考', link: '/JavaScript/数组判断' },
      ]
    }
  ]
}
function sidebarOther(){
  return [
    {
      text: '其他分享',
      collapsible: true,
      items: [
        { text: '编程思想的思考', link: '/other/思考/编程思想的思考' },
        { text: '程序员软技能', link: '/other/思考/程序员软技能' },
        { text: '代码优化上的思考', link: '/other/思考/代码优化上的思考' },
      ]
    }
  ]
}
function sidebarBook(){
  return [
    {
      text: 'Book',
      collapsible: true,
      items: [
        { text: '暗时间', link: '/book/暗时间' },
        { text: '代码整洁之道', link: '/book/代码整洁之道' },
      ]
    }
  ]
}
function sidebarBLL() {
  return [
   
    {
      text: '业务处理逻辑',
      collapsible: true,
      items: [
        { text: '按钮强制失焦', link: '/BLL/按钮强制失焦' },
        { text: '导出功能', link: '/BLL/导出功能' },
        { text: '导入功能', link: '/BLL/导入功能' },
        { text: '动画函数', link: '/BLL/动画函数' },
        { text: '获取富文本的字数长度', link: '/BLL/获取富文本的字数长度' },
        { text: '清除input框样式', link: '/BLL/清除input框样式' },
        { text: '清空重置', link: '/BLL/清空重置' },
        { text: '数据删除', link: '/BLL/数据删除' },
        { text: '数字三位逗号分隔', link: '/BLL/数字三位逗号分隔' },
        { text: '图片预览', link: '/BLL/图片预览' },
        { text: '脱敏处理', link: '/BLL/脱敏处理' },
        { text: '校验封装', link: '/BLL/校验封装' },
        { text: '校验失效', link: '/BLL/校验失效' },
        { text: '修改下载文件名称', link: '/BLL/修改下载文件名称' },
      ]
    },
  ]
}

function sidebarQA() {
  return [
   
    {
      text: '构建&运行',
      collapsible: true,
      items: [
        { text: '构建', link: '/Q&A/构建' },
        { text: 'vite热更遇到的问题', link: '/Q&A/vite热更遇到的问题' },
      ]
    },
    {
      text: '路由',
      collapsible: true,
      items: [
        { text: '路由配置', link: '/Q&A/路由配置' },
        { text: '路由跳转', link: '/Q&A/路由跳转' },
      ]
    },
    {
      text: 'Vue',
      collapsible: true,
      items: [
        { text: '组件通信', link: '/Q&A/组件通信' },
      ]
    },
    {
      text: '小程序',
      collapsible: true,
      items: [
        { text: '小程序-getLocation', link: '/Q&A/小程序-getLocation' },
      ]
    },
    {
      text: 'TypeScript',
      collapsible: true,
      items: [
        { text: 'ts配置', link: '/Q&A/TypeScript/ts配置' },
      ]
    },
    {
      text: '其他',
      collapsible: true,
      items: [
        { text: 'code-standard', link: '/Q&A/code-standard' },
        { text: 'form表单校验', link: '/Q&A/form表单校验' },

      ]
    },
   
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Home Page', link: '/guide/theme-home-page' },
        { text: 'Team Page', link: '/guide/theme-team-page' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}
