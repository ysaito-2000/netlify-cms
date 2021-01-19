import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ location, children }) => {
  return (
    <>
      <Header path={location && location.pathname ? location.pathname : "/"} />
      <main className="main-content-container">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
