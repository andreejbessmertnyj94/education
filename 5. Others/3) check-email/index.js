function isValidEmail(email) {
  if (email.split("@").length !== 2) {
    return false;
  }
  const postfix = email.split("@")[1].split(".");
  return !!(postfix[0] && postfix[1]);
}

window.isValidEmail = isValidEmail;

export default isValidEmail;
