function findPair(arr) {
  const len = arr.length;
  for (let index = 0; index < len - 1; index++) {
    for (let secondIndex = index + 1; secondIndex < len; secondIndex++) {
      if (arr[index] === arr[secondIndex]) {
        return arr[index];
      }
    }
  }
  return null;
}

window.findPair = findPair;

export default findPair;
