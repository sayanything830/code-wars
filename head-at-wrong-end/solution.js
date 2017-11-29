'use strict';

//Head at the Wrong End

//My submission:
function fixTheMeerkat(arr) { //given code
 return arr.reverse(); //return an array in reverse w/ .reverse method
};

//This will also work
function fixTheMeerkat(arr) {
 return [arr[2], arr[1], arr[0]]; // no method needed, just returning array indexes in reverse order, not best practice as it only allows for 3 values in the array.
}
