import React from "react"
import SuccessPage from "../components/SuccessPage/SuccessPage"
import Login from "../components/ConnectionSuccess/ConnectionSuccess"

function confirmation(props) {
  return (
    <>
      {props.location.state !== null ? <SuccessPage {...props} /> : <Login />}
    </>
  )
}

export default confirmation
