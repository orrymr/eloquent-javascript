let array = [1, 2, 3];

function arrayToListUsingRecursion(array){
    let listElement = {value: array[0]};
    if(array.length === 1) listElement.rest = null;
    else listElement.rest = arrayToListUsingRecursion(array.slice(1));     
    return listElement;
}

function arrayToListUsingLoop(array){
    let list = null;
    for(let i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list){
    let array = [];
    for(let node = list; node; node = node.rest){ // null is falsy
        array.push(node.value);
    }
    return array;
}

function prepend(list, element){
    return {
        value: element,
        rest: list
    };
}

function nth(list, idx){
    if(idx == 0)
        return list.value;
    else if (idx < 0)
        return undefined;
    else if (!list.rest)
        return undefined;
    else
        return nth(list.rest, idx-1);
}

let resultUsingRecursion = arrayToListUsingRecursion(array);
let resultUsingLoop = arrayToListUsingLoop(array);
console.log(resultUsingRecursion);
console.log(resultUsingLoop);

let resultArray = listToArray(resultUsingLoop);
console.log(resultArray);

let prependedList = prepend (resultUsingLoop, 0);
console.log(prependedList);

console.log(nth(resultUsingLoop, 6));
