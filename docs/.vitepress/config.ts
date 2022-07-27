export default ({
  lang: 'en-US',
  title: 'TWIL',
  description: 'Today What I Learned',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/Q&A/': sidebarQA(),
      '/utils/': sidebarUtils(),
      '/css/': sidebarCSS(),
      '/book/': sidebarBook(),
      '/other/': sidebarOther(),
      '/JavaScript/':sidebarJS(),
      '/components/':sidebarComponents()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hazel-Lin/TWIL' }
    ],

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },
  }
})

function nav() {
  return [
    { text: 'Q&A', link: '/Q&A/README', activeMatch: '/Q&A/' },
    { text: 'Utils', link: '/utils/README', activeMatch: '/utils/' },
    { text: 'Book', link: '/book/README', activeMatch: '/book/' },
    { text: 'Other', link: '/other/README', activeMatch: '/other/' },
    { text: 'JavaScript', link: '/JavaScript/README', activeMatch: '/JavaScript/' },
    { text: 'Components', link: '/components/README', activeMatch: '/components/' },
    { text: 'CSS', link: '/css/README', activeMatch: '/css/' },
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
function sidebarUtils() {
  return [
   
    {
      text: '业务处理逻辑',
      collapsible: true,
      items: [
        { text: '按钮强制失焦', link: '/utils/按钮强制失焦' },
        { text: '导出功能', link: '/utils/导出功能' },
        { text: '导入功能', link: '/utils/导入功能' },
        { text: '动画函数', link: '/utils/动画函数' },
        { text: '获取富文本的字数长度', link: '/utils/获取富文本的字数长度' },
        { text: '清除input框样式', link: '/utils/清除input框样式' },
        { text: '清空重置', link: '/utils/清空重置' },
        { text: '数据删除', link: '/utils/数据删除' },
        { text: '数字三位逗号分隔', link: '/utils/数字三位逗号分隔' },
        { text: '图片预览', link: '/utils/图片预览' },
        { text: '脱敏处理', link: '/utils/脱敏处理' },
        { text: '校验封装', link: '/utils/校验封装' },
        { text: '校验失效', link: '/utils/校验失效' },
        { text: '修改下载文件名称', link: '/utils/修改下载文件名称' },
        { text: '对象如何使用变量作为key', link: '/utils/对象如何使用变量作为key' },
        { text: '数组包含', link: '/utils/数组包含' },
        { text: '数组判断', link: '/utils/数组判断' },
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

function sidebarCSS() {
  return [
    {
      text: 'CSS',
      collapsible: true,
      items: [
        { text: 'css文字超出处理', link: '/css/css文字超出处理' },
      ]
    },
  ]
}
