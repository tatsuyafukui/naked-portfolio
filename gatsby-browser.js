import './src/styles/global.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

export const onClientEntry = () => {
  config.autoAddCss = false
}
