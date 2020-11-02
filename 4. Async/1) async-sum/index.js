async function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number") {
      setTimeout(() => resolve(a + b), 1000);
    } else {
      reject("Sorry! Only numbers is allowed.");
    }
  });
}

window.asyncSum = asyncSum;

export default asyncSum;
