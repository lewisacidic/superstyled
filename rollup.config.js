import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const defaultArgs = {
  input: 'src/index.js',
  external: [
    'lodash/intersection',
    'lodash/merge',
    'lodash/assign',
    'lodash/keys',
    'lodash/get',
    'lodash/isArray',
    'lodash/isObject',
    'lodash/identity',
    'lodash/flow'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    terser()
  ]
}

const production = !(
  process.env.NODE_ENV === 'production' && process.env.ROLLUP_WATCH
)

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'superstyled',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      production && terser()
    ]
  },
  {
    output: { file: pkg.module, format: 'es', sourcemap: true },
    ...defaultArgs
  },
  {
    output: { file: pkg.main, format: 'cjs', sourcemap: true },
    ...defaultArgs
  }
]
