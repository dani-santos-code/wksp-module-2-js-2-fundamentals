// Q2a
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp
function greaterNumber(num1, num2) {
  return Math.max(num1, num2);
}

// Q2b
// Without changing the function at all,
// can you figure out how we could use it to determine the greater number between 4 integers?

function greaterNumber(num1, ...moreNumbers) {
  return Math.max(num1, ...moreNumbers);
}

// Q2c
// Would this work with more integers?
// Yes!
