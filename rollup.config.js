import { DEFAULT_EXTENSIONS } from '@babel/core'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: './index.ts',
    output: [
      {
        file: './dist/my-component.js',
        format: 'es',
      },
    ],
    plugins: [
      // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
      commonjs(),
      // 配合 commonjs 解析第三方模块
      resolve(),
      // ts
      typescript(),
      // babel
      babel({
        babelHelpers: 'runtime',
        // 跳过monorepo里的rollup问题
        skipPreflightCheck: 'true',
        //支持 ts
        extensions: [...DEFAULT_EXTENSIONS, '.ts'],
        // @babel/plugin-transform-runtime 找不到的坑
        exclude: /^(.+\/)?node_modules\/.+$/,
      }),
      // 打包后压缩回车和空格
      terser(),
    ],
  },
  {
    input: './index.ts',
    output: [
      {
        file: './dist/my-component.d.ts',
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
]
