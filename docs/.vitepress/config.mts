import { defineConfig } from 'vitepress'
import md_task_list from 'markdown-it-task-lists'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/eom/',
  title: "Edge of Madness Wiki",
  description: "Development notes for EoM",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Major Pages',
        items: [
          { text: 'Core Feature List', link: 'dev/core-features'},
          { text: 'Player Journey', link: 'dev/player-journey'},
          { text: 'Aesthetics', link: 'dev/aesthetics'},
          { text: 'Relic Abilities', link: 'dev/relic-abilities'},
          { text: 'Roadmap', link: 'dev/roadmap'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nickworks/Edge2-Wiki' }
    ],

    search: {
      provider: 'local'
    }
  },
  markdown: {
    config: (md) => {
        md.use(md_task_list)
    }
  }
})
