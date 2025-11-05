// You’ve been hired to help a logistics company build a system to manage its fleet of 
// vehicles. The system should be able to: 
// 1. Create individual vehicles with properties like type, make, model, year, and 
// mileage. 
// 2. Add a method to update the mileage of a vehicle when it is used. 
// 3. Add a method to display the details of the vehicle in a user-friendly format. 
// 4. Instantiate multiple vehicles from the class and test your methods. 

// Tasks 
// 1. Define the Vehicle Class: 
// ○ The constructor should include properties: type, make, model, year, 
// and mileage. 
// ○ Use default values for mileage (e.g., 0). 
// 2. Add Methods: 
// ○ drive(distance): Increases the vehicle’s mileage by the given 
// distance (in kilometers or miles). 
// ○ getDetails(): Returns a formatted string describing the vehicle’s 
// details. 
// 3. Create and Use Vehicle Objects: 
// ○ Instantiate at least three vehicle objects with different properties (e.g., 
// a car, a truck, and a motorcycle). 
// ○ Use the drive method to simulate trips and update mileage. 
// ○ Use the getDetails method to print each vehicle’s updated 
// information. 
//-----------------------------------------------------------------

// Define the Vehicle Class: (note: emojis will show on powershell)
class Vehicle {
  constructor(emoji, type, make, model, year, mileage=0) {
    this.emoji = emoji;
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
      
  }
    // Add a method to update the mileage of a vehicle when it is used.
    drive(distance) {
        this.mileage = this.mileage + distance;
    }
  // Add a method to display the details of the vehicle in a user-friendly format. 
    getDetails() {
        return (`
\x1b[34mVehicle Type:\x1b[0m ${this.type} ${this.emoji}
\x1b[34mYear, Make and Model:\x1b[0m ${this.year} ${this.make} ${this.model}
\x1b[34mMileage:\x1b[0m ${this.mileage}`);
    }
 }

 // Create and Use Vehicle Objects: 
//  Instantiate at least three vehicle objects with different properties  
let currentCar = new Vehicle(`\u{1F699}`, 'SUV', 'Subaru', 'Forester', 2015, 80000);
let firstCar = new Vehicle(`\u{1F697}`,'Sedan', 'Nissan', 'Altima', 1987, 78000);
let lastCar = new Vehicle(`\u{1F690}`,'Minivan', 'Chevrolet', 'Venture', 2004);

console.log(`\x1b[33mData from date of purchase for current vehicle:  \x1b[0m`, currentCar.getDetails());
console.log(`\x1b[33mData from date of purchase for first vehicle:  \x1b[0m`, firstCar.getDetails());
console.log(`\x1b[33mData from date of purchase for previous vehicle:  \x1b[0m`, lastCar.getDetails());

//  Use the drive method to simulate trips and update mileage. 

lastCar.drive(5);
lastCar.drive(60000);
firstCar.drive(1000);
currentCar.drive(20000);
lastCar.drive(573);
currentCar.drive(22437);
firstCar.drive(45673);

//  Use the getDetails method to print each vehicle’s updated information
console.log(`\x1b[32mUpdated data for current vehicle:  \x1b[0m`, currentCar.getDetails());
console.log(`\x1b[32mData for first vehicle at time of sale:  \x1b[0m`, firstCar.getDetails());
console.log(`\x1b[32mData for previous vehicle at time of sale:  \x1b[0m`, lastCar.getDetails());


