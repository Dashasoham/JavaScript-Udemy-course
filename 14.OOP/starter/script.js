'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
//1. New {} is created
//2.F-n is called, this={}
//3.{} linked to prototype
//4.function automatically return {}

const matilda = new Person('Matilda', 2010);
const jack = new Person('Jack', 1980);
console.log(matilda, jack);

console.log(jonas instanceof Person);

console.log(Person.prototype);
//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

const arr = [2, 6, 36, 673, 7];
console.log(arr.__proto__);

// Array.prototype.
