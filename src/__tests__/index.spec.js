import React from "react"

import { render } from "./utils"

import { color } from ".."

it("should add styles", () => {
  const tree = render(<p css={color("red").done()}>test content</p>)
  expect(tree).toHaveStyleRule("color", "red")
  expect(tree).toMatchSnapshot()
})

it("should add hover rules with `.hover`", () => {
  const tree = render(
    <p
      css={color("red")
        .hover("green")
        .done()}
    >
      test content
    </p>
  )

  expect(tree).toHaveStyleRule("color", "red")
  expect(tree).toHaveStyleRule("color", "green", { target: ":hover" })
  expect(tree).toMatchSnapshot()
})

it("should add active rules with `.active`", () => {
  const tree = render(
    <button
      css={color("red")
        .active("blue")
        .done()}
    >
      test content
    </button>
  )

  expect(tree).toHaveStyleRule("color", "red")
  expect(tree).toHaveStyleRule("color", "blue", { target: ":active" })
  expect(tree).toMatchSnapshot()
})

it("should add arbitrary rules with `.on`", () => {
  const tree = render(
    <div
      css={color("red")
        .on("::before", "yellow")
        .done()}
    />
  )
  expect(tree).toHaveStyleRule("color", "red")
  expect(tree).toHaveStyleRule("color", "yellow", { target: "::before" })
  expect(tree).toMatchSnapshot()
})
it("should work with functions", () => {
  const tree = render(
    <p
      css={color("red")
        .hover(c => "brick" + c)
        .done()}
    >
      test content
    </p>
  )

  expect(tree).toHaveStyleRule("color", "red")
  expect(tree).toHaveStyleRule("color", "brickred", { target: ":hover" })
  expect(tree).toMatchSnapshot()
})
