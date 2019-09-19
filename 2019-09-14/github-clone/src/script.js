function myComponent(props) {
    console.log(props.heading);
}

let boxen = require('boxen')

let myInput = {
    imgURL: "www.google.com",
    heading: "Pakistan WINS T20",
    paraText: "Yayy Hurray Pakistan has WON!!!",
    anchorURL: "www.espn.com/pakistan-cricket",
    children: "dsfhsdgaedsbv"
}

myComponent(myInput);

