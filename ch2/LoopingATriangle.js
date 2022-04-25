/**
 * My Solution
 */
for (let i=1; i<7; i++) {
    let str = "";
    for (let j=0; j<i; j++) {
        str += "#"; 
    }
    console.log(str);
}

/**
 * Eloquent-js's solution
 */
for (let line="#"; line.length<8; line+="#") {
    console.log(line);
}