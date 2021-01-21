/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./Layout.css"
const Layout = ({ location, children }) => {
  return (
    <div className="layout" sx={{backgroundSize: 'cover'}}>
      <Header path={location && location.pathname ? location.pathname : "/"} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
