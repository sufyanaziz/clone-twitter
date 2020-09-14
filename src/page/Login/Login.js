import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Button from "../../components/Button/Button";
import SignupComponent from "../../components/Signup/Signup";
import { loginValidation } from "../../utils/Validation";
import { login } from "../../redux/dispatch/dispatch_user";

import TwitterIcon from "@material-ui/icons/Twitter";
import TextField from "@material-ui/core/TextField";

import "./Login.css";

const Login = (props) => {
  const [open, setOpen] = useState(false);
  const [inputFirst, setInputFirst] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [statusLogin, setStatusLogin] = useState(true);

  useEffect(() => {
    document.title = "Login - Clone twitter by sufyan";
  }, []);

  let data = {
    input: inputFirst,
    password: inputPassword,
  };

  const handleClickOpen = () => {
    setOpen(true);
    setInputFirst("");
    setInputPassword("");
    const newPath = `/i/form/signup`;
    document.title = `Signup - Clone twitter by sufyan`;
    window.history.pushState(null, null, newPath);
  };

  const handleSubmit = () => {
    setStatusLogin(true);
    if (data.input !== "ahmadsufyan_" || data.password !== "sufyan123") {
      setStatusLogin(false);
    } else {
      setStatusLogin(true);
      const credentials = JSON.stringify({
        login: true,
        user: data.input,
        theme: "light",
        timestamp: new Date().getTime(),
      });
      localStorage.setItem("credentials", credentials);
      props.history.push("/");
      props.login(data);
    }
  };

  useEffect(() => {
    const { valid } = loginValidation(data);
    if (!valid) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [data]);

  const signup_dialog = (
    <SignupComponent
      open={open}
      close={() => setOpen(false)}
      title="Login - Clone twitter by sufyan"
      page="login"
    />
  );

  return (
    <React.Fragment>
      {signup_dialog}
      <div className="login">
        <div className="login__card">
          <TwitterIcon className="login__icon" />
          <h2>Log in to Twitter</h2>
          {!statusLogin && (
            <div className="login__flashMessage">
              <p>
                The username and password you entered did not match our records.
                Please double-check and try again.
              </p>
            </div>
          )}
          <div className="login__form">
            <TextField
              className="login__form__textFieldName"
              label="Phone, email, or username"
              fullWidth
              margin="normal"
              value={inputFirst}
              onChange={(e) => setInputFirst(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              className="login__form__textFieldName"
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Button
              text="Log in"
              fullWidth
              disabled={!isValid ? true : false}
              type="fill"
              onClick={() => handleSubmit()}
            />
          </div>
          <div className="login__form__link">
            <p>Forgot Password</p>
            <p style={{ margin: "0 10px" }}>-</p>
            <p onClick={handleClickOpen}>Sign up for Twitter</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { login })(Login);
