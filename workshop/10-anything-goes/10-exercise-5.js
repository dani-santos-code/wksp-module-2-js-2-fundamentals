// Q5
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array and output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number since 3*3 + 7*3 + 1*3 = 371.

let armstrongNumbers = [];

// write your loop here...
function findArmstrongNumbers(number) {
  const numToString = number.toString();
  const numsToArray = [];
  numToString.split("").forEach(num => {
    numsToArray.push(parseInt(num));
  });
  let sumOfCubes = 0;
  numsToArray.forEach(el => {
    sumOfCubes += el * el * el;
  });
  if (sumOfCubes === number) {
    return true;
  }
}
for (let i = 0; i <= 999; i++) {
  if (findArmstrongNumbers(i)) {
    armstrongNumbers.push(i);
  }
}

console.log(armstrongNumbers);
