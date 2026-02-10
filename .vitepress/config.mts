import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Helper to get sidebar items recursively
function getSidebarItems(dirPath: string, relativePath: string) {
  if (!fs.existsSync(dirPath)) return []
  const files = fs.readdirSync(dirPath).sort()
  const items = []

  files.forEach(file => {
    if (file.startsWith('.') || file === 'index.md') return
    const fullPath = path.join(dirPath, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      const children = getSidebarItems(fullPath, `${relativePath}/${file}`)
      if (children.length > 0) {
        items.push({
          text: file.charAt(0).toUpperCase() + file.slice(1),
          collapsed: false,
          items: children
        })
      }
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8')
      const match = content.match(/^---\n[\s\S]*?title:\s*(.*?)\n[\s\S]*?---/)
      const title = match ? match[1].trim().replace(/^['"](.*)['"]$/, '$1') : file.replace('.md', '')

      items.push({
        text: title,
        link: `/${relativePath}/${file.replace('.md', '')}`
      })
    }
  })
  return items
}

// Generate the full sidebar object
function generateSidebar() {
  const libraryDir = path.resolve(__dirname, '../library')
  if (!fs.existsSync(libraryDir)) return {}

  const categories = fs.readdirSync(libraryDir).filter(f => {
    if (f.startsWith('.')) return false
    return fs.statSync(path.join(libraryDir, f)).isDirectory()
  })

  const sidebar = {}
  categories.forEach(cat => {
    sidebar[`/library/${cat}/`] = getSidebarItems(
      path.join(libraryDir, cat),
      `library/${cat}`
    )
  })

  return sidebar
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/hoyalibrary/',
  title: "Hoya's Library",
  description: "Hoya's Library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'iOS', link: '/library/ios/index' },
      { text: 'Flutter', link: '/library/flutter/environment-setup' },
      { text: 'Server', link: '/library/server/ssh-public-key-login' },
      { text: 'Networking', link: '/library/networking/vless-reality' },
      { text: 'Jailbreak', link: '/library/jailbreak/index' },
      { text: 'company', link: '/library/company/tax-filing' },
      { text: 'photoshop', link: '/library/photoshop/index' },
      { text: 'explore', link: '/library/explore/index' }
    ],

    // Dynamically generated sidebar
    sidebar: generateSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
