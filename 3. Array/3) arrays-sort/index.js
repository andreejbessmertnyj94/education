function arraysSort(arr) {
  // let maxNum;
  // let indexAndMaxElement = [];
  // let result = [];
  // for (let index in arr) {
  //   // maxNum = -Infinity;
  //   // for (const element of arr[index]) {
  //   //   if (element > maxNum) {
  //   //     maxNum = element;
  //   //   }
  //   // }
  //   maxNum = Math.max(...arr[index]);
  //   indexAndMaxElement.push([index, maxNum]);
  // }
  // indexAndMaxElement.sort(function (a, b) {
  //   return a[1] - b[1];
  // });
  // for (const element of indexAndMaxElement) {
  //   result.push(arr[element[0]]);
  // }
  // return result;
  const newArr = JSON.parse(JSON.stringify(arr));
  return newArr.sort(function (a, b) {
    return Math.max(...a) - Math.max(...b);
  });
}

window.arraysSort = arraysSort;

export default arraysSort;
