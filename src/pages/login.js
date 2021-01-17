import React from "react"
import SEO from "../components/SEO/SEO"
import LoginPage from "../components/Login/LoginPage"
import ConnectionSuccess from "../components/ConnectionSuccess/ConnectionSuccess"
import ConnectionProblem from "../components/ConnectionProblem/ConnectionProblem"

function Login({ location }) {
  console.log("Location ", location.state.status)
  return (
    <>
      <SEO title="Login" />
      {location.state?.status === true ? (
        <ConnectionSuccess
          name={location.state?.name}
          uuid={location.state?.uuid}
        />
      ) : location.state?.status === false ? (
        <ConnectionProblem />
      ) : (
        <LoginPage />
      )}
    </>
  )
}

export default Login
