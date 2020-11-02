function reverseString() {
  let result = "";
  for (let index = this.length - 1; index >= 0; index--) {
    result += this[index];
  }
  return result;
}

String.prototype.reverse = reverseString;
