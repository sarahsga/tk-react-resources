# 22nd August - TechKaro (React)

### What did we study today?
We studied the following topics:
- Synchronous (blocking) vs Asynchronous (non-blocking) code
- Create a StopWatch using [setTimeout](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals#setTimeout()) (non-blocking) in JS
- **Revision:** 3 layers of a webpage
  - **Layer-1:** Frontend
  - **Layer-2:** Backend
  - **Layer-3:** Database
- How to request data from the server using [Axios](https://github.com/axios/axios)
- How to receive data response from the server using Promises (then, catch, finally)
- How to use the response data to create an HTML frontend
- [Status codes](https://www.restapitutorial.com/httpstatuscodes.html) 200 (OK) and 404 (Not Found)

### Homework
- Create a Whatsapp clone using the [Whatsapp API](whatsapp-api-docs.md). You'll need:
  - HTML / CSS / JS
  - Axios
- Complete the Timer app

### Some Notes:
- How to solve a big problem
  - **Step-1:** Break the big problem into many small problems. Then focus on one small problem at a time.
  - **Step-2:** For each small problem, think of the pseudocode. Think: how would you teach this common sense to a baby
  - **Step-3:** Translate the pseudocode into JS code
  - **Step-4:** Make everything perfect. Handle invalid user inputs using if/else and boolean flags
  - **Step-5:** Add bells and whistles - like CSS, and sound
- Axios is a library that provides a machine called "get" to make a request to the server and get some response back using Promises (then, catch and finally)
- Axios was created by some 3rd Party, so JS does not know what Axios is. You must add the [Axios CDN](https://github.com/axios/axios#installing) in the HTML to tell JS about Axios.
- There are other alternatives to Axios too. Examples: HTTPXmlRequest, JQuery Ajax, Fetch, etc. You can use whichever you like!
- Request is a URL
- Response can be:
  - An HTML page
  - Some raw JSON data

