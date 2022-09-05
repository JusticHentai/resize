import Merge from './Merge'

/**
 * 初始化选项
 */
export interface Options {
  resizePreset?: ResizePreset
  resizeType?: ResizeType
  resizeCallback?: (options: ResizeCallback) => any
}

/**
 * 默认选项
 */
export interface DefaultOptions {
  resizePreset: ResizePreset
  resizeType: ResizeType
}

/**
 * 屏幕适配预设
 * 不同屏幕会有不同的适配标准 不可能平滑过渡
 * 单位 px
 * horizontal 横屏
 * vertical 竖屏
 * 当只有任意一个时 仅适配当前一个
 * 当前屏幕是横屏还是竖屏 按 width > height 区分
 */
export type ResizePreset =
  | {
      horizontal: ScreenInfo
      vertical: ScreenInfo
    }
  | {
      horizontal: ScreenInfo
      vertical?: ScreenInfo
    }
  | {
      horizontal?: ScreenInfo
      vertical: ScreenInfo
    }

/**
 * 屏幕信息
 * width 宽度
 * height 高度
 */
export interface ScreenInfo {
  width: number
  height: number
}

/**
 * 适配规则
 * x 表示只按 ResizePreset 的 width 来计算比例适配
 * y 表示只按 ResizePreset 的 height 来计算比例适配
 * all 表示 按 width height 两者比例最小值来适配
 */
export type ResizeType = 'x' | 'y' | 'all'

/**
 * 每次 resize 时回调
 * width 当前屏幕宽度 px
 * height 当前屏幕高度 px
 * size 当前屏幕是横屏还是竖屏 按 width > height 区分
 */
export type ResizeCallback = {
  size: 'horizontal' | 'vertical'
} & ScreenInfo &
  Options

/**
 * 内部选项
 */
export type InnerOptions = Merge<Options, DefaultOptions> & {
  [key: string]: any
}
