/* 
 PROJECT STANDARDS
-Login Standards (Morgan P)
-Naming Standards
    function, method, variables =>  Camel case: addNumbers
    class => Pascal:MyProfile
    folder file => kebab:api-service.js
    css => snake:header_container
-Error handling 


types of API (REQUEST):
    Traditional API
    Rest API
    GraphQL API
    ...


TYPES OF BUILDING FRONTEND DEVELOPMENT
        1. TRADITIONAL FD => BSSR(ADMIN) => EJS
        2. MODERN FD => SPA(Users` application) => REACT LIBRARY



Cookies
 request join (can attach to each req)
 self destroy

Validation(Database): 
    Frontend Validation (Client)
    Backend Validation(Server)
    Database Validation(Schema)

BURAK: Client | Server | Schema
Nestar: Client | DTO(Data Transfer Object | Server | Schema

DTO CLIENT <=> SERVER  

Authentication built 2 types
1. Session
2. Token


Web Browser Storage
1. local storage        => 
2. session storage      => 
3. cookie storage       => sessions
4. cage storage         => images, files







app file = Express file


```javascript
1; .env Storing sensitive information

2; dependency => we need in production
devdependency => in development and testing

3; Moment.js is js library commonly used for handling date and time manipulation in JavaScript. It provides functionalities such as parsing, validating, manipulating, and formatting dates and times.

4; Static vs Dynamic Typing
Static vs. Dynamic defines how a language expects you to declare data types. Static typed languages require explicit definition of a data type when they create a piece of data (e.g. variable, parameter, return value). Dynamic languages are the opposite and can infer, or at least try to guess, the type that we're using.

5; .env file is commonly used to store environment variables in a project. These variables typically contain sensitive information or configuration settings that may vary between different environments (e.g., development, staging, production).

6; Git comments =
git add .
git commit -m "comment"
git push origin or master

git status
git reset --hard => (discards last changes)
git log --oneline => shows git commits
git commit --amend => is used in Git to modify the most recent commit (not yet pushed one only)

res.render("home");, it's telling the server to use a template named "home" to create a web page.

7; mvm- minimum final product ( minimum features necessary to satisfy)

8; mongoose is a package for using MongoDB in Node.js applications. It provides a straight-forward, schema-based solution to model

8; file path directory

One-Dot- current path from "./types/common";

Two-Dot- parent path from "../types/common";

Three-Dot- parent-parent path from "../../types/common";

9; static method
we cannot create instance for static methods

10; Chained Query in Mongoose
adding additional queries for queries
```







HTTP Requests: On the internet, your web browser sends requests to servers when you visit websites. These requests ask for specific information, like a webpage or data.

Why Express: Express is a toolbox for building web applications in JavaScript. It provides tools and rules to handle requests and send responses. Express makes managing interactions, like viewing webpages or using app features, easier.

Creating an Express App: Writing const app = express(); means "Let's create a web app using Express." Think of app as our workspace for building the website or app.

HTTP Methods: These are actions for requests. For instance, GET gets information from a server, while POST adds data to a server.

Routing: In Express, we use routes to direct requests to different parts of our app. If someone asks for /about, we show them info about our website using routes.

Middleware: Middleware acts like a filter for requests, performing actions before they reach their final destination. It's useful for tasks like checking if a user is logged in or logging request info.
*/

/* 





Notes
- Browser only accepts get, not update or delete methods. 
- get only used for providing pages, while post is used for creating or updating data.
- We mostly use get and post from postman:  
    -get(requesting data from database), 
    -post(creating, delete). This is most common case in many companies. 


Lesson 41 - Member Service Model (Admin Signup)

Plans
 - What is API snf its types
 - We develop complete signup API for Adminka

Notes
- API stands for Application Programming Interface. It is kinda waiter takes orders from customer and go to chef and takes food and gives it to customer.


POSTMAN
    - post request has 
        body
        header



    44 - LESSON
    SPA: login va signup 
    
    2 
        
        - refactoring: simplifying algorithm

45 LESSON: EJS - ADMIN FRONTEND DEVELOPMENT
Plans: 
- create admin frontend pages
- create frontend css, image, javascript folder and files
- call external packages in frontend and use bootstrap for css design
- create header and footer

Note: 
- 


46 LESSON: Authentication - Sessions*
1. development of authentication process
2. developing checkAuthSessions API as a test
3. discussing how sessions work
4. create logout API 

1.1 Authentication: 
- we install connect-mongodb-session(^3.1.1) and express-session(^3.1.1)  in dependency, and install their types in dev dependency.
    - "express-session" - A middleware for Express that manages user sessions by storing session data on the server side. It provides a way to create, manage, and destroy user sessions.     
    - "connect-mongodb-session"  with express-session to store session data in MongoDB.

- MongoDBStore - Exports a single function that returns a MongoDBStore class for storing sessions in MongoDB.


47-Lesson: Product Controller
Plan: 
 - Create MVC related to Product
 - Create restaurant verification middleware algorithm 
 - learn how to create browser local variables 
 - create algorithm of how to upload fil;es to server

Notes: 
- 

48-Lesson: PRoduct Schema Model


49-LESSON 

- Auto migration using your project refers to the process of automatically updating your database schema based on changes made to your TypeScript models.

5-LESSON: Product - Service Model (getAllProducts)


51-LESSON Service Model (getUsers, updateChosenUser)
- develop getUsers API
- develop updateChosenUser API

52-LESSON EJS - Publishing Admin Frontend
- uploading CSS, JS, and image files to adminka frontend
- uploading ejs files to adminka project
- learning some animation packages which can be useful in frontend

Lesson-53: EJS - Admin Login jarayoni tahlili 
- types of Request
- Admin login jarayoni tahlili
- Admin logout jarayoni tahlili

LESSON54 - EJS - Frontend signup jarayonini develop qilamiz
 - Learn jQuery
 - Validation and frontend validation
 - Build Image Preloading 
 - Completing Adminka Signup

types of API (REQUEST):
    - Traditional API (html elementlari asosida amalga oshiriladi, eg: request in form format )
    - Rest API (React Project, (exchange of JSON data))
    - GraphQL API
    ...



// webp may not work in some older browsers, so use svg
// mvc framework. c or any other can drop, we can build project omitting other parts

// Backend starts here
/* train.ts from Martin`s notes

 PROJECT STANDARDS
-Login Standards (Morgan P)
-Naming Standards
    function, method, variables =>  Camel case: addNumbers
    class => Pascal:MyProfile
    folder file => kebab:api-service.js
    css => snake:header_container
-Error handling 


types of API (REQUEST):
    Traditional API
    Rest API
    GraphQL API
    ...


TYPES OF BUILDING FRONTEND DEVELOPMENT
        1. TRADITIONAL FD => BSSR(ADMIN) => EJS
        2. MODERN FD => SPA(Users` application) => REACT LIBRARY



Cookies
 request join (can attach to each req)
 self destroy

Validation(Database): 
    Frontend Validation (Client)
    Backend Validation(Server)
    Database Validation(Schema)

BURAK: Client | Server | Schema
Nestar: Client | DTO(Data Transfer Object | Server | Schema

DTO CLIENT <=> SERVER  

Authentication built 2 types
1. Session
2. Token


Web Browser Storage
1. local storage        => 
2. session storage      => 
3. cookie storage       => sessions
4. cage storage         => images, files







app file = Express file


```javascript
1; .env Storing sensitive information

2; dependency => we need in production
devdependency => in development and testing

3; Moment.js is js library commonly used for handling date and time manipulation in JavaScript. It provides functionalities such as parsing, validating, manipulating, and formatting dates and times.

4; Static vs Dynamic Typing
Static vs. Dynamic defines how a language expects you to declare data types. Static typed languages require explicit definition of a data type when they create a piece of data (e.g. variable, parameter, return value). Dynamic languages are the opposite and can infer, or at least try to guess, the type that we're using.

5; .env file is commonly used to store environment variables in a project. These variables typically contain sensitive information or configuration settings that may vary between different environments (e.g., development, staging, production).

6; Git comments =
git add .
git commit -m "comment"
git push origin or master

git status
git reset --hard => (discards last changes)
git log --oneline => shows git commits
git commit --amend -m "abc" => is used in Git to modify the most recent commit (not yet pushed one only)

res.render("home");, it's telling the server to use a template named "home" to create a web page.

7; mvm- minimum final product ( minimum features necessary to satisfy)

8; mongoose is a package for using MongoDB in Node.js applications. It provides a straight-forward, schema-based solution to model

8; file path directory

One-Dot- current path from "./types/common";

Two-Dot- parent path from "../types/common";

Three-Dot- parent-parent path from "../../types/common";

9; static method
we cannot create instance for static methods

10; Chained Query in Mongoose
adding additional queries for queries
```







HTTP Requests: On the internet, your web browser sends requests to servers when you visit websites. These requests ask for specific information, like a webpage or data.

Why Express: Express is a toolbox for building web applications in JavaScript. It provides tools and rules to handle requests and send responses. Express makes managing interactions, like viewing webpages or using app features, easier.

Creating an Express App: Writing const app = express(); means "Let's create a web app using Express." Think of app as our workspace for building the website or app.

HTTP Methods: These are actions for requests. For instance, GET gets information from a server, while POST adds data to a server.

Routing: In Express, we use routes to direct requests to different parts of our app. If someone asks for /about, we show them info about our website using routes.

Middleware: Middleware acts like a filter for requests, performing actions before they reach their final destination. It's useful for tasks like checking if a user is logged in or logging request info.
*/

/* 

Notes
- Browser only accepts get, not update or delete methods. 
- get only used for providing pages, while post is used for creating or updating data.
- We mostly use get and post from postman:  
    -get(requesting data from database), 
    -post(creating, delete). This is most common case in many companies. 


Lesson 41 - Member Service Model (Admin Signup)

Plans
 - What is API snf its types
 - We develop complete signup API for Adminka

Notes
- API stands for Application Programming Interface. It is kinda waiter takes orders from customer and go to chef and takes food and gives it to customer.


POSTMAN
    - post request has 
        body
        header



    44 - LESSON
    SPA: login va signup 
    
    2 
        
        - refactoring: simplifying algorithm

45 LESSON: EJS - ADMIN FRONTEND DEVELOPMENT
Plans: 
- create admin frontend pages
- create frontend css, image, javascript folder and files
- call external packages in frontend and use bootstrap for css design
- create header and footer

Note: 
- 


46 LESSON: Authentication - Sessions*
1. development of authentication process
2. developing checkAuthSessions API as a test
3. discussing how sessions work
4. create logout API 

1.1 Authentication: 
- we install connect-mongodb-session(^3.1.1) and express-session(^3.1.1)  in dependency, and install their types in dev dependency.
    - "express-session" - A middleware for Express that manages user sessions by storing session data on the server side. It provides a way to create, manage, and destroy user sessions.     
    - "connect-mongodb-session"  with express-session to store session data in MongoDB.

- MongoDBStore - Exports a single function that returns a MongoDBStore class for storing sessions in MongoDB.


47-Lesson: Product Controller
Plan: 
 - Create MVC related to Product
 - Create restaurant verification middleware algorithm 
 - learn how to create browser local variables 
 - create algorithm of how to upload fil;es to server

Notes: 
- 

48-Lesson: PRoduct Schema Model


49-LESSON 

- Auto migration using your project refers to the process of automatically updating your database schema based on changes made to your TypeScript models.

5-LESSON: Product - Service Model (getAllProducts)


51-LESSON Service Model (getUsers, updateChosenUser)
- develop getUsers API
- develop updateChosenUser API

52-LESSON EJS - Publishing Admin Frontend
- uploading CSS, JS, and image files to adminka frontend
- uploading ejs files to adminka project
- learning some animation packages which can be useful in frontend

Lesson-53: EJS - Admin Login jarayoni tahlili 
- types of Request
- Admin login jarayoni tahlili
- Admin logout jarayoni tahlili

LESSON54 - EJS - Frontend signup jarayonini develop qilamiz
 - Learn jQuery
 - Validation and frontend validation
 - Build Image Preloading 
 - Completing Adminka Signup

types of API (REQUEST):
    - Traditional API (html elementlari asosida amalga oshiriladi, eg: request in form format )
    - Rest API (React Project, (exchange of JSON data))
    - GraphQL API
    ...

LESSON 55 Develop Products Frontend Page 

// nested rooting - creating roots inside roots

// Lesson 66- ordersPage
// -Material UIning Tap Panel Component
// -Publishing ordersPage screen components and sectional components.

// Accordion (mui)
// The Accordion component lets users show and hide sections of related content on a page.

// Lesson 66- ordersPage
// member - signup, login process and Token Authentication

// SSR: The server generates and sends a ready HTML file to the users.
// SPA: The server sends minimal HTML and JavaScript files. The React (or other frameworks) in the browser fetches data (usually in JSON format) from APIs and dynamically generates the HTML.

// Authentication Process
// 1. Sessions(using Cookies)
// 2. Tokens (using Cookies)
// 3. Tokens (using Headers)


// Cookie parser => Used to save tokens in cookies so they can persist in the browser after user login, allowing the token to travel with the browser for subsequent requests. It acts as middleware.

Aggregation framework is used to perform operations such as filtering, sorting, grouping...
Aggregation pipeline has stages. 
  - it has 1 array arg. cos it executes its so called 'methods' consequently and in the end it deals with db once
// order of execution is so important
// Aggregation pipeline has only one argument which is a list.
// Lookup. We used lookup inside aggregation to show ordered items to the user on order-page

 14.17




TODO:  Param-Query types,  how to call
Query 
const  query = req.query;
console.log("query", query);
postman. localhost:3003/product/all?name=david&age=28

Param
postman. localhost:3003/product/all/david
router.ts "/product/all/:id"
GET only has Headers (sending data to backend through url in postman)
main difference is query is after ? symbol. 

GET method can do all job POST does, but this is not preferable
get => retrieve data
post => mutate data

shaping in ts => introducing such data has such type

async & await
  - async declares this is async function and always returns a promise. 
  - await pauses the async function and wait for the async function to complete. only used inside async functions

match: T = ... 
    T is our customized type for object which`s key is string and value is any. 
       import interface T {[key: string]: any}
         


Dynamic Key Integration = it refers to using variables to to define or access property keys in objects. This is useful when we do not know the type of the key in advance. Eg: 
     const sort: T =
      inquiry.order === "productPrice"
        ? { [inquiry.order]: 1 }  //[] inquiry.order is not array but this is a key of object.
        : { [inquiry.order]: -1 };



 const result = await this.productModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        { $skip: (inquiry.page * 1 - 1) * inquiry.limit }, 
        { $limit: inquiry.limit * 1 }, 
      ])
      .exec();






// 75 getProducts
// Promise<Product[]> "async => Promise, product of array => Product[]

// 76-77 develop getMyOrders updateOrder rest API
// verifyAuth = always ask req, no next step
// retrieveAuth = no need to be logged user, if it is a logged user then makes req=user, also  otherwise also shows next step
// Inside an Pending object all execution occurs at the same time.
// Pending Object it waits till an action completes inside an object
// Promise.all => We cannot use iterative function(for, for-each) with async conditions\. So we use an Promise.all
// POST has header and body
// T-type is any, our choice/ T is used to get Object value of any. T {key: string, value: any}
// Number (capital letter): to convert eg: page: Number(page)
// number (lowercase letter): ts related eg: memberPoints: number

/* 78
Hooks - useState and useEffect React Hooks
React Functional components - any function used in react, for components we use function not class in react
Hooks are functions in React that let you use state and other React features in functional components, without needing class components. It allows to catch changes in operations
to use states we use use-state hook
to use life cycle methods we use use-effect
State in React is a built-in object that is used to contain data or information about the component. State can change over time, and when it does, the component re-renders
Lifecycle Methods in React are special methods that get called at different stages of a component's life, such as when it is created, updated, or removed from the DOM.
In functional components, these lifecycle methods can be managed using the useEffect hook.
useEffect hook has 2 arg 1. CallBack function 2. array dependency eg:

Callback functions are functions that are deployed after the first function completes its task. They are frequently deployed in scenarios like managing asynchronous actions, such as retrieving data from a server, handling events and ensuring proper operation sequencing.

Reconciliation is React's way of diffing the virtual DOM tree with the updated virtual DOM to determine the most efficient way to update the real DOM.

Yes, the useEffect hook can handle all three 

Component will unmount is rare, other two is common


 useEffect(() => {
    console.log("ComponentDidMount"); // DATA Fetch
}, [array]);  //empty array => function only works once. if it has value and when value changes it also changes

 useState
When you call useState, it returns an array with two elements:
Current State Value: The current value of the state.
Setter Function: A function to update the state.

const [value, setValue] = useState<boolean>(true);
  // useState hook returns 2 values in array 1. value its type is boolean, with initial value true. 2.setValue function to update value 
  [] are used for array destructuring.

  destructuring allows to unpack values from arrays and object into variables
  eg: const [a, b] = [1, 2] =>array d.
  const {name, age} = {name: ALice, age: 25}
  
  we cannot use async await in useEffect cos it is synchronous 
  

dependency array is an array of values that the effect or memoized value depends on.

//@ts-nocheck => do not check ( at the beginning react file)
in react classes has use-state but functions do not so we use hooks to use use-state in functions
React component lifecycle methods:
1. Mounting (create)
   - constructor
   - static getDerivedStateFromProps
   - render
 + - componentDidMount
2. Updating (update)
   - static getDerivedStateFromProps
   - shouldComponentUpdate
   - render
   - getSnapshotBeforeUpdate
 + - componentDidUpdate
3. Unmounting (remove)
 + - componentWillUnmount
in short(devex)

1. **Mounting (create)**: `componentDidMount()` - This lifecycle method runs after a component is added to the DOM for the first time.

2. **Updating (update)**: `componentDidUpdate()` - This method runs after a component updates due to changes in state or props.

3. **Unmounting (remove)**: `componentWillUnmount()` - This method runs before a component is removed from the DOM, allowing you to clean up resources.
  - stage:  built-in object used to store data that can change over time within a component
  - Props (short for "properties") are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component.

They have triggering ability


eg:

  useEffect(() => {
    console.log("ComponentDidMount", count); // 1. ComponentDidMount
    setCount(count + 1);
    return () => { // 3. ComponentWillUnmount
      console.log("ComponentWillUnmount");
    };
  }, [value]); // => 2. ComponentDidUpdate

useEffect build what is updated
useState stores that state. both can be used separately
Webpage: What you see rendered in your browser, including text, images, and other content.
DOM: The representation of the webpage's structure that your browser creates from the HTML document. It includes elements, attributes, and text as nodes in a tree structure.

MVC is stateless(meaning it does not store,  so it is good for backend, Redux has store and hooks meaning it is has state so it si good for frontend. 
*/

/*  79 Redux
Plans:
- Review run of project
- Learn Redux architecture of our project
- Pros of Redux Toolkit

Review run of project
  - run (yarn run build) to compile our project
  - but, in the end of ts changes to js
  - if we type 'yarn run dev' it builds 'build' folder
        - build folder transfers all files in the development process of the project in ts or any to a js file to run them in production
  - yarn global add serve
  - serve -s build
  - yarn global add serve- 
       - Local:   http://localhost:3000 
       - Network:  http://192.168.1.234:3000 

  - we started our project with building SCHEMA MODELS
  - in full stack you are obliged to do what clients want not what you want oy what you can  
  - in redux we start with type integration to avoid "red" problems.
  - in Redux 
      slice => 
        - not only stores data on storage 
        - but checks correct types is being stored. 
      selector => 
        - to get data from store to view component
Learn Redux architecture of our project
  - library but most famous when its is used with react 
  - Redux is based on Flux architecture
  1. Vie/UI // during that useEffect works
  2. Action = Action Creator + Action Type 
  3. Reducer
  4. Store

  useState vs useMemo
  - useState doesn`t keep value when you move form one page to other page, useMemo does. 

  Additional Concept
    1. dispatch(so called 'slice' flow in Redux Toolkit) => Sends actions to the store to update the state.
      Action => Reducer 
    2. subscribe(so called 'selector' flow in Redux Toolkit) => Listens for state changes in the store. 
      Reducer => Store => View/UI

  - Follows the unidirectional data flow => one orderly direction
  - MVC we can use it for both front and backend, but no store
  - Redux, mostly or only used for frontend with react and other libraries. It has one store(storage)
  - MVC. Controllers handle entire logic
  - Redux. Reducer handle entire logic Action => Reducer => Store => View/UI
  - Reducers are functions that take the current state and an action as arguments, and return a new state result. 
  - Action's payload carries the data necessary to update the application state.
  - Debugging is the process of finding and fixing errors or bugs in the source code of any software.
    easier in Redux than MVC
  - Storage is open to all components
  - Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node. js. It simplifies the process of sending asynchronous HTTP requests to a server, and also handles the response.


Pros of Redux Toolkit
  - Redux Toolkit makes it easier to write good Redux applications and speeds up development,
  - With this Redux architecture is same, toolkit only make the work easier.

data fetch => data
    - useEffect method => fetching data from the backend
Data comes through actions to reducers, and through payloads it renews initial state. 

37mins  */

/*80-HomePage - Redux Slice and Selectors set up 
- to do homeScreen Component type integration
- to do Redux Storage configuration
- to do Redux Logger Middleware integration
- to test Redux Architecture

homeScreen Component type integration
  - Class Component = creating class and make it as an extension for react  

----------------------------------------------------------------
// Fetch zoom records 

   - 4 stages in redux 
      1. type integration => creating types in screen.ts
      2. reducer
      3. store
      4. selector
  

----------------------------------------------------------------
// 95. Let's build NestJS and the ZOO Rest API project 
    1 What is NestJS
    2 NestJS ingredients
    3 Module Decorator and its components
    4 Zoo Project

common nestjs terminal commands 
    - nest g module cat => creates cat folder(with controller) in src folder
    - nest g controller cat => creates cat folder(with controller) in src folder
    - nest g service cat => creates cat folder(with service) in src folder

----------------------------------------------------------------
96 Nestar Monorepo Start
two types of starting project 
  - 1 standard mode, 
      - "$ nest new my-project"
      - if project is single server
      
  - 2 Monorepo mode, 
      - "$ nest new my-monorepo"
      - if project is multiple server(not just one ipe server, batch server, crawling server, )












 */
