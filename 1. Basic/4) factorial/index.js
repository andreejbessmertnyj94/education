function factorial(n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

window.factorial = factorial;

export default factorial;
