/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import "./NavButton.css"

function Button({ title, link, className, variant }) {
  return (
    <Link
      to={`${link}`}
      className={`btn ${className}`}
      sx={{
        variant: `links.${variant}`,
        fontWeight: "bold",
        letterSpacing: 1.1,
        "&:hover": {
          variant: `links.${variant}`,
        },
      }}
    >
      {title}
    </Link>
  )
}

export default Button
