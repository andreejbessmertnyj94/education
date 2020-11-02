function reverseString(str) {
  if (!str) {
    str = this;
  }
  let result = "";
  for (let index = str.length - 1; index >= 0; index--) {
    result += str[index];
  }
  return result;
}

String.prototype.reverse = reverseString;
