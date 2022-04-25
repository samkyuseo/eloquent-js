/**
 * Print "Fizz" if divisible by 3
 * Print "Buzz" if divisible by 5 but not 3
 * Print number other wise
 */
for (let i=1; i<101; i++) {
    if (i%3 === 0) console.log("Fizz"); 
    else if (i%5 === 0) console.log("Buzz");
    else console.log(i); 
}

/**
 * Print "FizzBuzz" if divisible by 3 and 5
 * Print "Fizz" if divisible by 3
 * Print "Buzz" if divisible by 5
 * Print number other wise
 */
 for (let i=1; i<101; i++) {
    if (i%3 === 0 && i%5 === 0) console.log("FizzBuzz");
    else if (i%3 === 0) console.log("Fizz"); 
    else if (i%5 === 0) console.log("Buzz");
    else console.log(i); 
}

/**
 * Master solution
 */
for (let i=1; i<101; i++) {
    let output = ""; 
    if (i%3 === 0) output += "Fizz";
    if (i%5 === 0) output += "Buzz";
    console.log(output || i);
}