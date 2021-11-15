import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
// import AlertContext from "../../context/alert/alertContext";
// import useInput from "../../context/alert/useInput";
import useInput from "../../context/alert/AlertState";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const { login, error, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      console.log(error.data.message);
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "" && value.length >= 4);

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submit");

    if (!enteredEmailIsValid && !enteredPasswordIsValid) {
      return console.log("invalid");
    } else {
      login({
        email: enteredEmail,
        password: enteredPassword,
      });
    }

    resetEmailInput();
    resetPasswordInput();
  };

  const emailInputClasses = emailInputHasError
    ? "form-group form-control user-icon invalid"
    : "form-group form-control user-icon";

  const passwordInputClasses = passwordInputHasError
    ? "form-group form-control lock-icon invalid"
    : "form-group form-control lock-icon";

  return (
    <div className="form-container">
      <h1>Rapptr Labs</h1>
      <form onSubmit={onSubmit}>
        <div className={emailInputClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={enteredEmail}
            placeholder="user@rapptrlabs.com"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
          />
          <i className="fa fa-user fa-lg"></i>

          {emailInputHasError && <p>Not valid email</p>}
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={enteredPassword}
            placeholder="Must be at least 4 characters"
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler}
          />
          <i className="fas fa-lock fa-lg"></i>
          {passwordInputHasError && <p>Not valid password</p>}
        </div>
        <input
          type="submit"
          value="Login"
          disabled={!formIsValid}
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
