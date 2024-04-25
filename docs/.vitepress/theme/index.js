import DefaultTheme from 'vitepress/theme'
import './index.css'
import Icon from './components/Icon.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Icon', Icon)
  },
}
