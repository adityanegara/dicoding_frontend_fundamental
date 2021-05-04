class Vehicle {
    constructor(licensePlate, manufacture) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }
   
  }
   

  class VehicleFactory {
   static repair(vehicles) {
      vehicles.forEach(vehicle => {
        console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`)
      })
    }
  }

  class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheels) {
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }
  
    droveOff() {
      console.log(`Kendaraan ${this.licensePlate} melaju!`);
    }
  
    openDoor() {
      console.log(`Membuka pintu!`);
    }

    info() {
        super.info();
        console.log(`Jumlah roda: ${this.wheels}`);
      }
 }

  const johnCar = new Car("H121S", "Honda", 4);
    const dimasCar = new Car("TA1408K", "Tesla", 4);
 
/* Pemanggilan method repair langsung dari class-nya */
VehicleFactory.repair([johnCar, dimasCar]);