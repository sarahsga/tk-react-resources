let handleSuccess = function (response) {
    // handle success
    console.log("SUCCESS!");
    console.log(response);
    for(let i = 0 ; i < response.data.length; i++) {
        // console.log(response.data[i]);
        let message = response.data[i];
        document.querySelector("ul").innerHTML += `
        <li class="message">
            <h3>${message.name}</h3>
            <p>${message.number}</p>
            <p>${message.firstLine}</p>
            <p>${message.time}</p>
            <img src="${message.profilePic}" />
        </li>
    `

    }
}

let handleError = function (error) {
    // handle error
    console.log("ERROR!!!!!!! :'-[ ");
    console.log(error);
}

let finishUp = function () {
    // always executed
    console.log("THE END!");
}


// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
  .then(handleSuccess)
  .catch(handleError)
  .finally(finishUp);