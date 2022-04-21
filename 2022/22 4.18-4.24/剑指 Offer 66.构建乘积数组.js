/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  let len = a.length;
  let preMultiply = new Array(len + 1).fill(1);
  let sufMultiply = new Array(len + 1).fill(1);
  a.forEach((v, i) => {
    preMultiply[i + 1] = preMultiply[i] * v;
    sufMultiply[len - i - 1] = sufMultiply[len - i] * a[len - i - 1];
  });

  let res = [];
  a.forEach((v, i) => {
    res[i] = preMultiply[i] * sufMultiply[i + 1];
  });
  return res;
};

var arr = [1, 2, 3, 4, 5];
console.log(constructArr(arr));
