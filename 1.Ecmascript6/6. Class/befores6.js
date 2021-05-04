// Membuat class sebelum ES6
function Car(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
}
 
Car.prototype.startEngines = function () {
    console.log('Mobil dinyalakan...');
    this.enginesActive = true;
};
 
Car.prototype.info = function () {
    console.log("Manufacture: " + this.manufacture);
    console.log("Color: " + this.color);
    console.log("Engines: " + (this.enginesActive ? "Active" : "Inactive"));
}
 
var johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();
 
// Membuat class setelah ES6
class CarEs6 {

    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
    startEngines() {
        console.log('Mobil dinyalakan...');
        this.enginesActive = true;
    }

    info() {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color:  ${this.color}`);
        console.log(`Engines: ${this.enginesActive ? "Active" : "Inactive"}`);
    }
    
}
 
const johnCar2 = new CarEs6("Honda", "Red");
johnCar2.startEngines();
johnCar2.info();
 