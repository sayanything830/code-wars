'use strict';

//Alternate Capitalization

let capitalize = (s) => { //Refactored into fat arrow function
  let answer = []; //set empty array
  let upper = ''; //set empty string
  let lower = ''; //set another empty string

  let altUpper = () => { //altUpper function
    for (let i = 0; i < s.length; i++) { //for each index
      upper += s[i].toUpperCase(); //change s string to upper case
      if (i + 1 < s.length){ // if the current index plus one is less than the length of s
        upper += s[i + 1]; //add the next index from the current one to the 'upper' string (this will not be turned to upper case)
      };
      i++; //increase index number so that it skips the next index (the one we just added to the string as non-upper case)
    };
    answer.push(upper); //push this 'upper' string to the empty answer array
  };
  let altLower = () => { //altLower function
    for (let i = 0; i < s.length; i++) { //for each index
      lower += s[i]; //add that to the 'lower' string
      if (i + 1 < s.length){ // if the current index plus one is less than the length of s
        lower += s[i + 1].toUpperCase(); // add the next index to the 'lower' string and change it to upper case
      };
      i++; // increase index number so that it skips the next index (the one we just added as upper case)
    };
    answer.push(lower); //push 'lower' string to 'answer' array
  };
  altUpper(); // call function
  altLower(); //call function
  return answer; //return 'answer' array
};
