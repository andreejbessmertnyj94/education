function isEqualAdvances(a, b) {
  if (a === null || b === null) {
    return false;
  }

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let index = 0; index <= keysA.length; index++) {
    if (
      keysA[index] === keysB[index] &&
      a[keysA[index]] === null &&
      b[keysB[index]] === null
    ) {
      return true;
    }
    if (
      keysA[index] === keysB[index] &&
      (typeof a[keysA[index]] === "object" ||
        typeof b[keysB[index]] === "object")
    ) {
      return isEqualAdvances(a[keysA[index]], b[keysB[index]]);
    }
    if (keysA[index] !== keysB[index] || a[keysA[index]] !== b[keysB[index]]) {
      return false;
    }
  }

  return true;
}

window.isEqualAdvances = isEqualAdvances;

export default isEqualAdvances;
