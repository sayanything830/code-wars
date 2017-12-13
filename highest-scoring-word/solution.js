'use strict';

// Highest Scoring Word

function high(x) { // create a function
    return x.split(' ').reduce((a, b) => {//split each word into an array and apply reduce method
        let suma=0, sumb=0; //declare letter value variables
        for (let i = 0; i < a.length; i++) { //for each element in a
            suma += a.charCodeAt(i) - 96; // add it's unicode value minus 96 (where lowercase latin letters begin)
        }
        for (let j = 0; j < b.length; j++) { // for each element in b
            sumb += b.charCodeAt(j) - 96; // add it's unicode value minus 96
        }
        if (suma >= sumb) { // if the total sum of a is greater than sum of b
            return a; // return the word a
        }
        return b; // otherwise return word b
    });
}
