//Lecture: let and const

// ES5
/*
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";

console.log(name5);

//ES6
const name6 = "Jane Smith";
let age6 = 23;
name6 = "Jane Miller";
console.log(name6);
*/
/*
//ES5
function driversLicense(passedTest) {
  if (passedTest) {
    var firstName = "John";
    var yearOfBirth = 1990;
  }
  console.log(
    firstName + " born in " + yearOfBirth + " is now allowed to drive a car"
  );
}

driversLicense(true);

//ES6
function driversLicense(passedTest) {
  let firstName;
  const yearOfBirth = 1990;
  if (passedTest) {
    firstName = "John";

    console.log(
      firstName + " born in " + yearOfBirth + " is now allowed to drive a car"
    );
  }
}

driversLicense(true);

let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);


//Lecture: Blocks and IIFEs
{
  //Variables inaccessible if declare wiht let/const in block
  const a = 1;
  let b = 2;

  //Accessible due to var declaration
  var c = 3;
}

console.log(c);
*/

//Strings in ES6
/*
let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year) {
  return 2019 - yearOfBirth;
}

const age = calcAge(1983);
console.log(
  `My name is ${firstName} ${lastName}. I was born in ${yearOfBirth}. I am ${age}. `
);
//Template literals

const n = `${firstName} ${lastName}.`;

console.log(n.startsWith("J"));
console.log(n.endsWith("."));
*/
//Arrow functions
/*
const years = [1999, 1982, 1937, 1964];

//ES5
var ages5 = years.map(function(el) {
  return 2016 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
*/

//Lexical 'this'

//ES5
/*
var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", function() {

      //This refers to global object, not object created in var5

      var str =
        "This is the box number " +
        this.position +
        " and it is " +
        this.color +
        ".";
      alert(str);
    });
  }
};

box5.clickMe();
*/

//ES6

/*
var box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {

      //Accesses the  created object, not the global object

      const str =
        "This is the box number " +
        this.position +
        " and it is " +
        this.color +
        ".";
      alert(str);
    });
  }
};

box6.clickMe();
*/

/*
var box6 = {
  color: "green",
  position: 1,
  clickMe: () => {

    //Accesses global scope, instead of object

    document.querySelector(".green").addEventListener("click", () => {
      const str =
        "This is the box number " +
        this.position +
        " and it is " +
        this.color +
        ".";
      alert(str);
    });
  }
};

box6.clickMe();
*/

//ES5
/*
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("John").myFriends(friends);
*/

//ES6
/*
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}.`);
  console.log(this);
  console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("John").myFriends(friends);
*/

//Destructuring
//ES5
/*
var john = ["John", 26];
var name = john[0];
var age = john[1];
*/

//ES6
/*
const [name, year] = ["John", 26];
console.log(name, year);

const obj = {
  firstName: "John",
  lastName: "Smith"
};

const { firstName, lastName } = obj;
console.log(firstName, lastName);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age1, retirement] = calcAgeRetirement(1990);
console.log(age1);
console.log(retirement);
*/

//Arrays
//const boxes = document.querySelectorAll(".box");

//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "dodgerblue";
});

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => (cur.style.backgroundColor = "dodgerblue"));
*/
//ES5
/*
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === "box blue") {
    continue;
  }

  boxesArr5[i].textContent = "I changed to blue!";
}
*/

//ES6
/*
for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
  console.log(cur.textContent);
}
*/

//ES5
/*
var ages = [12, 21, 14, 17, 18, 11];

var full = ages.map(function(cur) {
  return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages5.findIndex(cur => cur >= 18));
console.log(ages5.find(cur => cur >= 18));
*/

//Spread operator
/*
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(30, 21, 18, 16);
console.log(sum1);

var sum2 = addFourAges(3, 1, 18, 16);
console.log(sum2);

var sum3 = addFourAges(4, 25, 18, 6);
console.log(sum3);

//ES5

var ages = [18, 35, 42, 21];
var sum4 = addFourAges.apply(null, ages);
console.log(sum4);*/

//ES6

//const sum5 = addFourAges(...ages);
//console.log(sum5);

//ES6
/*
const familySmith = ["John", "Bob", "Mark"];

const familyJones = ["Tim", "Mike", "Mary"];

const bigFamily = [...familyJones, ...familySmith];
console.log(bigFamily);

const h = document.querySelector("h1");

const boxes = document.querySelectorAll(".box");
console.log(boxes);
const all = [h, ...boxes];
Array.from(all).forEach(cur => (cur.style.color = "blue"));
*/

//Rest parameters
//ES5
/*
function isFullAge5() {
  //console.log(arguments);

  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= 18);
  });
}
*/
//isFullAge5(1990, 1999, 1995);

//ES6
/*
function isFullAge6(...years) {
  years.forEach(cur => console.log(2016 - cur >= 18));
}

isFullAge6(1990, 1999, 1995);

//ES5
//Adding arguments to function
function isFullAge5(limit) {
  //console.log(arguments);

  //Need to slice off 0 index of array
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= limit);
  });
}

isFullAge5(25, 1990, 1999, 1995);

//ES6
//Adding arguments to the function, don't need to slice of 0 index of array
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log(2016 - cur >= limit));
}

isFullAge6(21, 1990, 1999, 1995);
*/
//ES5 default parameters
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
  nationality === undefined
    ? (nationality = "American")
    : (nationality = nationality),
    (this.firstName = firstName),
    (this.lastName = lastName),
    (this.yearOfBirth = yearOfBirth),
    (this.nationality = nationality);
}


*/

//ES6
/*
function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "American"
) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.yearOfBirth = yearOfBirth),
    (this.nationality = nationality);
}
var john = new SmithPerson("John", 1990);
*/

//Maps
/*
const question = new Map();
question.set(
  "question",
  "What is the official name of the latest major JS version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer");
question.set(false, "Wrong, please try again!");

//console.log(question.get("question"));
//console.log(question.size);

if (question.has(4)) {
  //console.log("The answer is here");
}

/*question.forEach((value, key) => {
  console.log(`This is the ${key} key, and it's set to ${value}.`);
});*/
/*
for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}.`);
  }
}

const ans = parseInt(prompt("Write the correct answer"));
console.log(question.get(ans === question.get("correct")));
*/

//Classes
//ES5
/*
var Person5 = function(name, yearOfBirth, job) {
  (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
};

var john5 = new Person5("John", 1983, "teacher");

//ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
  }

  calculateAge() {
    const age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log("Hey there");
  }
}

Person6.greeting();
const john6 = new Person6("John", 1983, "teacher");
*/

//Sub-classes
//ES5
/*
var Person5 = function(name, yearOfBirth, job) {
  (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  (this.olympicGames = olympicGames), (this.medals = medals);
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
};

var johnAth5 = new Athlete5("John", 1990, "swimmer", 3, 10);

johnAth5.calculateAge();
johnAth5.wonMedal();
*/

//ES6
/*
class Person6 {
  constructor(name, yearOfBirth, job) {
    (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
  }

  calculateAge() {
    const age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log("Hey there");
  }
}

Person6.greeting();
const john6 = new Person6("John", 1983, "teacher");

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    (this.olympicGames = olympicGames), (this.medals = medals);
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAth6 = new Athlete6("John", 1990, "swimmer", 9, 2);
johnAth6.wonMedal();
johnAth6.calculateAge();
*/

//Need two objects, a park object and a street object

//City object
class City {
  constructor(name, buildYear) {
    (this.name = name), (this.buildYear = buildYear);
  }
}

//Street object
class Street extends City {
  constructor(name, buildYear, size, length) {
    super(name, buildYear);
    size === undefined ? (size = "normal") : (size = size);
    this.size = size;
    this.length = length;
  }
}

//Park
class Park extends City {
  constructor(name, buildYear, trees, size) {
    super(name, buildYear);
    this.trees = trees;
    this.size = size;
  }
//Tree density
  treeDensity() {
    
  }
//Average age

//Name of park if more than 1000 trees
}
