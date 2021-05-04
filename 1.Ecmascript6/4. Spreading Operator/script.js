// spread operator
const favorites = ['Nasi Goreng', 'Soto Betawi', 'Dendeng Battoko', 'Bakmie'];
const anotherFavorites = ['Rendang', 'Gulai Otak', 'Sop kambing', 'Sate'];
const allFavorites = [...favorites, ...anotherFavorites];
const number = [1,2,3,4];
console.log(...favorites);
console.log(Math.max(...number));
console.log(allFavorites);

// rest parameter
function sum(...numbers) {
    var result = 0;
    for(let number of numbers) {
        result += number
    }
    return result;
}
 
console.log(sum(1,2,3,4,5));

const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];
 
const [manufacture, weight, door, ...items] = refrigerator;
 
console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);
 