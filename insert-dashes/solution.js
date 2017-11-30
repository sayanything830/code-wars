'use strict';
//Insert Dashes

function DashInsert(num) { //Creates a function with 'num' as the argument

  let prevNum; //place holder for odd or even number
  let currNum; //place holder for odd or even number
  let	newNum = ''; //new string that will contain dashes between odd numbers

	num = num.toString(); //turns passed argument into string

	for (let i = 0; i < num.length; i ++) { // for each number in 'num'
		if (num[i] % 2 == 0) { //if that number is divisable by 2 (an even number)
      currNum = 'true'; // set currNum to true
    } else { // otherwise
      currNum = 'false'; //set currNum to false (an odd number)
    }
    if (currNum === 'false' && prevNum === 'false') { //if both the current and previous numbers were odd
      newNum = `${newNum}-${num[i]}`; //put a dash between them
      prevNum = 'false'; //set value of previous number to false
    } else { //otherwise
      newNum = `${newNum}${num[i]}`; //do not put dash between numbers
      prevNum = currNum // set value of previous number to current number. This can be true or false, once the loop iterates again, if the previous number is false and the current number is false, the newNum string will add a dash between them.
    }
	}
  return newNum; // return the final string with dashes (if they exist)
}
