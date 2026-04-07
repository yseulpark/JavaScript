'use strict';
const answer = confirm("Should I calculate the square root?");
if (answer) {
    const number = parseFloat (prompt("Enter a number "));
    if (number < 0) {
    document.querySelector("#target").innerHTML = "The square root of a negative number is not defined.";
    }
    else {
        const result = Math.sqrt(number);
        document.querySelector("#target").innerHTML = "The square root of " + number + " is " +result + ".";
    }
}
else {
    document.querySelector("#target").innerHTML = "Square root not calculated.";
}