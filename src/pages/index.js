import React from "react"
import SEO from "../components/SEO/SEO"
import LandingPage from "../components/LandingPage/LandingPage"
import "../styles/index.css"

const IndexPage = () => (
  <div className="layout-content">
    <SEO title="Home" />
    <LandingPage />
  </div>
)

export default IndexPage
