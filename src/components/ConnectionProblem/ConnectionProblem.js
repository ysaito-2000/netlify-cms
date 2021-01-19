/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
/** SVGs */
import ConnectionSuccessSVG from "../../assets/ConnectionSuccessSVG.svg"
import ShieldWithCheck from "../../assets/shield-with-check.svg"
import FaceID from "../../assets/faceID.svg"
import Key from "../../assets/key.svg"
import QuestionMark from "../../assets/QuestionMark.svg"
/** CSS */
import "./ConnectionProblem.css"

function ConnectionProblem() {
  return (
    <div className="container">
      <div className="connectionPromblemPage">
        <div className="connectionPromblemPage__content">
          <div className="connectionPromblemPage__content__title">
            <h2>Connection Problem</h2>
            <ShieldWithCheck />
          </div>
          <div className="connectionPromblemPage__content__userInfo">
            <p
              sx={{
                color: "accent",
                fontSize: 14,
                width: "35%",
              }}
            >
              We’re having trouble connecting to your device. You can still
              access the dashboard, but we may not be able to perform any
              updates until this is resolved.
            </p>
          </div>
          <div className="connectionPromblemPage__content__form">
            <div sx={{ variant: "forms.input" }}>
              <FaceID />
            </div>
            <div sx={{ variant: "forms.input" }}>
              <Key />
            </div>
          </div>
          <Link
            to="/"
            sx={{
              color: "accent",
              fontSize: 14,
            }}
          >
            Trouble Signing in?
          </Link>
        </div>
        <div className="connectionPromblemPage__svgs">
          <ConnectionSuccessSVG />
        </div>
        <div className="connectionPromblemPage__help">
          <QuestionMark />
          <Link to="/help">Need Help?</Link>
        </div>
      </div>
    </div>
  )
}

export default ConnectionProblem
