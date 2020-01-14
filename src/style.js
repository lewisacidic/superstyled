import merge from "lodash.merge"
import pick from "lodash.pick"

let Style = function(obj) {
  merge(this, obj)
}

Style.prototype.on = function(selector, value) {
  const key = Object.keys(this)[0]
  return new Style({ ...this, [selector]: { [key]: value } })
}

Style.prototype.hover = function(value) {
  return this.on(":hover", value)
}

Style.prototype.active = function(value) {
  return this.on(":active", value)
}

Style.prototype.done = function() {
  return pick(this, Object.getOwnPropertyNames(this))
}

const style = k => v => new Style({ [k]: v })

export default style
