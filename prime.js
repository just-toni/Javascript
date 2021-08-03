// var years = [1855, 1648, 1420];
// var countries = ["Canada", "France", "Nigeria", "Thailand", "United States"];
// var mess = [53, "Canada", true, 1420];
// document.write("years: ", years, "countries: ", countries, "mess: ", mess)

// var len = countries.length;
// console.log(len);
// console.log(countries[len -1]);
// countries.push('Zambia');
// countries.pop();
// countries.unshift('Angola');
// countries.shift();
// console.log(countries)
// var element = countries.concat(mess);
// let join = element.join(",");
// var reverse = element.reverse()
// var sort = element.sort()
// document.write(element)

// var product = {
//     name: 'Apple',
//     category: 'Fruits',
//     price: 1.99,
//     nutrients: {
//         carbs: 0.95,
//         fats: 0.3,
//         protein: 0.2
//     }
// }

// console.log(product.nutrients.carbs)

// var foodValues = {
//     Apple: {
//         category: 'Fruits',
//         price: 1.32,
//         nutrients: {
//             calories: 52,
//             fats:0.2,
//             protein:0.3,
//             vitamins: 2.3,
//             energy: 50
//         }
//     },
//     Orange: {
//         category: 'Fruits',
//         price: 1.43,
//         nutrients: {
//             calories: 22,
//             fats:0.5,
//             protein:0.8,
//             vitamins: 2.0,
//             energy: 70
//         }
//     },
//     Burger:{
//         category: 'Junk',
//         price: 4.32,
//         nutrients: {
//             calories: 252,
//             fats:45,
//             protein:17.3,
//             vitamins: 2.3,
//             energy: 900
//         }
//     },
//     coffee: {
//         category: 'Beverage',
//         price: 2.32,
//         nutrients: {
//             calories: 522,
//             fats:67.2,
//             protein:18,
//             vitamins: 12.3,
//             energy: 350
//         }
//     }
// }

// console.log(foodValues)

// var sub = function subtotal(price, quantity){
//     return price * quantity;
// }

// var result = sub(3,87)
// console.log(result)

function calculateTotal(price, quantity){
    var subtotal = price * quantity;
    return subtotal + calculateTax(subtotal);
    
    function calculateTax(subtotal){
        var taxRate = 0.05;
        var tax = subtotal * taxRate;
        return tax;
    }
}

// console.log(calculateTotal(3,5))

