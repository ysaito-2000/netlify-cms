/** @jsx jsx */
import { jsx } from "theme-ui"
import NavButton from "..//UI/NavButton/NavButton"
/** SVGs */
import FacebookIcon from "../../assets/facebook.svg"
import TwitterIcon from "../../assets/twitter.svg"
import AndroidIcon from "../../assets/android.svg"
/** CSS */
import "./Missions.css"

function Missions() {
  return (
    <div className="container">
      <div className="missions">
        <p className="missions__paragraph">
          We are working towards a major goal to{" "}
          <span sx={{ color: "#C29595" }}>reduce our dependence</span> on
          software configurations.
        </p>
        <div className="missions__image__container">
          <img
            src="/images/missions.png"
            alt="usbnex-missions"
            className="missions__image"
          />
          <img
            src="/images/missions_3.png"
            alt="missions-dots"
            className="missions__dots"
          />
        </div>
        <div className="missions__description">
          <div className="missions__description__image">
            <img src="/images/missions_2.png" alt="" />
          </div>
          <div className="missions__description__card">
            <h2 sx={{ letterSpacing: "2px" }}>Get started with us</h2>
            <p>
              If you are also one of the tech lovers and crazy about innovative
              products, our state-of-the-art keyboard is a sure thing you must
              grab. If you have any queries regarding our product, we would love
              to hear about it from you. Our team is available 24/7, so feel
              free to contact us anytime.
            </p>
            <NavButton
              title="Sign Up For Beta"
              link="/signup"
              className="missions__btn"
              variant="primary"
            />
            <div className="missions__description__social">
              <FacebookIcon />
              <TwitterIcon />
              <AndroidIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Missions
