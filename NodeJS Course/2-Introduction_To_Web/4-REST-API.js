/*
 ========================================
 What is an API?
 ========================================

 - API stands for Application Programming Interface.
 - An API allows different software applications to communicate.
 - It defines how applications can request and exchange data.
 - APIs can expose data, functionality, or services.

 Example:

 - A weather application requests weather data from a Weather API.
 - The API receives the request.
 - The server processes the request.
 - The API returns a response containing weather information.


 Important:
 - An API is not necessarily a REST API.
 - Not all APIs use HTTP.
*/


/*
 ========================================
 What is REST?
 ========================================

 - REST stands for Representational State Transfer.
 - REST is an architectural style for designing network-based systems.
 - It is commonly used to design web APIs.
 - REST APIs typically communicate using HTTP.
 - REST focuses on resources and their representations.
 - JSON is a common format for representing resources.

 Important:
 - REST is not a programming language.
 - REST is not a protocol.
 - REST is not a framework.
 - REST is an architectural style.
*/


/*
 ========================================
 What is a RESTful API?
 ========================================

 - A RESTful API is an API designed according to REST principles.
 - It exposes resources through URLs.
 - It commonly uses HTTP methods to interact with resources.
 - It returns resource representations, often using JSON.


 Examples of Resources:

 - Users
 - Products
 - Posts
 - Orders


 Example:

 https://example.com/api/users

 The resource here is "users".
*/


/*
 ========================================
 Key REST Principles
 ========================================

 1- Client-Server:
    - The client and server have separate responsibilities.
    - The client handles the user interface.
    - The server handles data and business logic.

 2- Stateless:
    - Each request contains the information needed to process it.
    - The server does not depend on stored client session
      context from previous requests.

 3- Cacheable:
    - Responses should indicate whether they can be cached.
    - Caching can improve performance.

 4- Uniform Interface:
    - Resources are identified through URLs.
    - Clients interact with resources through a consistent interface.

 5- Layered System:
    - The system can contain multiple layers.
    - Examples: Load Balancers, API Gateways, and Backend Servers.


 Important:
 - Stateless does NOT mean the server cannot store data.
 - The server can still use databases.
*/


/*
 ========================================
 What is a Resource?
 ========================================

 - A resource is something that an API exposes.
 - Resources are identified by URLs.
 - A resource can represent a user, product, order, etc.


 Examples:

 /api/users       -> Collection of users

 /api/users/1     -> A specific user

 /api/products    -> Collection of products

 /api/products/10 -> A specific product
*/


/*
 ========================================
 What is an Endpoint?
 ========================================

 - An endpoint is a URL used to interact with an API.
 - It identifies where a particular API operation is available.
 - In backend applications, endpoints are commonly handled by routes.


 Example:

 GET https://example.com/api/users/1


 Explanation:

 - GET: HTTP Method.
 - https://example.com: Server address.
 - /api/users/1: Resource path.

 Important:
 - The HTTP method and URL together identify
   the operation being requested.
*/


/*
 ========================================
 Path Parameters vs Query Parameters
 ========================================

 Path Parameters:
 - Are part of the URL path.
 - Commonly used to identify a specific resource.

 Example:

 GET /api/users/5

 - 5 is the user ID.


 Query Parameters:
 - Appear after the ? symbol.
 - Commonly used for filtering, searching, sorting, and pagination.

 Example:

 GET /api/users?country=PS&limit=10

 - country=PS: Filter users by country.
 - limit=10: Request up to 10 users.


 Multiple Query Parameters:
 - Are separated using the & symbol.
*/


/*
 ========================================
 CRUD Operations
 ========================================

 CRUD stands for:

 C - Create
 R - Read
 U - Update
 D - Delete


 CRUD operations commonly map to HTTP methods:

 Create -> POST

 Read   -> GET

 Update -> PUT / PATCH

 Delete -> DELETE
*/


/*
 ========================================
 HTTP Methods in REST APIs
 ========================================

 GET:
 - Retrieve resources.
 - Should not modify the resource state.

 POST:
 - Submit data to the server.
 - Commonly used to create new resources.

 PUT:
 - Create or replace a resource.
 - Commonly used for full updates.

 PATCH:
 - Apply partial modifications to a resource.

 DELETE:
 - Delete a resource.
*/


/*
 ========================================
 RESTful API Examples
 ========================================

 Resource: Users


 1- Get all users:

    GET /api/users


 2- Get a specific user:

    GET /api/users/1


 3- Create a new user:

    POST /api/users


 4- Replace an existing user:

    PUT /api/users/1


 5- Partially update a user:

    PATCH /api/users/1


 6- Delete a user:

    DELETE /api/users/1
*/


/*
 ========================================
 PUT vs PATCH
 ========================================

 PUT:
 - Used to create or replace a resource.
 - Commonly used when sending the complete updated representation.

 Example:

 PUT /api/users/1

 Body:
 {
   "name": "Ahmed",
   "email": "ahmed@example.com",
   "age": 26
 }


 PATCH:
 - Used to partially update a resource.
 - Only the fields being changed may need to be sent.

 Example:

 PATCH /api/users/1

 Body:
 {
   "age": 26
 }


 Important:
 - PUT and PATCH have different HTTP semantics.
 - The exact update behavior depends on the API contract.
*/


/*
 ========================================
 REST API Request Example
 ========================================

 Scenario:
 Create a new user.


 Request:

 POST https://example.com/api/users

 Headers:
   Content-Type: application/json
   Accept: application/json

 Body:
 {
   "name": "Ahmed",
   "email": "ahmed@example.com"
 }


 Explanation:

 - POST: Request method.
 - /api/users: Target resource collection.
 - Content-Type: Format of the request body.
 - Accept: Preferred response format.
 - Body: The new user's data.
*/


/*
 ========================================
 REST API Response Example
 ========================================

 Response:

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
 - Content-Type: Response contains JSON.
 - Body: Representation of the created user.
*/


/*
 ========================================
 Common HTTP Status Codes in REST APIs
 ========================================

 200 - OK
       Request completed successfully.

 201 - Created
       A new resource was created successfully.

 204 - No Content
       Request succeeded without a response body.

 400 - Bad Request
       The request is invalid.

 401 - Unauthorized
       Valid authentication credentials are missing.

 403 - Forbidden
       The server refuses to allow the operation.

 404 - Not Found
       The requested resource was not found.

 409 - Conflict
       Request conflicts with the current resource state.

 500 - Internal Server Error
       An unexpected server error occurred.
*/


/*
 ========================================
 REST API Best Practices
 ========================================

 1- Use nouns for resource URLs.

 Good:
 GET /api/users

 Avoid:
 GET /api/getUsers


 2- Use appropriate HTTP methods.

 GET    /api/users
 POST   /api/users
 PUT    /api/users/1
 PATCH  /api/users/1
 DELETE /api/users/1


 3- Use appropriate HTTP status codes.

 200 -> Successful retrieval.
 201 -> Resource created.
 404 -> Resource not found.


 4- Use consistent naming conventions.

 Good:
 /api/users
 /api/products
 /api/orders


 5- Use HTTPS for secure communication.

 6- Validate incoming request data.

 7- Return clear and consistent error responses.

 Note:
 These are practical conventions, not all formal REST constraints.
*/


/*
 ========================================
 Practical Example: Calling a REST API
 ========================================

 We will use JSONPlaceholder, a public testing API.
*/


// Example 1: GET Request

async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();

    console.log("Users:", users);

  } catch (error) {
    console.error("Request Failed:", error.message);
  }
}

// getUsers();


// Example 2: GET Resource By ID

async function getUserById(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    console.log("User:", user);

  } catch (error) {
    console.error("Request Failed:", error.message);
  }
}

// getUserById(1);


/*
 ========================================
 API vs REST API
 ========================================

 API:
 - A general interface for communication between software systems.

 REST API:
 - An API designed according to REST architectural principles.
 - Commonly uses HTTP.
 - Focuses on resources and their representations.


 Important:
 - Every REST API is an API.
 - Not every API is RESTful.
 - Using HTTP and JSON does not automatically make an API RESTful.
*/


/*
 ========================================
 Summary
 ========================================

 API:
 - Allows software applications to communicate.

 REST:
 - An architectural style for designing web services.

 RESTful API:
 - An API designed according to REST principles.

 Resource:
 - Something exposed by an API.

 Endpoint:
 - A URL used to access an API operation.

 CRUD:
 - Create, Read, Update, Delete.

 GET:
 - Retrieve resources.

 POST:
 - Submit data, commonly to create resources.

 PUT:
 - Create or replace resources.

 PATCH:
 - Partially update resources.

 DELETE:
 - Delete resources.

 Stateless:
 - Each request must contain the information needed
   to understand and process it.
*/