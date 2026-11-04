/*
 HTTP Requests & Fetch API

 - HTTP is a protocol used for communication between clients and servers.
 - A client sends an HTTP Request, and the server returns an HTTP Response.
 - JavaScript can send HTTP requests to communicate with external APIs.

*/

/*
 What is the Fetch API?

 - A built-in JavaScript API used to make HTTP requests.
 - Works in both browsers and modern Node.js.
 - Supports HTTP methods like GET, POST, PUT, and DELETE.
 - Works asynchronously and returns a Promise.
 - No third-party library is required.
*/

/*
 How Fetch Works:

  1- Client sends an HTTP request to a server.
  2- Server processes the request.
  3- Server returns an HTTP response.
  4- Client receives and processes the response data.
*/

/*
 Common Ways to Make HTTP Requests in JavaScript:

 - XMLHttpRequest (Older browser API)
 - Fetch API (Modern built-in API)
 - Axios (Third-party library)
*/

// Example: GET Request using Fetch API

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json(); // Parse JSON into a JavaScript object
  })
  .then((data) => {
    console.log("Response Data:", data);
  })
  .catch((error) => {
    console.error("Request Failed:", error);
  });

/*
 Important Notes:

 - GET is the default HTTP method used by fetch().
 - fetch() returns a Promise.
 - response.json() also returns a Promise.
 - fetch() does not reject automatically for HTTP errors like 404 or 500.
 - response.ok checks whether the HTTP status is between 200 and 299.
*/

/*
 Advantages of Fetch API:

 - Built into modern JavaScript environments.
 - Supports asynchronous HTTP requests.
 - Works with Promises and async/await.
 - Supports different HTTP methods.
 - Easy to use for communicating with REST APIs.
*/