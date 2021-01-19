import React from "react"
import NavButton from "..//UI/NavButton/NavButton"
/** SVGs */
import FacebookIcon from "../../assets/facebook.svg"
import TwitterIcon from "../../assets/twitter.svg"
import AndroidIcon from "../../assets/android.svg"
/** CSS */
import "./Ryval.css"

function Ryval() {
  return (
    <div className="container">
      <div className="ryval">
        <p className="ryval__headline">
          Our keyboard is not an ordinary keyboard you might be thinking. There
          are a number of unique features that take it to another level, such as
          key mappings, changing lights, configured profiles, and many more that
          you can find in the features section.{" "}
        </p>
        <div className="ryval__description">
          <div className="ryval__description__image">
            <img src="/images/hakkie.png" alt="Hakkie Brand" />
          </div>
          <div className="ryval__description__content">
            <h2>Hakkei Brand</h2>
            <p>
              With an extensive background experience in web technologies and
              the curse of exploring loopholes in our everyday digital systems,
              we started brainstorming to solve the untouched digital
              challenges. One aspect that annoyed us the most is the negligence
              of the common users to the security risks they get exposed
              unknowingly while downloading software or upgrading their
              applications. We wanted to play our role in fixing it and we found
              WebUSB as one true companion to address such challenges. So,
              seeing the market gap and possessing the expertise and confidence
              to make up a chance, we decided to enter the market of computer
              hardware devices and bring our innovative ideas to light.
            </p>
            <NavButton
              title="Sign Up for Beta"
              link="/signup"
              className="ryval__btn"
              variant="primary"
            />
            <div className="ryval__description__social">
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

export default Ryval
