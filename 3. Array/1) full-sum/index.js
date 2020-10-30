function fullSum(...args) {
  let sum = 0;
  let index;
  for (index in args) {
    if (typeof args[index] !== "number") {
      throw true;
    }
    sum += args[index];
  }
  return sum;
}

window.fullSum = fullSum;

export default fullSum;
