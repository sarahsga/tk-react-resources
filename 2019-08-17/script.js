function handleClick() {
    console.log("Clicked");
}

let updateTime =  () => {
    
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;

}

console.log("The end");

// setTimeout(updateTime, 2000);
setInterval(updateTime, 1000);

function add(numb) {
    return 1;
}