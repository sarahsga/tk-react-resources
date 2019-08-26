# 24th August - TechKaro (React)

### What did we study today?
We studied the following topics:
- Structure of an request URL
  - Protocol
  - Server address
  - Port
  - path
  - query string
- Query Strings
  - Key value pairs (parameters)
  - & separator
- What is an API?
- What is a [3rd Party API](https://workingmouse.com.au/third-party-apis/what-is-an-api-first-and-third-party-apis)?
- API Key
- Use [OpenWeatherMap API](https://openweathermap.org/api) to develop a Weather App
- The `Network` tab in Chrome Dev tools
- Status code [401 (Unauthorized)](https://httpstatuses.com/401)

### Homework
- Create a beautiful looking RESPONSIVE Weather App using the OpenWeatherMap API

### Some Notes:
- We use the `Network` tab in Chrome Dev Tools to check requests sent to the server
- 401 status code means you do not have permissions to request something from the server. In the Weather app, we solved it by using an API Key
- API Key tells the server how much you have paid the company for services (Eg: Gold Key costs more than Silver key)
- The request URL has format `protocol://address:port/path?querystring`
- Query String is preceded by a ?
- Query string has many key value pairs. Pair are separated by &
- Each pair in the query string has format `key=value`
- Example query string: `?name=sarah&id=4536`
