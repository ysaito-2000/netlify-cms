import React from "react"
import SEO from "../components/SEO/SEO"
import ConnectionSuccess from "../components/ConnectionSuccess/ConnectionSuccess"

function success() {
  return (
    <>
      <SEO title="Success" />
      <ConnectionSuccess />
    </>
  )
}

export default success
