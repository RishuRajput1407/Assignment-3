// JAVASCRIPT LOOP ASSGINMENT

// Q1. Write a JavaScript program to construct the following pattern, using a nested for loop.
//       * 
//       * * 
//       * * *  
//       * * * *
//       * * * * *         ------------------------------------------------------------------


let rows = 5;
for (let a = 1; a <= rows; a++) {
    let pattern = " ";
    for (let b = 1; b <= a; b++) {
        pattern += "* ";
    }
    console.log(pattern.trim());
}

// Q2. Iterate through all numbers from 1 to 45. Print the following:
//    For multiples of 3 print “Fizz”
//    For multiples of 5 print “Buzz”
//    For multiples of 3 and 5 print “FizzBuzz”  -----------------------------------------------------

for (let c = 1; c <= 45; c++) {
    if(c % 3 === 0 && c % 5 === 0) {
        console.log("FizzBuzz")
    } else if (c % 3 === 0) {
        console.log("Fizz");
    } else if (c % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(c);
    }  
}


// Q3. Calculate the sum of all the numbers in the following array------------------------------------------


var numbersArray = [1,13,22,123,49]
let sum = 0;
for (let d = 0; d < numbersArray.length; d++) {
    sum += numbersArray[d];
}
console.log("sum of all numbers:", sum);


// Q4.Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.---------------------------------------


let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 
let sum1 = arr_1.reduce((acc, val) => acc + val, 0);
let sum2 = arr_2.reduce((acc, val) => acc + val, 0);
let totalSum = sum1 + sum2;
console.log(`${sum1} + ${sum2} = ${totalSum}`);

//  Q5.Using a for loop output the elements in reverse order------------------------------------------------------


let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let e = arr.length -1; e >= 0; e--) {
    console.log(arr[e]);
}