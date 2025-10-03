// Arithmetic Operators: + - * ** / % ++ --

// Assignment Operators: = += -= *= /= %= **=

// Comparison Operators: == === != !== < > <= >=

// Logical Operators: && || !

// The &&= Operator - used between 2 values. If the first values is tue, the second valiue is assigned
let x = true;
let y = x &&= 10;
console.log(y)

// The ||= Operator - is used between 2 values. If the first value is false, the second value is assigned
let a = 0;
let b = a ||= 19;
console.log(b)

// The ??= Operator - if the first value is undefied or null, the second value is assigned
let r;
r ??= 99;
console.log(r)
r ??= 122;
console.log(r)

// The Spread (...) Operator - splits iterables into individual elements
let text = "12345";

let min = Math.min(...text);
let max = Math.max(...text);