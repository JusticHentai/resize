import { InnerOptions } from '../types'
import getCurrentPreset from './getCurrentPreset'
import getCurrentRatio from './getCurrentRatio'
import handleCb from './handleCb'
import setRemSize from './setRemSize'

export default function update(options: InnerOptions) {
  const { resizePreset, resizeType } = options

  // 获取当前屏幕状态的预设
  const preset = getCurrentPreset(resizePreset)

  // 获取当前适配比率
  const ratio = getCurrentRatio({
    preset,
    resizeType,
  })

  // 设置适配比率
  setRemSize(ratio)

  // 执行回调函数
  handleCb(options)
}
