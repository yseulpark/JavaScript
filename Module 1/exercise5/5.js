'use strict';

const year= parseInt(prompt("Enter a year."));

if (year % 400 === 0) {
    document.querySelector("#target").innerHTML = year + " is a leap year.";
}
else if (year % 100 === 0) {
    document.querySelector("#target").innerHTML = year + " is NOT a leap year.";
}
else if (year % 4 === 0) {
    document.querySelector("#target").innerHTML = year + " is a leap year.";
}
else {
    document.querySelector("#target").innerHTML = year + " is NOT a leap year.";
}
