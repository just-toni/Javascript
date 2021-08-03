// let randomNumber = Math.floor(Math.random() * 13);
// console.log(randomNumber);

// let n = prompt("Enter a number: ")
// let t = parseInt(n)
// switch(t){
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     case 3:
//         console.log("Tuesday")
//         break;
//     case 4:
//         console.log("Wednesday")
//         break;
//     case 5:
//         console.log("Thursday")
//         break;
//     case 6:
//         console.log("Friday")
//         break;
//     case 7:
//         console.log("Saturday")
//         break;
// }

for(let index = 1; index <= 10; index++){
        let counter = 0;

    for(let j = 1; j <= Math.sqrt(index); j++){
        if(index % j== 0){
            counter++;
        }
        
    }
    if(counter == 2){
        console.log(index);
    }
}