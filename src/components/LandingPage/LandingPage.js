/** @jsx jsx */
import { jsx } from "theme-ui"
import GatsbyImage from "../Image/image"
/** SVGs */
import MainSVG from "../../assets/MainSVG.svg"
import ShieldWithCheck from "../../assets/shield-with-check.svg"
import FacebookIcon from "../../assets/facebook.svg"
import TwitterIcon from "../../assets/twitter.svg"
import AndroidIcon from "../../assets/android.svg"
import ButtonArrow from "../../assets/button-arrow.svg"
import NavButton from "../UI/NavButton/NavButton"
import Layout from "../Layout/Layout"
/** CSS */
import "./LandingPage.css"

function LandingPage() {
  return (
      <div className="home__page">
        <div className="home__page__svg">
          <MainSVG className="main__svg" />
          <div className="usbnex__icon">
            <GatsbyImage src="usbNexIcon" alt="usbnex-icon" />{" "}
            {/*  Using Gatsby Image API */}
          </div>
        </div>
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
            <span
              sx={{
                color: "accent",
                fontSize: 14,
              }}
            >
              Access your personal configurations <br />
              from anywhere.
            </span>
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
