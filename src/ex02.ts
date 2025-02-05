// Exercise: Create an enum `DaysOfWeek` with values for each day of the week.
// Then, write a function `isWeekend` that accepts a value from the enum and returns `true` if it's Saturday or Sunday, and `false` otherwise.

enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

function isWeekend(day: DaysOfWeek) {
  if(day === 0 || day === 6) {
    return true;
  } else {
    return false;
  }
}

console.log(isWeekend(DaysOfWeek.Saturday));
console.log(isWeekend(DaysOfWeek.Wednesday));
// Expected output:
// true
// false