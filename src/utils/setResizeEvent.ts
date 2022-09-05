import { InnerOptions } from '../types'
import update from './update'

/**
 * 设置 resize 事件
 */
export default function setResizeEvent(options: InnerOptions) {
  window.addEventListener('resize', () => {
    update(options)
  })
}
