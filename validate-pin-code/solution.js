'use strict';

//Validate Pin Code

function validatePIN(pin) { //given function
  return /^(\d{4}|\d{6})$/.test(pin); //see below
};

// ^ start at beginning of string
// \d - match all digits
// {4} allow a length of 4
// | or
// \d - match all digits again
// {6} allow a length of 6
// $ check match from end of string

// Initially I tried running this code without the .test(pin) and it did not work

// I also tried putting this regex in an 'if' statement, but that kept reassigning the return as 'true' even when the length was 5 digit or longer than 6
