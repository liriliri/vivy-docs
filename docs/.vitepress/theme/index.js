import DefaultTheme from 'vitepress/theme'
import 'luna-shader-toy-player/css'
import './index.css'
import Icon from './components/Icon.vue'
import Download from './components/Download.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Icon', Icon)
    app.component('Download', Download)
  },
}
