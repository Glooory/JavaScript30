const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 5 }
]
const p = document.querySelector('p');

function makeItGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}


// Regular
console.log("Hi, I am a log");


// Interpolated 
let name = "Who";
console.log(`My name is ${name}`);


// Styled
console.log('%c I am a log', 'font-size: 20px; color: red');


// Warning!
console.warn("OHHHH NOOOOO");


// Error
console.error("OHHHH ***");


// Info
console.info('I am some information');


// Testing
console.assert(1 === 2, true);


// Clear
// console.clear();


// View DOM Elements
console.log(p);
console.dir(p);

// Grouping together


// Counting


// Timing
console.time('fetch data');
fetch('https://api.github.com/users/Glooory')
    .then(data => data.json())
    .then(data => {
        console.log(data);
        console.timeEnd('fetch data');
    })


console.table(dogs);