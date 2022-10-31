import { debounce } from '@justichentai/math'
import { InnerOptions } from '../types'
import update from './update'

/**
 * 设置 resize 事件
 */
export default function setResizeEvent(options: InnerOptions) {
  const myUpdate = debounce({
    cb: update,
    duration: 500,
  })

  window.addEventListener('resize', () => {
    myUpdate(options)
  })
}
