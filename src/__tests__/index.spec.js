import React from "react"
import TestRenderer from "react-test-renderer"

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
