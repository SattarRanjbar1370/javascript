let output;

for(let n = 1; n <= 10; n++){
    for(let m = 1; m <= 10; m++){
        output += (n*m)+'\t';
    }
    output += '\n';
}

console.log(output);