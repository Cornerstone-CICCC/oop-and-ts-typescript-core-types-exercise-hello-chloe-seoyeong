"use strict";
// Exercise: Write a function `logValues` that takes an array of any type of values (numbers, strings, booleans, etc.).
// The function should iterate through the array and log each value along with its type.
function logValues(values) {
    values.forEach(value => {
        if (typeof value === "object") {
            console.log(`${JSON.stringify(value)} (${typeof value})`);
        }
        else if (typeof value === "string") {
            console.log(`"${value}" (${typeof value})`);
        }
        else {
            console.log(`${value} (${typeof value})`);
        }
    });
}
logValues([42, "Hello", true, { name: "Alice" }]);
// Expected output:
// 42 (number)
// "Hello" (string)
// true (boolean)
// { name: "Alice" } (object)
