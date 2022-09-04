console.log('Hello World'); //statement

// alt control i >> to inspect

// Varibles

let interestRate = 0.3

interestRate = 1;

console.log(interestRate);

// type of values to assign to a variable (2)

// Primitives/ value types:

let name= 'Mosh'; // string literal

let age = 30; // number literal

let isApproveds = true; //bolean reserved keyword

let firstName = undefined; //

let lastName = null; // explicitly clear the value of variable


// Reference types

// Object: 

let nam1 = 'Mosh'
let agw2 = 30;

//make it as object
// {} for object = object literal
let person = {

    nome: 'Mosh',
    eta: '30'
};
// to change the name with dot!
person.nome = 'Lisa'; 
// to change name with braket not!
person['nome'] = 'Mary';

console.log(person);

console.log(person.nome);

// default choice is dot notation



// Arrays list of objects
// []; = array literal

let selectedColors = ['red', 'blue'];

// to access elements use index
console.log(selectedColors);
console.log(selectedColors[1]);


// to add another element to the array
selectedColors[2] = 'grey';
selectedColors[3] = 1;
console.log(selectedColors);

// to access array with property

console.log(selectedColors.length);


// Functions

function greet() {
    // body of the function
    console.log('Hello Hello');
} //semicolon not needed 

// call the function
greet();

// display name of person with parameters

function greetName(nome){
    console.log('Hello ' + nome);
}
greetName('Jhon') // pass a value here as argument variable used only within the function
greetName('Lisa') // reuse the function with different input

function noreParamenters(nome, lastName){
    console.log('Hello ' + nome + ' ' + lastName );
}
noreParamenters('Jhon', 'wick') // pass a value here as argument
noreParamenters('Lisa', 'wick') // reuse the function with different umput

// to calcuate a value

function square (number){
    return number*number;
}
let result = square(2);
console.log(result)
// or

console.log(square(5))


function sayHello (name){
    return 'hi ' + name;
}
let store = sayHello('lisa')
console.log(store);