/** @jsx jsx */
import { jsx, Checkbox as ThemeCheckbox, Label } from "theme-ui"

function Checkbox({ onChange, text }) {
  return (
    <Label sx={{ color: "text", fontWeight: 600 }}>
      <ThemeCheckbox defaultChecked={true} onChange={onChange} />
      {text}
    </Label>
  )
}

export default Checkbox
