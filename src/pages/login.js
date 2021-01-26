import React from 'react';
import SEO from '../components/SEO/SEO';
import LoginPage from '../components/Login/LoginPage';
import ConnectionSuccess from '../components/ConnectionSuccess/ConnectionSuccess';
import ConnectionProblem from '../components/ConnectionProblem/ConnectionProblem';

function Login({ location }) {
  const { state } = location;
  return (
    <>
      <SEO title="Login" />
      {state && state.status ? (
        <ConnectionSuccess
          name={state.name ? state.name : ''}
          uuid={state.uuid ? state.name : ''}
        />
      ) : state && state.status === false ? (
        <ConnectionProblem />
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default Login;
