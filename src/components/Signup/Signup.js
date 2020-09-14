import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TwitterIcon from "@material-ui/icons/Twitter";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { generateYear, getDaysInMonth, getMonth } from "../../utils/Date";
import { signupValidation, isInteger, isEmail } from "../../utils/Validation";
import "./Signup.css";

const Signup = ({ open, close, title, page }) => {
  const [changeInputEmail, setChangeInputEmail] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputNameLength, setInputNameLength] = useState(0);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [inputDay, setInputDay] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [validPhone, setValidPhone] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [next, setNext] = useState(false);

  let getGenerateYear = generateYear(1900, new Date().getFullYear());

  let dataSignup = {
    name: inputName,
    email: inputEmail,
    phone: inputPhone,
    month: inputMonth,
    day: inputDay,
    year: inputYear,
  };

  useEffect(() => {
    const { valid } = signupValidation(dataSignup);
    if (valid) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [next, dataSignup]);

  let getDaysForInput =
    inputMonth === "" && inputYear === ""
      ? getDaysInMonth(new Date().getMonth(), new Date().getFullYear())
      : getDaysInMonth(inputMonth, inputYear);

  const days = (getDay) => {
    let all_days = [];
    for (let day = 1; day <= getDay; day++) {
      all_days.push(day);
    }
    return all_days;
  };

  const handleClose = () => {
    if (page !== "signup") {
      let path;
      if (page === "welcome") {
        path = "/";
      } else if (page === "login") {
        path = "/login";
      }
      close();
      setChangeInputEmail(false);
      setInputName("");
      setInputPhone("");
      setInputEmail("");
      setInputMonth("");
      setInputDay("");
      setInputYear("");
      setValidPhone("");
      setValidEmail("");
      setInputNameLength(0);
      document.title = `${title}`;
      window.history.pushState(null, null, path);
    }
  };

  const handleChangeName = (e) => {
    const input = e.target.value;
    if (input.length <= 50) {
      setInputName(input);
      setInputNameLength(input.length);
    }
  };
  const handleChangePhone = (e) => {
    const input = e.target.value;
    setInputPhone(input);
    setValidPhone(isInteger(input));
    if (input.length === 0) {
      setValidPhone("");
    }
  };
  const handleChangeEmail = (e) => {
    const input = e.target.value;
    setInputEmail(input);
    setValidEmail(isEmail(input));
    if (input.length === 0) {
      setValidEmail("");
    }
  };

  const handleChangeMonth = (e) => {
    setInputMonth(e.target.value);
  };
  const handleChangeDay = (e) => {
    setInputDay(e.target.value);
  };
  const handleChangeYear = (e) => {
    setInputYear(e.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="dialog">
        <div id="simple-dialog-title" className="dialog__title">
          {page === "signup" ? (
            <Link to="/" className="dialog__title__link">
              <TwitterIcon className="dialog__title__icon" />
            </Link>
          ) : (
            <div className="dialog__title__link">
              <TwitterIcon className="dialog__title__icon" />
            </div>
          )}
          <button
            className={next ? "" : "disabled"}
            disabled={next ? false : true}
          >
            next
          </button>
        </div>
        <DialogContent className="dialog__content">
          <h2 className="dialog__content__header">Create your account</h2>
          <TextField
            className="dialog__content__textFieldName"
            label="Name"
            fullWidth
            margin="normal"
            value={inputName}
            onChange={handleChangeName}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <p
            style={{
              display: "flex",
              marginLeft: "auto",
              justifyContent: "flex-end",
            }}
          >
            {inputNameLength} / 50
          </p>
          {!changeInputEmail ? (
            <>
              <TextField
                className="dialog__content__textFieldPhone"
                label="Phone"
                fullWidth
                margin="normal"
                value={inputPhone}
                onChange={handleChangePhone}
                InputLabelProps={{
                  shrink: true,
                }}
                error={validPhone === "" ? false : !validPhone && true}
                helperText={
                  validPhone === ""
                    ? ""
                    : !validPhone && "Please enter valid number"
                }
                variant="filled"
              />
              <div className="dialog__content__change">
                <p
                  onClick={() => {
                    setChangeInputEmail(true);
                    setInputPhone("");
                    setValidPhone("");
                  }}
                >
                  Use email instead
                </p>
              </div>
            </>
          ) : (
            <>
              <TextField
                className="dialog__content__textFieldEmail"
                label="Email"
                fullWidth
                margin="normal"
                value={inputEmail}
                onChange={handleChangeEmail}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                error={validEmail === "" ? false : !validEmail && true}
                helperText={
                  validEmail === ""
                    ? ""
                    : !validEmail && "Please enter valid email"
                }
              />
              <div className="dialog__content__change">
                <p
                  onClick={() => {
                    setChangeInputEmail(false);
                    setInputEmail("");
                    setValidEmail("");
                  }}
                >
                  Use phone instead
                </p>
              </div>
            </>
          )}
          <div className="dialog__content__birth">
            <h4>Date of birth</h4>
            <h5>This will not be shown publicly. Confirm your own age</h5>
            <div className="dialog__content__birth__action">
              <FormControl variant="filled" className="dialog__content__select">
                <InputLabel htmlFor="filled-age-native-simple">
                  Month
                </InputLabel>
                <Select
                  native
                  fullWidth
                  value={inputMonth}
                  onChange={handleChangeMonth}
                  inputProps={{
                    name: "Month",
                    id: "filled-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  {getMonth().map((month, index) => {
                    return (
                      <option key={index} value={index + 1}>
                        {month}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl variant="filled" className="dialog__content__select">
                <InputLabel htmlFor="filled-age-native-simple">Day</InputLabel>
                <Select
                  native
                  fullWidth
                  value={inputDay}
                  onChange={handleChangeDay}
                  inputProps={{
                    name: "Day",
                    id: "filled-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  {days(getDaysForInput).map((day) => {
                    return (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl variant="filled" className="dialog__content__select">
                <InputLabel htmlFor="filled-age-native-simple">Year</InputLabel>
                <Select
                  native
                  fullWidth
                  value={inputYear}
                  onChange={handleChangeYear}
                  inputProps={{
                    name: "Year",
                    id: "filled-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  {getGenerateYear
                    .sort((a, b) => b - a)
                    .map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                </Select>
              </FormControl>
            </div>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default Signup;
