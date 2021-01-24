/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import { Auth } from 'aws-amplify';
import { navigate } from 'gatsby';
import Label from '../UI/Form/Label/Label';
import Input from '../UI/Form/Input/Input';
import ErrorLable from '../UI/Form/Error/ErrorLabel';
/** SVGs */
import SuccessPageSVG from '../../../static/svgs/SuccessPageSVG.svg';
import SuccessPageSVG_Icon from '../../../static/svgs/SuccessPageSVG_Icon.png';
/** CSS */

function LoginPage() {
  const [state, setstate] = useState({
    email: '',
    password: '',
  });
  const [disbale, setDisable] = useState(false);
  const [validation, setValidation] = useState({
    email: {
      valid: false,
      showError: false,
      message: 'email is required.',
    },
    password: {
      valid: false,
      showError: false,
      message: 'password is required.',
    },
    networkError: '',
  });
  const formHandler = async (e) => {
    e.preventDefault();
    setDisable(true);
    if (!validation.email.valid || !validation.password.valid) return;
    const { password, email } = state;
    try {
      await Auth.signIn(email, password);
      navigate('/confirmation', { state: { name: state.name } });
      // Get Name and UUID from response and pass them into props as well.
      // Response is true
      const responseDataName = 'OmarDon';
      const responseDataUUID = '696969';
      const response = true;
      navigate('/login', {
        state: {
          name: responseDataName,
          uuid: responseDataUUID,
          status: response,
        },
      });
    } catch (err) {
      setDisable(false);
      console.log('error signing in...', err);
      if (err.message) {
        setValidation({ ...validation, networkError: err.message });
      } else {
        navigate('/login', {
          state: { status: false },
        });
      }
    }
  };

  const inputHandler = ({ target: { name, value } }) => {
    validate(name, value);
    setstate({ ...state, [name]: value });
  };

  const validate = (name, value) => {
    if (value.length < 1) {
      setValidation({
        ...validation,
        [name]: {
          ...validation[name],
          valid: false,
        },
      });
    }
  };

  const onFocus = ({ target: { name } }) => {
    setValidation({
      ...validation,
      networkError: '',
      [name]: {
        ...validation[name],
        showError: false,
        valid: state[name].length > 0,
      },
    });
  };

  const onBlur = ({ target: { name } }) => {
    setValidation({
      ...validation,
      [name]: {
        ...validation[name],
        showError: true,
        valid: state[name].length > 0,
      },
    });
  };

  return (
    <div className="container">
      <div className="create__account">
        <div className="create__account__form">
          <h2 sx={{ color: 'primary' }}>Log In</h2>
          <form className="create__account__form" onSubmit={formHandler}>
            <Label type="text" title="Email" />
            <Input
              name="email"
              value={state.email}
              onChange={(e) => inputHandler(e)}
              type="text"
              onFocus={(e) => onFocus(e)}
              onBlur={(e) => onBlur(e)}
            />
            <ErrorLable
              show={validation.email.showError && !validation.email.valid}
            >
              {validation.email.message}
            </ErrorLable>
            <Label type="text" title="Password" />
            {' '}
            <Input
              name="password"
              value={state.password}
              onChange={(e) => inputHandler(e)}
              type="password"
              onFocus={(e) => onFocus(e)}
              onBlur={(e) => onBlur(e)}
            />
            <ErrorLable
              show={validation.password.showError && !validation.password.valid}
            >
              {validation.password.message}
            </ErrorLable>
            <ErrorLable show={validation.networkError.length > 0}>
              {validation.networkError}
            </ErrorLable>
            <input
              type="submit"
              value="Log In"
              sx={{
                variant: 'links.primary',
                height: '56px',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
              }}
              disabled={disbale}
            />
          </form>
        </div>
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
  );
}

export default LoginPage;
