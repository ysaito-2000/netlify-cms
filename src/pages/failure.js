import React from "react"
import SEO from "../components/SEO/SEO"
import ConnectionProblem from "../components/ConnectionProblem/ConnectionProblem"

function success() {
  return (
    <>
      <SEO title="Success" />
      <ConnectionProblem />
    </>
  )
}

export default success
