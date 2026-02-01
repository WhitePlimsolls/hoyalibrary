import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/hoyalibrary/',
  title: "Hoya's Blog",
  description: "Hoya's Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'iOS', link: '/ios/swift/basic' },
      { text: 'Flutter', link: '/flutter/dart-basics' },
      { text: 'Networking', link: '/networking/VLESS-REALITY' }
    ],

    sidebar: {
      // 当用户进入 /ios/ 目录时，显示这个侧边栏
      '/ios/': [
        {
          text: 'Swift 语言',
          collapsed: false, // 是否默认折叠
          items: [
            { text: '基础语法', link: '/ios/swift/basic' }, // 对应 docs/ios/swift/basic.md
            { text: '高级特性', link: '/ios/swift/advanced' }
          ]
        },
        {
          text: 'Objective-C',
          items: [
            { text: 'Runtime机制', link: '/ios/objective-c/runtime' }
          ]
        }
      ],

      // 当用户进入 /flutter/ 目录时，显示这个侧边栏
      '/flutter/': [
        {
          text: 'Dart 基础',
          items: [
            { text: '变量与类型', link: '/flutter/dart-basics' }
          ]
        },
        {
          text: 'UI 组件',
          items: [
            { text: '常用 Widget', link: '/flutter/widget' }
          ]
        }
      ],


      '/networking/': [
        {
          text: '科学上网',
          items: [
            { text: 'VLESS + REALITY', link: '/networking/VLESS-REALITY' }
          ]
        },
        {
          text: 'Others',
          items: [
            { text: '常用 Widget', link: '/flutter/widget' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
