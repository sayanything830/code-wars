'use strict';

function cubeOdd(arr) { //make a function

  for (i in arr) { //for each item in array
   if (!Number.isInteger(arr[i])) { //if it's not a number
      return undefined; //return undefined;
    }
  }
  let isNumber = function (obj) { //new function
    return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj); //returns only if elements are not undefined, a number data type, and is not NaN
  }
  if (arr.filter(isNumber)) {// if this filter returns true
    let odd = (num) => { //new function to return odd numbers
      return num % 2 !== 0;
  }
    let oddArr = arr.filter(odd);//filter array with odd number filter function

    if (oddArr.length === 0) { //if the array is empty
      return undefined; //return undefined
    }
    let cubed = oddArr.map(x => x * x * x); //otherwise cube the values of each and assign to new array named cubed
    return cubed.reduce((acc,curr) => acc + curr); //return the sum of the value from each element in the cubed array
  }
}
