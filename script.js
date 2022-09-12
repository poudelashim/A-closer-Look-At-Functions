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
