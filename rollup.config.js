import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const production = !(
  process.env.NODE_ENV === 'production' && process.env.ROLLUP_WATCH
)

const defaultArgs = {
  input: 'src/index.js',
  external: [
    'lodash/intersection',
    'lodash/merge',
    'lodash/keys',
    'lodash/get',
    'lodash/isArray',
    'lodash/isObject',
    'lodash/isUndefined',
    'lodash/identity',
    'lodash/flow',
    'lodash/omit',
    'lodash/forEach',
    'lodash/endsWith',
    'prop-types'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    production && terser()
  ]
}

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
      globals(),
      builtins(),
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
