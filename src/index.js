export const style = ({ prop, css }) => {
  return props => {
    return {
      [css]: props[prop]
    }
  }
}
