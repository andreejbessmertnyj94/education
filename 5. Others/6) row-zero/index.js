function rowZero(str) {
  return Math.max(...str.split("1").map((element) => element.length));
}

window.rowZero = rowZero;

export default rowZero;
