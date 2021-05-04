// destructuring object

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);

// destructuring assignment
const profile2 = {
    firstName2: "John",
    lastName2: "Doe",
    age2: 18
}
 
let firstName2 = "Dimas";
let age2 = 20;
 
({firstName2, age2} = profile2);
 
console.log(firstName2);
console.log(age2);

// default value

const profile3 = {
    firstName3: "Aditya",
    lastName3: "Negara",
    age3: 23
}

 
const {firstName3, age3, isMale = false} = profile3;
console.log(firstName3);
console.log(age3);
console.log(isMale);

// assigning to different local variable name
const {firstName3: employeeFirstname, lastName3 : employeeLastname, age3: employeeAge} = profile3;
console.log(employeeFirstname);
console.log(employeeLastname);
console.log(employeeAge);
 

 