function isValidEmail(email) {
  const regexp = /^.+[@][a-z]+\.[a-z]+$/gm;
  return regexp.test(email);
}

window.isValidEmail = isValidEmail;

export default isValidEmail;
