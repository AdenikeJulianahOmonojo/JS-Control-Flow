// Input validation
let number;

do {
    number = Number(prompt("Enter a number:"));
} while (number > 100);

console.log("You entered a number less than or equal to 100:", number);


let number;

do {
    number = Number(prompt("Enter a number:"));
} while (number < 50 || number > 100);

console.log("You entered a number between 50 and 100:", number);


// FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// Multiplication table
let number;

do {
    number = Number(prompt("Enter a number between 2 and 9:"));
} while (number < 2 || number > 9);

console.log(`Multiplication table for ${number}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}