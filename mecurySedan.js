//this includes the vehicle class as a module
const VehicleModule = require('./vehicle.js').Vehicle
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage, maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log("there is no room available!")
            }
        } else {
            console.log("there is no room available!")
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }
}
//this shows how to call from this module...
let v = new Car("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

v.loadPassenger(5)