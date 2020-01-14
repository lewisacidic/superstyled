import React from "react"
import TestRenderer from "react-test-renderer"

import { lighten } from "polished"
import { color } from ".."

it("should work", () => {
  const tree = TestRenderer.create(
    <p
      css={color("red")
        .hover("green")
        .done()}
    >
      wow
    </p>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it("should work with functions", () => {
  const tree = TestRenderer.create(
    <p
      css={color("red")
        .hover(c => "brick" + c)
        .done()}
    >
      wow
    </p>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it("should work with pigs", () => {
  const tree = TestRenderer.create(
    <p
      css={color("red")
        .hover(lighten(0.1))
        .done()}
    >
      wow
    </p>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
