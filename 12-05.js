// ==========================================
// JavaScript Functions - Complete Example
// ==========================================

console.log("=== JavaScript Functions Demo ===");


// ==========================================
// 1. Function Declaration
// ==========================================

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Akilan"));


// ==========================================
// 2. Function Expression
// ==========================================

const multiply = function(a, b) {
    return a * b;
};

console.log("Multiply:", multiply(5, 4));


// ==========================================
// 3. Arrow Function
// ==========================================

const square = (num) => num * num;

console.log("Square:", square(6));


// ==========================================
// 4. Parameters and Arguments
// ==========================================

function add(a, b) {   // a and b are parameters
    return a + b;
}

console.log("Addition:", add(10, 20)); 
// 10 and 20 are arguments


// ==========================================
// 5. Return Values
// ==========================================

function findArea(length, width) {
    return length * width;
}

let area = findArea(5, 3);

console.log("Area:", area);


// ==========================================
// 6. Default Parameters
// ==========================================

function createMessage(name, message = "Welcome") {
    return `${message}, ${name}`;
}

console.log(createMessage("John"));
console.log(createMessage("Bob", "Good Morning"));


// ==========================================
// 7. Rest Parameters
// ==========================================

function sumAll(...numbers) {

    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log("Sum:", sumAll(1, 2, 3, 4, 5));


// ==========================================
// 8. Callback Functions
// ==========================================

function processNumber(number, callback) {
    return callback(number);
}

const double = (num) => num * 2;

console.log("Callback Result:", processNumber(10, double));


// ==========================================
// 9. Higher-Order Function Example
// ==========================================

function repeatTask(times, callback) {

    for (let i = 1; i <= times; i++) {
        callback(i);
    }
}

repeatTask(3, (count) => {
    console.log("Task Repeated:", count);
});


// ==========================================
// 10. Array Callback Example
// ==========================================

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log("Doubled Array:", doubledNumbers);