function isValidEmail(email) {
  const regexp = /^.+[@]\w+\.\w+$/gm;
  return regexp.test(email);
}

window.isValidEmail = isValidEmail;

export default isValidEmail;
