/** @jsx jsx */
import { useState } from "react"
import { jsx } from "theme-ui"
import { navigate } from "gatsby"
import Label from "../UI/Form/Label/Label"
import Input from "../UI/Form/Input/Input"
import Checkbox from "../UI/Form/Checkbox/Checkbox"
import ErrorLable from "../UI/Form/Error/ErrorLabel"
/** SVGs */
import SuccessPageSVG from "../../../static/svgs/SuccessPageSVG.svg"
import SuccessPageSVG_Icon from "../../../static/svgs/SuccessPageSVG_Icon.png"
import { Auth } from "aws-amplify"

/** CSS */
import "./CreateAccount.css"

function CreateAccount() {
  const [state, setstate] = useState({
    email: "",
    name: "",
    password: "",
    code: "",
    stage: 1,
  });

  const [disbale, setDisable] = useState(false);

  const [validation, setValidation] = useState({
    email: {
      valid: false,
      showError: false,
      message: "email is required.",
    },
    password: {
      valid: false,
      showError: false,
      message: "password is required.",
    },
    name: {
      valid: false,
      showError: false,
      message: "name is required.",
    },
    code: {
      valid: false,
      showError: false,
      message: "code is required, it will be send to your email.",
    },
    networkError: "",
  })

  const formHandler = async e => {
    e.preventDefault()
    setDisable(true)
    if (
      !validation.email.valid ||
      !validation.password.valid ||
      !validation.name.valid
    )
      return
    const { name, password, email } = state
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: { email, name },
      })
      setstate({ ...state, stage: 2 })
    } catch (err) {
      setDisable(false)
      console.log("error signing up...", err)
      if (err.message) {
        setValidation({ ...validation, networkError: err.message })
      }
    }
  };

  const verificationHandler = async e => {
    e.preventDefault()
    if (!validation.code.valid) return
    const { password, email, code } = state

    try {
      if (email && password) {
        await Auth.confirmSignUp(email, code)
        await Auth.signIn(email, password)
        navigate("/confirmation", { state: { name: state.name } })
      }
    } catch (err) {
      console.log("error confirming signing up...", err)
      if (err.message) {
        setValidation({ ...validation, networkError: err.message })
      }
    }
  };

  const inputHandler = ({ target: { name, value } }) => {
    validate(name, value)
    setstate({ ...state, [name]: value })
  };

  const validate = (name, value) => {
    if (value.length < 1) {
      setValidation({
        ...validation,
        [name]: {
          ...validation[name],
          valid: false,
        },
      })
    }
  };

  const onFocus = ({ target: { name } }) => {
    setValidation({
      ...validation,
      networkError: "",
      [name]: {
        ...validation[name],
        showError: false,
        valid: state[name].length > 0,
      },
    })
  };

  const onBlur = ({ target: { name } }) => {
    setValidation({
      ...validation,
      [name]: {
        ...validation[name],
        showError: true,
        valid: state[name].length > 0,
      },
    })
  };

  return (
    <div className="container">
      <div className="create__account">
        {state.stage === 1 ? (
          <div className="create__account__form">
            <h2 sx={{ color: "primary" }}>Create an Account</h2>
            <form className="create__account__form" onSubmit={formHandler}>
              <Label type="text" title="Full Name" />
              <Input
                name="name"
                value={state.name}
                onChange={e => inputHandler(e)}
                type="text"
                onFocus={e => onFocus(e)}
                onBlur={e => onBlur(e)}
              />
              <ErrorLable
                show={validation.name.showError && !validation.name.valid}
              >
                {validation.name.message}
              </ErrorLable>
              <Label type="text" title="Email" />
              <Input
                name="email"
                value={state.email}
                onChange={e => inputHandler(e)}
                type="text"
                onFocus={e => onFocus(e)}
                onBlur={e => onBlur(e)}
              />
              <ErrorLable
                show={validation.email.showError && !validation.email.valid}
              >
                {validation.email.message}
              </ErrorLable>
              <Label type="text" title="Password" />
              <Input
                name="password"
                value={state.password}
                onChange={e => inputHandler(e)}
                type="password"
                onFocus={e => onFocus(e)}
                onBlur={e => onBlur(e)}
              />
              <ErrorLable
                show={
                  validation.password.showError && !validation.password.valid
                }
              >
                {validation.password.message}
              </ErrorLable>
              <Checkbox
                onChange={e => console.log(e.target.checked)}
                text="Would you like to be part of our email list? We don’t spam"
              />
              <ErrorLable show={validation.networkError.length > 0}>
                {validation.networkError}
              </ErrorLable>
              <input
                type="submit"
                value="Sign Up"
                sx={{
                  variant: "links.primary",
                  height: "56px",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
                disabled={disbale}
              />
            </form>
          </div>
        ) : state.stage === 2 ? (
          <div className="create__account__form">
            <h2 sx={{ color: "primary" }}>Please Verify</h2>
            <form
              className="create__account__form"
              onSubmit={verificationHandler}
            >
              <Input
                name="code"
                value={state.code}
                onChange={e => inputHandler(e)}
                type="text"
                onFocus={e => onFocus(e)}
                onBlur={e => onBlur(e)}
              />
              <ErrorLable
                show={validation.code.showError && !validation.code.valid}
              >
                {validation.code.message}
              </ErrorLable>
              <ErrorLable show={validation.networkError.length > 0}>
                {validation.networkError}
              </ErrorLable>
              <input
                type="submit"
                value="Verify"
                sx={{
                  variant: "links.primary",
                  height: "56px",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              />
            </form>
          </div>
        ) : null}

        <div className="create__account__svg">
          <img
            src={SuccessPageSVG}
            alt="USBNEX"
            className="create__account__svg"
          />
          <img
            src={SuccessPageSVG_Icon}
            alt="usbnex-icon"
            className="usbnex__icon"
          />
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
