// constructor
// function constructIdCard(stdName, stdGender, stdAge, stdInterests) {
//     let obj = {
//         name: stdName,
//         gender: stdGender,
//         age: stdAge,
//         interests: stdInterests,
//         bio: function () {
//             console.log(`${this.name} is ${this.age} years old. They like ${this.interests}`)
//         },
//         greet: function() {
//             console.log(`Hi, I am ${this.name}!`);
//         }
//     };
//     return obj;
// }

// constructor with 4 inputs. It returns id card objects
function IdCard(stdName, stdGender, stdAge, stdInterests) {
    this.name = stdName;
    this.gender = stdGender;
    this.age = stdAge;
    this.interests = stdInterests;
    this.noOfLegs = 8;
}

IdCard.prototype.noOfLegs = 2;

IdCard.prototype.bio = function () {
    console.log(`${this.name} is ${this.age} years old. They like ${this.interests}`)
};

IdCard.prototype.greet = function() {
    console.log(`Hi, I am ${this.name}!`);
}

/*

Object has 2 kinds of items
- data (property / field)
- action (method)

*/

// let idCard = constructIdCard("Ali", 24);

// let idCard1 = {
//     name: "Maria Khursheed",
//     gender: "female",
//     age: 122,
//     interests: ["coding", "painting"],
//     bio: function () {
//         console.log(`${this.name} is ${this.age} years old. They like ${this.interests}`)
//     },
//     greet: function() {
//         console.log(`Hi, I am ${this.name}!`);
//     }
// }