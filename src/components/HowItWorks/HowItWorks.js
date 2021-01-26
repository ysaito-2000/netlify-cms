/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React from "react";
import AliceCarousel from "react-alice-carousel";
import ThreeColumn from "../ThreeColumn";
import NavButton from "../UI/NavButton/NavButton";
import Banner from "../Banner/Banner";
import TwoColumn from "../TwoColumn/TwoColumn";
import AndroidIcon from "../../assets/android.svg";
import Elements from "../../assets/elementsPlaceholder.svg";
/** SVGs */
import FacebookIcon from "../../assets/facebook.svg";
import TwitterIcon from "../../assets/twitter.svg";
import TextLogo from "../../assets/textLogo.svg";
/** CSS */
import "./HowItWorks.css";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

function HowItWorks() {
  const items = [
    <div key="carousel-item-1" className="item" data-value="1">
      <TwoColumn />
    </div>,
    <div key="carousel-item-2" className="item" data-value="2">
      <TwoColumn />
    </div>,
    <div key="carousel-item-3" className="item" data-value="3">
      <TwoColumn />
    </div>,
  ];
  const IntroductionSection = () => (
    <section sx={{ maxWidth: "520px", marginTop: "32px" }}>
      <div className="block  xl:inline min-h-40 py-24">
        <span className="font-sans md:font-mono">
          <TextLogo className="inline w-40 " />
          <p className="mt-1 max-w-2xl text-sm text-gray-300">
            Alpha-v1.0.5-dev
          </p>
          <br></br>
          <br></br>
        </span>
      </div>
      <dd className="mt-2 text-lg text-gray-500">
        <span
          sx={{ maxWidth: "540px" }}
          className="text-xl leading-6 block text-gray-700 xl:inline font-light"
        >
          USBNEX enables you to customize and run firmware updates on our
          products to{" "}
          <span className="xl:inline animate-pulse">seamlessly </span>
          fit your life – all within your browser.
        </span>
      </dd>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <NavButton title=" Privacy Policy" link="/signup" />
      </div>
    </section>
  );
  return (
    <div className="howItWorks__container howItWorks bg-gray-100 w-full h-full mt-16">
      <div className="lg:max-w-7xl px-8 flex flex-col lg:flex-row justify-around m-auto items-center">
        <IntroductionSection />
        <Elements className="h-64 align-middle m-auto" />
      </div>
      <div className="h-24"></div>
      <Banner
        bg="linear-gradient(90deg, #667eea 0%,#764ba2 100%)"
        text="Our most important concern when using the latest web technologies is the protection, security, and integrity of the devices we support. We will never sell your data."
      />
      <div className="flex flex-col justify-center m-auto">
        <AliceCarousel mouseTracking items={items} responsive={responsive} />
      </div>
      <div className="h-12"></div>
      <div sx={{ background: "rgb(33, 33, 33)" }}>
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl text-white tracking-tight">
            UsbNex is your space to fully control and personalize your settings
            across all our products.
          </h2>
        </div>
        <ThreeColumn />
      </div>
      <div className="howItWorks__description__social">
        <FacebookIcon />
        <TwitterIcon />
        <AndroidIcon />
      </div>
    </div>
  );
}

export default HowItWorks;
