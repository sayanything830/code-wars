'use strict';

//Reversed String

//without .reverse()
function solution(str){ // make a function
  let rev = []; // reserve empty array
  str = str.split(''); // split each letter in string
  for (let i = str.length -1; i >= 0; i --) { // for each letter in the string, starting at the end and decrementing to the beginning
    rev.push(str[i]); // push that letter into the empty array
  };
  return rev.join(''); // join the array into a string
}

// as above, but more simple
function solution(str){
  let rev = '';
  for (let i = str.length -1; i >= 0; i --) {
    rev += str[i];
  };
  return rev;
}

// with .reverse()
function solution(str){
  return str.split('').reverse().join('');
};

// .split('') - separate the string by each letter
// .reverse() - reverse the order of the elements in the string
// .join('') - join the letters again into a string (opposite of split)
