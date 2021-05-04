// Membuat class
class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }

    get color() {
        return `Warna mobil ${this._color}`;
    }
    
    set color(value) {
        console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);
        this._color = value;
    }

     
    startEngines() {
        console.log("Mesin dinyalakan");
        this.enginesActive = true;
    }
    
    info() {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color: ${this.color}`);
        console.log(`Engines: ${this.manufacture ? "Active" : "Inactive"}`);
    }
}
 


const johnCar = new Car("Honda", "Red");
console.log(johnCar.color); // output -> Warna Mobil: Red
johnCar.color = "White"; // Mengubah nilai properti color menjadi white
console.log(johnCar.color); // output -> Warna Mobil: White
johnCar.startEngines();
johnCar.info();
 