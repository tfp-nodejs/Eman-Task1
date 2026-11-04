/*
 ========================================
 What is HTTP?
 ========================================

 - HTTP stands for HyperText Transfer Protocol.
 - It is a protocol used for communication between clients and servers.
 - It defines how requests and responses are exchanged over the web.
 - HTTP follows a Request-Response model.

 Example:
 - A browser sends an HTTP request to a server.
 - The server processes the request.
 - The server sends an HTTP response back to the browser.
*/


/*
 ========================================
 HTTP vs HTTPS
 ========================================

 HTTP:
 - HyperText Transfer Protocol.
 - Data is transmitted without encryption.

 HTTPS:
 - HyperText Transfer Protocol Secure.
 - Uses TLS encryption to secure communication.
 - Protects data while traveling between client and server.

 Examples:

 http://example.com
 https://example.com

 Important:
 - HTTPS is the secure version of HTTP.
 - Always use HTTPS when transmitting sensitive data.
*/


/*
 ========================================
 How HTTP Communication Works
 ========================================

 1- The client sends an HTTP Request.

 2- The server receives the request.

 3- The server processes the request.

 4- The server sends an HTTP Response.

 5- The client receives and handles the response.


 Client  ---- HTTP Request ---->  Server

 Client  <--- HTTP Response ----  Server


 Important:
 - HTTP uses a Request-Response model.
 - The client initiates the request.
 - The server responds to the request.
*/


/*
 ========================================
 What is an HTTP Request?
 ========================================

 An HTTP Request is a message sent by a client
 to request data or perform an operation on a server.


 Main Components of an HTTP Request:

 1- Method:
    - Defines what operation the client wants to perform.
    - Examples: GET, POST, PUT, PATCH, DELETE.

 2- URL:
    - Identifies the target resource.

 3- Headers:
    - Provide additional information about the request.
    - Examples: Content-Type, Authorization, Accept.

 4- Body (Optional):
    - Contains data sent to the server.
    - Commonly used with POST, PUT, and PATCH.
*/


/*
 ========================================
 HTTP Request Example
 ========================================

 POST https://example.com/api/users

 Headers:
   Content-Type: application/json

 Body:
 {
   "name": "Ahmed",
   "email": "ahmed@example.com"
 }


 Explanation:

 - POST: HTTP Method.
 - URL: Where the request is sent.
 - Content-Type: Tells the server the body contains JSON.
 - Body: The data being sent to the server.
*/


/*
 ========================================
 What is an HTTP Response?
 ========================================

 An HTTP Response is a message sent by the server
 after receiving and processing a request.


 Main Components of an HTTP Response:

 1- Status Code:
    - Indicates the result of the request.
    - Examples: 200, 201, 400, 404, 500.

 2- Headers:
    - Provide information about the response.
    - Examples: Content-Type.

 3- Body (Optional):
    - Contains data returned by the server.
    - Can contain JSON, HTML, text, images, etc.
*/


/*
 ========================================
 HTTP Response Example
 ========================================

 Status: 201 Created

 Headers:
   Content-Type: application/json

 Body:
 {
   "id": 1,
   "name": "Ahmed",
   "email": "ahmed@example.com"
 }


 Explanation:

 - 201: The resource was successfully created.
 - Content-Type: The response body contains JSON.
 - Body: The created user's data.
*/


/*
 ========================================
 Understanding URLs
 ========================================

 Example:

 https://example.com/api/users/1?active=true


 URL Components:

 1- Protocol (Scheme):
    https

 2- Domain (Host):
    example.com

 3- Path:
    /api/users/1

 4- Query String:
    ?active=true


 Important:
 - The path identifies the target resource.
 - Query parameters send additional information.
*/


/*
 ========================================
 Common HTTP Methods
 ========================================

 GET:
 - Retrieve data from the server.

 POST:
 - Submit data to the server, commonly to create a resource.

 PUT:
 - Create or replace a resource.

 PATCH:
 - Partially update a resource.

 DELETE:
 - Delete a resource.


 Note:
 - We will cover these methods with practical REST API
   examples in the REST API lesson.
*/


/*
 ========================================
 HTTP Status Code Categories
 ========================================

 HTTP status codes are divided into five categories:

 1xx - Informational
       Request received, processing continues.

 2xx - Success
       Request completed successfully.

 3xx - Redirection
       Further action is needed to complete the request.

 4xx - Client Error
       The request cannot be fulfilled due to a client-side issue.

 5xx - Server Error
       The server failed to fulfill the request.


 Common Examples:

 200 - OK
 201 - Created
 400 - Bad Request
 401 - Unauthorized
 403 - Forbidden
 404 - Not Found
 500 - Internal Server Error
*/


/*
 ========================================
 Common HTTP Headers
 ========================================

 Content-Type:
 - Describes the format of the message body.

 Example:
 Content-Type: application/json


 Authorization:
 - Sends authentication credentials to the server.

 Example:
 Authorization: Bearer token_here

*/


/*
 ========================================
 Practical Example Using Fetch API
 ========================================

 - We already learned how to use fetch().
 - Now let's inspect the HTTP response.
*/

async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    // HTTP Status Code
    console.log("Status:", response.status);

    // Check if response status is 200-299
    console.log("OK:", response.ok);

    // Read a Response Header
    console.log(
      "Content-Type:",
      response.headers.get("content-type")
    );

    // Read and parse the Response Body
    const data = await response.json();

    console.log("Response Body:", data);

  } catch (error) {
    console.error("Request Failed:", error.message);
  }
}

// getPost();


/*
 ========================================
 HTTP vs API vs REST
 ========================================

 HTTP:
 - A protocol for communication between clients and servers.

 API:
 - An interface that allows software systems to interact.

 REST:
 - An architectural style for designing APIs.
 - Commonly uses HTTP methods and resource-based URLs.


 Important:
 - HTTP is not the same as REST.
 - Not every HTTP API is a REST API.
 - HTTP can transfer JSON, HTML, files, and other data.
*/


/*
 ========================================
 Summary
 ========================================

 HTTP:
 - A protocol for client-server communication.

 HTTPS:
 - HTTP secured using TLS encryption.

 Request:
 - A message sent from a client to a server.

 Response:
 - A message sent from a server to a client.

 HTTP Method:
 - Defines the intended operation.

 URL:
 - Identifies the target resource.

 Headers:
 - Provide metadata about requests and responses.

 Body:
 - Contains the data being sent or received.

 Status Code:
 - Indicates the result of an HTTP request.
*/