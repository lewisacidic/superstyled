import TestRenderer from "react-test-renderer"

export const render = jsx => TestRenderer.create(jsx).toJSON()
