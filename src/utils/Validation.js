export const isInteger = (number) => {
  var er = /^-?[0-9]+$/;
  return er.test(number);
};
export const isEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
export const signupValidation = (data) => {
  const { name, email, phone, month, day, year } = data;
  let error = {};
  if (name.trim() === "") error.name = true;
  if (phone.trim() === "") {
    error.phone = true;
  } else if (!isInteger(phone)) {
    error.phone = true;
  }
  if (email.trim() === "") {
    error.email = true;
  } else if (!isEmail(email)) {
    error.email = true;
  }

  if (month.trim() === "") error.month = true;
  if (day.trim() === "") error.day = true;
  if (year.trim() === "") error.year = true;

  return {
    valid: Object.keys(error).length === 1 ? true : false,
  };
};

export const loginValidation = (data) => {
  const { input, password } = data;
  let errors = {};
  if (input.trim() === "") errors.input = true;
  if (password.trim() === "") errors.password = true;

  return {
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
