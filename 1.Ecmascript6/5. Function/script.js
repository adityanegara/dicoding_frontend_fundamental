const upperizedNames = ["Dimas", "Widy", "Buchori"]
    .map(function(name) {
        return name.toUpperCase();
});
 
console.log(...upperizedNames);

const upperiezedNamesArrow = ["Aditya", "Aura", "Ayesha"]
                            .map( name => name.toUpperCase());

console.log(...upperiezedNamesArrow);



// regular function vs arrow function

// regular function
function sayHello(greet) {
    console.log(`${greet}!`);
}
 
 
// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

// arrow function
const sayHelloArrow = greet =>{ console.log(`${greet}`)}

// arrow functional expression
const sayNameArrow = name =>{console.log(`Nama saya ${name}`)};


// parameter dan block body pada arrow function

// arrow function dengan lebih dari 1 parameter
const greet = (time, name) =>console.log(`Good ${time} ${name} Have a nice day`);
greet('morning', 'nurul');

// arrow function tanpa parameter

const greet2 = () =>console.log(`Hello everybody`);
greet2();

// arrow function dengan block body

const greet3 = (time , name) => {
    if(time == 'morning'){
        return `Good ${time} ${name} have a nice day`;
    }
    if(time == 'evening'){
        return `Good ${time} ${name} have a nice evening`;
    }
    if(time == `night`){
       return `Good ${time} ${name} good night`;
    }
}

console.log(greet3('night', 'bayi'));


// This pada arrow function

// this pada regular function
function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}
 
 
// menambahkan introMyself ke People
People.prototype.introMyself = function () {
    // this -> People
    setTimeout(function() {
       // this -> ??
        console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300)
}

People.prototype.introMyselfArrow =  function  (){
    setTimeout( () =>{
        console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300);
}
 
 
const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMyself();
programmer.introMyselfArrow();


const sayHelloDefault = (name = "Stranger", greet = "Hello") => console.log(`${greet} ${name}!`);
 
 
sayHelloDefault("Dimas", "Hai");
sayHelloDefault();
 
 




