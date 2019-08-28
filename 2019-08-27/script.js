function wendingMachine(money, numb) {
    let items = [
        {
            name: "Orange Lays",
            price: 40
        },
        {
            name: "Dairy Milk",
            price: 100
        },
        {
            name: "Peanuts",
            price: 30
        },
        {
            name: "Tuc",
            price: 20
        }
    ]

    let requestedItem = items[numb];
    if (money > requestedItem.price) {
        return requestedItem;
    } else {
        return null;
    }
}

function constructIdCard(stdName, stdGender, stdAge, stdInterests) {
    let obj = {
        name: stdName,
        gender: stdGender,
        age: stdAge,
        interests: stdInterests,
        bio: function () {
            console.log(`${this.name} is ${this.age} years old. They like ${this.interests}`)
        },
        greet: function() {
            console.log(`Hi, I am ${this.name}!`);
        }
    };
    return obj;
}

let idCard = constructIdCard("Ali", 24);

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