function baseExpect(a) {
  function toBe(b) {
    if (typeof a === "number" && typeof b === "number") {
      return a === b;
    }
  }

  toBe.not = (c) => {
    if (typeof a === "number" && typeof c === "number") {
      return a !== c;
    }
  };

  return { toBe: toBe };
}

window.baseExpect = baseExpect;

export default baseExpect;
