const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
// get the third variable
const [ , , nugget] = favorites;
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
console.log(nugget);

// destructuring assignment
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

// swapping variable
let x = "Im an x";
let y = "Im an Y";

[x,y] = [y,x];

console.log(x);
console.log(y);

// default value

const [, , , , fiveFood = "no value"] = favorites;
console.log(fiveFood);
