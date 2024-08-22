function range(start, end, step = 1){
    let theRange = [];
    for(let idx = start; idx <= end; idx += step){
        theRange.push(idx);
    }
    return theRange;
}

function sum(theRange){
    let theResult = 0;
    while(theRange.length > 0)
        theResult += theRange.pop()

    return theResult;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));

console.log(range(1, 10, 2));

for(let number of range(1, 10)) console.log(number);