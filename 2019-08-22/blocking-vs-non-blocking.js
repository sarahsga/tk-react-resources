console.log("Start");

// blocking
// for(let i = 0; i < 5000000000 ; i++) {}

let sayStop = function() {
    console.log("Stop");
}

// non-blocking (using callbacks)
setTimeout(sayStop, 5000);


/*

    synchronous (blocking)
    asynchronous (non-blocking)

*/

let handleClick = function () {
    console.log("Hello World");
}


let whatsapp = {
    messages: [
        {
            name: "Waqas",
            contact: "043257437682",
            firstLine: "Karachi is a very big city ...",
            dateTime: "12:31 PM today",
            isUnread: true,
            unreadCount: 2,
            profilePicture: "www.pics.com/waqasPic"
        },
        {

        }
    ]
}