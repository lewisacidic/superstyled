const path = require("path")
const resolve = require.resolve

module.exports = (api, options = {}) => {
  api.cache(true)
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          loose: true,
          modules: "auto",
          useBuiltIns: "usage",
          shippedProposals: true,
          targets: {
            browsers: [">0.25%", "not dead"]
          },
          exclude: ["transform-typeof-symbol"]
        }
      ],
      [
        resolve("@babel/preset-react"),
        {
          useBuiltIns: true,
          pragma: "React.createElement",
          development: false
        }
      ]
    ],
    plugins: [
      [
        "@babel/plugin-proposal-class-properties",
        {
          loose: true
        }
      ],
      resolve("@babel/plugin-proposal-nullish-coalescing-operator"),
      resolve("@babel/plugin-proposal-optional-chaining"),
      resolve("babel-plugin-macros"),
      resolve("@babel/plugin-syntax-dynamic-import"),
      [
        resolve("@babel/plugin-transform-runtime"),
        {
          corejs: false,
          helpers: options.stage === "develop" || options.stage === "test",
          regenerator: true,
          useESModules: options.state !== "test",
          absoluteRuntimePath: path.dirname(
            resolve("@babel/runtime/package.json")
          )
        }
      ],
      resolve("@babel/plugin-transform-spread")
    ]
  }
}
