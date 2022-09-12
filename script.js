"use strict";

//Default parameters
const bookings = [];

//ES6
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //   ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};
createBooking("MH141");
createBooking("MH141", 2, 800);

//////////////////////////////////////////////////////////////////////////////////////////////////////

//How passing arguments works: Value vs Reference

const flight = "MH141";
const ashim = {
  name: "Ashim Poudel",
  passport: 123456,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "MH123";
  passenger.name = "Mr." + passenger.name;
  if (passenger.passport === 123456) {
    alert("check in");
  } else {
    alert("wrong passport");
  }
};
// checkIn(flight, ashim);
// console.log(flight);
// console.log(ashim);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(ashim);
checkIn(flight, ashim);

///////////////////////////////////////////////////////////////////////////////////////////////

//FIRST CLASS FUNCTIONS VS HIGHER-ORDER FUNCTIONS

/* FIRST CLASS FUNCTIONS

JS treats functions as first class citizens
This means functions are simply values
Functions are just another "type" of objects
*/

//Higher Order Function
/*
A function that receives another function as an argument, that returns a new functions or both 
This is only possible because of the first class functions.
For eg:
1. Function that receives another function.

const greet = ()=> console.log('Hey Ashim');
btnClose addEventListener('click',greet);

In the above example, addEventListener is the Higher-order function and greet is call back function.

2. Function that returns new function

function count(){               //higher-order function
    let counter =0;
    return function (){         //returned function
        counter ++;

    };
}

*/

// Functions accepting call back functions
