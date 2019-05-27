console.log('hello world!');

// Variables: let , const
// let and const have block level scope
//let can be reasigned but not const


// String, number, boolean, null, undefined
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);

//Concatination
console.log('My name is ' + name);

//template
console.log(`My name is ${name} and I am d ${age}.`);
const hello = `My name is ${name} and I am d ${age}.`;
console.log(hello);

//String lenght
const s = 'tech, computer, IT';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLocaleLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toLowerCase());
console.log(s.split(', '));

//Arrays
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits[1]);
//add to the end of array 
fruits.push('Banana');
console.log(fruits);
// add to  the front of an array
fruits.unshift('Banana');
console.log(fruits);
//takes the last item off the array 
fruits.pop();
console.log(fruits);
//checks if something is in an array
console.log(Array.isArray(fruits));
// shows the index of and item in array
console.log(fruits.indexOf('apples'));


// OBJECT LITERALS
const person = {
	firstName: 'John',
	lastName: 'Doe',
	Age: 30,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: '8351 S 1950 W',
		city: 'Boston',
		state: 'MA',
	}
}

console.log(person.hobbies[1]);
console.log(person.address.city);
person.email = 'jdoe@gmail.com';
//add email
console.log(person);


// Array of objects
const todos = [
	{
		id: 1,
		text: 'Take out trash',
		isComplete: false
  },
	{
		id: 2,
		text: 'Dinner with wife',
		isComplete: false
  },
	{
		id: 3,
		text: 'Meeting with boss',
		isComplete: true
  }
];

console.log(todos[1].text);
// Format as JSON
console.log(JSON.stringify(todos));

// For
for (let i = 0; i <= 10; i++) {
	console.log(`For Loop Number: ${i}`);
}

// While
let i = 0
while (i <= 10) {
	console.log(`While Loop Number: ${i}`);
	i++;
}

for (let i = 0; i < todos.length; i++) {
	console.log(`For Loop Number: ${i}`);
}

for (let i = 0; i < todos.length; i++) {
	console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// For...of Loop
for (let todo of todos) {
	console.log(todo.text);
}

// HIGH ORDER ARRAY METHODS (show prototype)
// forEach

todos.forEach(function (todo) {
	console.log(todo.text);
})

const todoCompleted1 = todos.filter(function (todo) {
	return todo.isComplete === true;
});
console.log(todoCompleted1);

const todoCompleted = todos.filter(function (todo) {
	return todo.isComplete === true;
}).map(function (todo) {
	return todo.text;
})
console.log(todoCompleted);

const a = 10;

if (a === 10) {
	console.log('a is 10');
}

////ternary operators
//const b = 8;
//const color = b > 10 ? 'red' : 'blue';
//console.log(color);

// Switch
const color = 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
  case 'blue':
    console.log('color is blue');
  default:  
    console.log('color is not red or blue')
}


function addNums(num1, num2){
	return num1 + num2;  
}

console.log(addNums(5,3)); 


// FUNCTIONS
function greet(greeting = 'Hello', name) {
  if(!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}

// ARROW FUNCTIONS
const greet1 = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet1('Hi'));


// OOP

// Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}


// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());



// Built in constructors
const name1 = new String('Kevin');
console.log(typeof name1); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'


// ES6 CLASSES
class Person2 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const personA = new Person('John', 'Doe', '7-8-80');
console.log(person1.getBirthYear());

//single Ele

//const form = document.getElementById('my-form');
//console.log(form); 
//const form = document.querySelector('h1');
//console.log(form); 


const items = document.querySelectorAll('.item'); 
items.forEach((item) => console.log(item)); 

// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});































