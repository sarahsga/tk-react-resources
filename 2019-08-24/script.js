function getWeather() {

    const cityName = document.querySelector("input").value;

    // Make a request for a user with a given ID
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee79a981af6eda48c391deddd8b947cc`)
    .then(function (response) {
        // handle success
        document.querySelector("h1").innerHTML = response.data.weather[0].main;
    })
    .catch(function (error) {
        // handle error
        alert("Not Found!");
    })
    .finally(function () {
        // always executed
    });
}

/*

API: Set of URLs to communicate with the Backend

www.facebook.com/messenger

 www.google.com/search

 www.youtube.com/settings

http://www.google.com/



https://www.github.com/search?q=somia

protocol: https
server address: www.github.com
path: /search
queryString: q=somia

https://github.com/search?q=somia&type=Users

protocol: https
server address: www.github.com
path: /search
queryString: q=somia&type=Users

q=somia
type=Users


https://www.google.com/search?q=query+meaning&oq=query+meaning&aqs=chrome..69i57.2199j0j0&sourceid=chrome&ie=UTF-8

protocol: https
server address: www.google.com
path: /search
query string: q=query+meaning&oq=query+meaning&aqs=chrome..69i57.2199j0j0&sourceid=chrome&ie=UTF-8

q=query+meaning
oq=query+meaning
aqs=chrome..69i57.2199j0j0
sourceid=chrome
ie=UTF-8




*/
