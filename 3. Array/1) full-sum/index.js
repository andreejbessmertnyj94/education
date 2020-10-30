function fullSum(...args) {
  let sum = 0;
  for (const element of args) {
    if (typeof element !== "number") {
      throw true;
    }
    sum += element;
  }
  return sum;
}

window.fullSum = fullSum;

export default fullSum;
