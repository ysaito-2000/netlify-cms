/** @jsx jsx */
import { jsx } from "theme-ui"
/** SVGs */
import ShieldWithCheck from "../../assets/shield-with-check.svg"
import FacebookIcon from "../../assets/facebook.svg"
import TwitterIcon from "../../assets/twitter.svg"
import AndroidIcon from "../../assets/android.svg"
import ButtonArrow from "../../assets/button-arrow.svg"
import NavButton from "../UI/NavButton/NavButton"
/** CSS */
import "./LandingPage.css"

function LandingPage() {
  return (
    <div className="home__page">
      <div className="home__page__content">
        <div className="home__page__content__heading">
          <h2
            sx={{
              color: "text",
              fontSize: 40,
              lineHeight: 1.4,
              letterSpacing: 1.1,
            }}
          >
            No downloads. Access your data from any device.
          </h2>
        </div>
        <div className="home__page__content__tagline">
          <ShieldWithCheck />
          <div
            sx={{
              color: "accent",
              fontSize: 14,
            }}
          >
            Access your personal configurations <br />
            from anywhere.
          </div>
        </div>
        <div className="home__page__content__description">
          <p
            sx={{
              color: "accent",
              fontSize: 14,
              marginTop: "1rem",
            }}
          >
            Learn more about the Usbnex project and get
            <br /> see the possibilities with the Hakkei Ryval.
          </p>
        </div>
          <div className="video-container">
            <video
              className="wrapper__video"
              src="https://s3-us-west-1.amazonaws.com/hakkei.cloud/usbnex-isometric.mp4"
              autoPlay="autoplay"
              loop
              playsinline
              muted
            ></video>
          </div>
        <div
          className="home__page__content__button__container"
          sx={{ variant: "links.white" }}
        >
          <NavButton
            title="Email me when it's ready"
            link="/signup"
            className="home__page__content__button"
            variant="white"
          />
          <ButtonArrow />
        </div>

        <div className="home__page__content__social">
          <FacebookIcon />
          <TwitterIcon />
          <AndroidIcon />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
