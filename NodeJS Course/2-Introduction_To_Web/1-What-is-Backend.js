/*
 ========================================
 What is Backend?
 ========================================

 - The backend is the part of an application that runs on a server.
 - It handles data processing, business logic, and communication with databases.
 - It receives requests from clients and sends back responses.
 - It usually interacts with databases, external APIs, authentication systems, and file storage.
 - Backend code runs on the server and is not directly visible to users in the browser.
*/

/*
 Key Backend Responsibilities:

 - Handling client requests and sending responses.
 - Storing and retrieving data from databases.
 - Managing user accounts, authentication, and permissions.
 - Implementing business logic.
 - Communicating with external services and APIs.
*/


/*
 ========================================
 Frontend vs Backend
 ========================================

 Frontend (Client-Side):
 - The part of the application that users interact with.
 - Responsible for displaying data and handling user interactions.
 - Common technologies: HTML, CSS, JavaScript, React.

 Backend (Server-Side):
 - The part of the application that processes requests.
 - Responsible for business logic, data management, and security.
 - Common technologies: Node.js, Python, Java, PHP.
*/


/*
 ========================================
 What is a Client?
 ========================================

 - A client is an application or device that requests services from a server.
 - It sends requests and receives responses.

 Examples:
 - Web Browsers (Chrome, Firefox).
 - Mobile Applications.
 - Other Backend Services.
*/


/*
 ========================================
 What is a Server?
 ========================================

 - A server is a computer or software that provides services
   or resources to clients over a network.

 - In web development, a server listens for incoming requests
   and sends back responses.

 - A server can run on your own computer or on a remote machine.

 Examples:
 - A web server serving websites.
 - An API server providing data to applications.
 - A database server storing and managing data.
*/


/*
 ========================================
 What is a Database?
 ========================================

 - A database is a system for storing, organizing, and accessing data.
 - The backend uses databases to save and retrieve information.
 - Data can be stored permanently and accessed when needed.

 Common Database Categories:

 1- Relational Databases (SQL):
    - PostgreSQL
    - MySQL

 2- Non-Relational Databases (NoSQL):
    - MongoDB
    - Redis

 Note:
 - Not every backend application requires a database.
*/


/*
 ========================================
 How Do Frontend and Backend Work Together?
 ========================================

 1- The user interacts with the frontend.

 2- The frontend sends an HTTP request to the backend.

 3- The backend processes the request.

 4- The backend may communicate with a database or external API.

 5- The backend sends an HTTP response to the frontend.

 6- The frontend receives the response and updates the UI.


 Important:
 - The frontend and backend communicate through APIs.
 - HTTP/HTTPS is commonly used for communication.
 - JSON is a common format for exchanging data.
*/


/*
 ========================================
 Simple Real-World Example
 ========================================

 Scenario: A user wants to view their profile.

 1- The user opens the Profile page.

 2- The frontend sends a request:

    GET https://mysite.com/api/users/1

 3- The backend receives the request.

 4- The backend retrieves the user's information
    from the database.

 5- The backend sends a response:

    {
      "id": 1,
      "name": "Ahmed",
      "email": "ahmed@example.com"
    }

 6- The frontend displays the user's information.


 Another Example: User Login

 1- User enters email and password.
 2- Frontend sends the credentials to the backend over HTTPS.
 3- Backend validates the credentials.
 4- Backend returns an authentication result.
 5- Frontend handles the response.
*/


/*
 ========================================
 What is Node.js?
 ========================================

 - Node.js is a JavaScript runtime environment.
 - It allows JavaScript to run outside the web browser.
 - It is commonly used to build backend applications and APIs.
 - Node.js can create HTTP servers and handle client requests.

 Important:
 - JavaScript is a programming language.
 - Node.js is a runtime environment, not a programming language.
 - We can use JavaScript for both frontend and backend development.
*/


/*
 ========================================
 Summary
 ========================================

 Frontend:
 - What the user sees and interacts with.

 Backend:
 - Processes requests and implements business logic.

 Client:
 - Sends requests to a server.

 Server:
 - Receives requests and provides responses or services.

 Database:
 - Stores and manages data.

 API:
 - Allows different applications to communicate.

 Node.js:
 - Allows JavaScript to run outside the browser,
   including on the backend.
*/