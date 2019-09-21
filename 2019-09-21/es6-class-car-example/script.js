// Object Oriented Programming

// function constructCar(color, isAutomatic) {
//     return {
//         color: color,
//         manufacturingDate: new Date(),
//         isAutomatic: isAutomatic,
//         noOfDoors: 4,
//         noOfWheels: 4,
//         brake: function() {
//             console.log("STOPing my car that has color!" + this.color);
//         },
//         drive: function() {
//             console.log("RUN!");
//         }
//     }
// }

class Car {
    constructor(color, isAutomatic) {
        console.log("hello")
        this.color = color;
        this.manufacturingDate = new Date();
        this.isAutomatic = isAutomatic;
        this.noOfDoors = 4;
        this.noOfWheels = 4;
    }
    brake() {
        console.log("STOPing my car that has color!" + this.color);
    }
    drive() {
        console.log("RUNning my car that has color!" + this.color);
    }
}


let isRaining = true;



if (isRaining) {
    console.log("Yayy!");
} else {
    console.log("Oh NO!")
}