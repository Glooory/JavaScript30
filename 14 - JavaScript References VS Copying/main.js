// Start with strings, numbers and booleans

let str = 'What';
let str2 = str;
console.log(str, str2);
str = 'Why';
console.log(str, str2);


let num = 100;
let num2 = num;
console.log(num, num2);
num = 55;
console.log(num, num2);


// Let's say we have an array
const players = ['Iverson', 'Mcgrady', 'Wade', 'Cart'];

// and we want to make a copy of it.
let people = players;

// however what happens when we update that array?
people[3] = 'Yao';

// now here is the problem!
console.log(people);
console.log(players);

// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how can we fix this? We take a copy instread!
// one way
let people2 = players.splice();

// or create a new array and contact the old one in
let people3 = [].concat(players);

// or use the new ES6 Spread
let people4 = [...players];

// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
    name: 'Allen Iverson',
    age: 43
};

// and think we make a coyp:
let person2 = person;

// how do we take a copy instead?
let person3 = Object.assign({}, person, { team: '76ers' });
console.log(person3);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.