import React from "react"
/** SVGs */
import FacebookIcon from "../../assets/facebook.svg"
import TwitterIcon from "../../assets/twitter.svg"
import AndroidIcon from "../../assets/android.svg"
/** CSS */
import "./HowItWorks.css"

function HowItWorks() {
  return (
    <div className="container howItWorks">
      <img src="/images/howItWorks.png" alt="How It Works" />
      <img src="/images/howItWorks-2.png" alt="How It Works 2" />
      <div className="howItWorks__description__social">
        <FacebookIcon />
        <TwitterIcon />
        <AndroidIcon />
      </div>
    </div>
  )
}

export default HowItWorks
