function createChessBoard(x) {
    for (let i=0; i<x; i++) {
        let line="";
        for (let j=0; j<x; j++) {
            if (i%2 == 0) {
                if (j%2==0) line += "#";
                else line += " ";
            }
            else {
                if (j%2!=0) line += "#";
                else line += " ";
            }
        }
        console.log(line);
    }
}

/**
 * Master solution
 * Uses coordinate sums which alternate odd and even
 */
function createChessBoardMaster(x) {
    let output=""; 
    for (let i=0; i<x; i++) {
        for (let j=0; j<x; j++) {
            if ((i+j) % 2 === 0) output += " ";
            else output += "#";
        }
        output += (i !== x-1) ? "\n" : "";
    }
    return output;
}

console.log(createChessBoardMaster(8));
// createChessBoard(8);