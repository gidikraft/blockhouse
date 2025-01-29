export const isValidEmail = (text: string) => {
  let re = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let valid = true;

  if (re.test(text) === false) {
    valid = false;
  }

  return valid;
};

export const isValidPassword = (text: string) => {
  let re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$/;
  let valid = true;

  if (re.test(text) === false) {
    valid = false;
  }

  return valid;
};

// module.exports = isValidEmail;
