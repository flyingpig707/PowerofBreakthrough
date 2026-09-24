import DefaultTheme from 'vitepress/theme'
import BreakthroughHome from './BreakthroughHome.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BreakthroughHome', BreakthroughHome)
  },
}
