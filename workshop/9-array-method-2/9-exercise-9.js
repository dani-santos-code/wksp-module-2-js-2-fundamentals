// Q9
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {
  return Math.round(
    grades.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }) / grades.length
  );
}

console.log(calculateAverage([76, 60, 83, 100, 78]));
