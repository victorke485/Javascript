// Can be declared in 4 ways: let, const car and automatically
let x = 5;
const y = 12;
$_ = "James"
console.log($_)

// Rules for construction identifiers
/* 
- Can contain letters, digits, underscores and dollar signs
- Must begin with a letter, a $ or an underscore
- Are case sensitive
- Reserved words cannot be used as names
- Numbers cannot be used as first letters
*/

// When to use var, let and const
/*
const - if the value and type should not be changed
let - if you cannot use const
var - if you can use let and const
*/

// One statement, many variables
let person = "John Doe", carName = "Volvo", price = 100;
let fname = "John",
lname = "James",
age = 12;