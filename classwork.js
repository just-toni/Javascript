function checkNumbers(num1, num2){
    if (num1 + num2 == 50)
    return true;
    else if(num1 == 50 || num2 == 50)
    return true;
    else false;
}

console.log(checkNumbers(50,50))

function checkIntegers(num1, num2){
    if(num1 > 0 && num2 > 0)
    return "positive";
    else if(num1 < 0 && num2 < 0)
    return "negative";
}

console.log(checkIntegers(-2, 4))

function triangleArea(num1, num2, num3){
    var s = (num1 + num2 + num3) / 2
    var next = s * (s - num1) * (s - num2) * (s - num3);
    let result = Math.sqrt(next);
    return result;  
}

console.log(triangleArea(5,6,7))

function toArray(one, two, three, four, five){
    return [one, two, three, four, five];
}

console.log(toArray(3,5,2,6,7));

function addWithSubcharge(amount){
    if(amount < 10){
        return amount + 1;
    }
    else if (amount > 10){
        return amount + 2;
    }
}

console.log(addWithSubcharge(90))

function rotateArray(array){
    let first = array[0]
    for(let i = 0; i < array.length - 1; i++){
        array[i] = array[i + 1];
    }
    array[array.length - 1] = first;
    return array;
}

console.log(rotateArray([21,43,94]));

function tripleSum(num1, num2){
    if(num1 == num2){
        return (3 * (num1 + num2))
    }
    else return num1 + num2
}

console.log(tripleSum(3,4)) 

function first(num){
    return num[0];
}

function first(num1, num2){
    return num1;
}

function first(num2, num1, num3){
    return num2;
}

function joinArray(array){
    const join1 = array.join(",");
    const join2 = array.join("+");
    return join1 , join2;
}

console.log(joinArray(["Green", "Blue", "Years"]));

function sum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(sum([1,2,3,4]))

function product(array){
    let product = 1;
    for(let i = 0; i < array.length; i++){
        product *= array[i];
    }
    return product;
}

console.log(product(1,2,3));

function sandwichCalculator(slicesOfBread){
    return slicesOfBread / 2;
}

var num = parseInt(prompt("Enter number of bread slices: "))
window.alert(sandwichCalculator(num));

function sandwichCalculator(slicesOfBread, slicesOfCheese){
    let numberOfSandwich = 0;   
}
