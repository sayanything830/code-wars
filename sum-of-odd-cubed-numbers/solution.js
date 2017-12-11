'use strict';

function cubeOdd(arr) {

  for (i in arr) {
   if (!Number.isInteger(arr[i])) {
      return undefined;
    }
  }
  let isNumber = function (obj) {
    return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
  }
  if (arr.filter(isNumber)) {
    let odd = (num) => {
      return num % 2 !== 0;
      // console.log(num)
  }
    let oddArr = arr.filter(odd);

    if (oddArr.length === 0) {
      return undefined;
    }
    console.log(oddArr)
    let cubed = oddArr.map(x => x * x * x);
    return cubed.reduce((acc,curr) => acc + curr);
  }
}
