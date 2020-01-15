import React from "react"
import { render } from "./utils"

import { color as c, backgroundColor as bg } from "../colors"

it("should add color", () => {
  const tree = render(<p css={c("red").done()}>test content</p>)
  expect(tree).toHaveStyleRule("color", "red")
  expect(tree).toMatchSnapshot()
})

it("should add background", () => {
  const tree = render(<p css={bg("red").done()}>test content</p>)
  expect(tree).toHaveStyleRule("background-color", "red")
  expect(tree).toMatchSnapshot()
})
