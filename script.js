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
const boxes = document.querySelectorAll(".box");

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "dodgerblue";
});

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => (cur.style.backgroundColor = "dodgerblue"));

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
