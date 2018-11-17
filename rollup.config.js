import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'countdown',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      resolve(),
      commonjs()
    ]
  },
  {
    input: 'src/index.js',
    external: ['lodash'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      })
    ]
  }
]
