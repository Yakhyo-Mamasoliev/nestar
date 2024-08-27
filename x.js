// /*----------------------------------------------------------------
// // // 95. Let's build NestJS and the ZOO Rest API project
// //     1 What is NestJS
// //     2 NestJS ingredients
// //     3 Module Decorator and its components
// //     4 Zoo Project

// // common nestjs terminal commands
// //     - nest g module cat => creates cat folder(with controller) in src folder
// //     - nest g controller cat => creates cat folder(with controller) in src folder
// //     - nest g service cat => creates cat folder(with service) in src folder

// // - Nestar
// //     Front - NextJS
// //     Back - NESTJS

// //     No Redux cos no errors come form backend
// //     Redux = not only it has store but it also check type

// // NestJS is a framework for building backend

// // **Paradigms:**
// // 1. **OOP**: Encapsulates data and behavior in objects.
// // 2. **AOP**: Modularize cross-cutting concerns.
// // 3. **Functional Programming**: Emphasizes pure functions and immutability.
// // 4. **Reactive Programming**: Handles asynchronous data streams.

// // // Nestar includes 4 patters
// // // 1) MVC        A.P
// // // 2) DI         A.P
// // // 3) Middleware D.P
// // // 4) Decorator  D.P

// // Express is good for building large projects.

// NestJS GraphQL Ingredients:
// 1. Resolver: Creates GraphQL API queries and mutations.
// 2. Modules: Define dependencies and organize the application.
// 3. Services: Contain business logic.
// 4. Guards: Implement authorization.
// 5. Pipes: Transform and validate input data. (DTO)
// 6. Interceptors: Execute code before and after resolver functions. => who is entering or exiting from the server. In Burak project we did this through request responses.

// Pipes: checks mostly validation of data, (correct type of data is being communicated among front and backend.)
// In Burak project we see pipes in two examples, not entering wrong data to backend and not giving wrong data from backend

// // Dependencies is required files
// // DevDependency extra files

// // The package.json file is a JavaScript Object Notation (JSON) file that serves as a central hub for managing a Node.js project's metadata, dependencies, scripts, and other essential information. It's located in the root directory of the project and helps with project management and configuration.

// // DataBaseCollection is inside of Module. The order of Modules does not matter, they start to exec at the same time and whichever execs first it gives log.

// // metadata => is features.
// // app in main.ts is like app = instance of express and nestjs
// // main.ts is same as server.ts in Burak, or index.ts in burak-react. Cos we are integrating global environments in this file.
// // but graphql global integration is in app.module => GraphModule.forRoot()
// //

// // Decorator => enrich a js class

// // ----------------------------------------------------------------
// // 96 Nestar Monorepo Start
// // two types of starting project
// //   - 1 standard mode,
// //       - "$ nest new my-project"
// //       - if project is single server

// //   - 2 Monorepo mode,
// //       - "$ nest new my-monorepo"
// //       - if project is multiple server(not just one ipe server, batch server, crawling server, )

// // rest api vs graphql
//    1.  - eg: member.points
//           member.status
//           member.password.
//     -rest api => it calls all of them even if you need "member.points"
//     -gql api => only brings member.points

//     2.    eg: order api
//           order item api
//           order product api
//     -rest api => you need to request one-by-one
//     -gql api => you can request all of them together

//     in gql it requests in secure format.

// ----------------------------------------------------------------
// // 98 Create, connect New DB. Writing Enums
// MONGO_DEV same link =>
// MONGO_PROD same link => renew later
// We do not use db of production cos it is risky(data of customers)

// -InjectConnection: Injects a Mongoose connection instance.
// -MongooseModule: Integrates Mongoose with NestJS.
// -Connection: Represents a Mongoose connection to the database.

// Connection ready state
//      * - 0 = disconnected
//      * - 1 = connected
//      * - 2 = connecting
//      * - 3 = disconnecting
//      * - 99 = uninitialized
// forRootAsync()  vs forRoot
// () => forRoot() is used when you have a static or synchronous configuration for the module. You provide the configuration directly as an object.
//     MongooseModule.forRoot('mongodb://localhost:2007');

// forRootAsync() => Configures the Mongoose connection asynchronously.
// useFactory() =>  Provides a function to create the Mongoose configuration object. (such as selecting between production and development databases.)

// URI = A Uniform Resource Identifier (URI) is a formal system for identifying resources.
// URL = a Uniform Resource Locator (URL) is a type of URI that identifies a resource by its location.
// Purpose:
// A URI's primary goal is to locate a resource, while a URL's primary goal is to obtain a resource's location or address.
// What they identify:
// A URI can identify HTML, XML, and other files, while a URL can only identify web pages.

// run start:prod may not work on windows, later we run this using docker.container

// String - MongoDB schemas
// string - TS primitive datatype => for variables, properties, functions.

// **`index: { unique: true }`** ensures all documents have a unique field value, while **`index: { unique: true, sparse: true }`** ensures uniqueness only among documents that have the field defined.
// when required is true, then no need to use sparse, use sparse when it is optional

// memberPassword: {
// 		select: false, // not included in query
// 	},

// registerEnumType => to read enum types in graphQL

// capitalizing enum values is a common practice to indicate that they are constants.

// PropertySchema.index({ propertyType: 1, propertyLocation: 1, propertyTitle: 1, propertyPrice: 1 }, { unique: true });
// => 1 is for ascending order, not for unique id;
// => unique: true is for uniques while not possible to create 4 same ids

// In GraphQl API Server, we use Resolvers (Controller in MVC) => Resolver=> Models => DB

// - in nest-cli.json file we are ordering to run start dev for main.ts commands.
// ----------------------------------------------------------------
// 99 Creating Member Module, Resolver va Service
// @Module Decorator Properties
// - providers: Array of providers to be available within the
// module via dependency of injection.
// -controllers: Array of controllers to be instantiated within the module.
// -exports: Array of providers to export to other modules.
// -imports: List of modules required by this module.

// -Using models is good feature of AOP

// -nestjs terminal commands
//     -nest g module components/auth => creating module inside a folder
//     -nest g service components/member --no-spec => it creates service.ts without spec.ts file

// -playground is same as postman in GraphQl, but we use postman for its better interface
// -playground of GraphQl is so great because it generates its documentation on its own.

// -main > app.module > components.module > member.module > resolver > service.model

// query = get in RESTAPI
// mutation = other than GET in RESTAPI

// @Injectable() vs @Resolver() vs @Module()
// @Injectable() => decorator marks a class as a provider that can be injected into other parts of a NestJS application.
// @Resolver() => Resolvers are responsible for handling GraphQL queries and mutations
// @Module() => is used to define a NestJS module, which organizes the providers, controllers, and other dependencies of your application.

// @Injectable() and @Resolver() do not return anything directly, but rather add metadata to the classes they decorate.
// @Module() returns a module metadata object that NestJS uses to configure and manage the  application structure.

// memberService: MemberService in resolver file =>
//     memberService - object
//     MemberService - class

// MemberSchema object is created via Schema class.

// forFeature
// Used to define and register Mongoose models within a specific module.
// Accepts an array of objects specifying the name of the model and the schema definition.

// DataBase sub-category
// Cluster=>Database>Collection>Document>Dataset
// MONGO_ATLAS=>NESTAR=>MEMBERS=>JOHN=>ADDRESS

// New Property entry: all required types and default types are build.

// -----------------------------------------------------------

// Questions:
// -Why put configModule in config and not in nestjs/common[common package]? Brian
// -ingridients
// -graphql tarkiibi
// -mock interview
// -review DataBase /(2 args Joseph?)
// -injection vs instance same thing?
// -MOdelSchema
//     a. member.module.ts > featuring (telling it exist in Model)
//     b. member.service.ts > inject
//     first a then b

// - json format

// ---------------------------------------------------------------
// 100. Building SignUp and Login algorithms
// Validation Types

// 1. Frontend Validation: This happens in the user's browser using HTML or JavaScript before data is sent to the server. It checks things like whether fields are filled correctly (e.g., valid email, strong password).

// 2. Pipes Validation: As data moves toward the server, it is validated in stages (or "pipes") to ensure it meets required criteria before reaching the backend.

// 3. Backend Validation: Once the data reaches the server, it is validated against existing data in the database to ensure consistency and prevent duplicates or conflicts.

// 4. Database Validation: This final step ensures that the data fits within the defined schemas of the database, maintaining data integrity.

// Pipes serve two key purposes:
//     -Transformation: Pipes convert input data into the correct format (e.g., from a string to an integer). This is done using the class transformation package.

//     -Validation: Pipes validate the input data. If valid, the data passes through unchanged; if not, an exception is thrown. This is handled by the class validator package.

// Pipes can be applied in three ways:
//     1.Global: Applied across the entire project, ideal for large projects.
//     2.Controllers (or Resolvers): Used within controllers, suitable for medium-sized projects.
//     3. Methods (within Controllers/Resolvers): Applied at the method level, best for small projects.
//     We'll start by using pipes within methods to better understand their functionality.

//     member.input.ts -> dto for from Front to Backend

//     member.ts -> dto for from Back to Front

// ---------------------------------------
// 101. Global Error Handling, Validation, Logging
// Plan:
// - Global Error Handling,
// - Validation,
// - Logging standards

// =================================================================

// 2024-08-27
// 103th Lesson
// Develop Authentication and Authorization process via Guard Decorator and Custom Decorators

// 1) Authentication
// 2) Authentication vs Authorization
// 3) Guards, Decorators on them

// ===========================================
// Authentication - we can make it in 3 ways:

// 1) Sessions (Cookies) => Burak
// 2) Tokens (Cookies)
// 3) Tokens(Headers) => Web & Mobile App

// 1) Sessions (Cookies) => We use sessions to keep track of authenticated users. The server generates a session ID for each user, and the client sends this session ID in the cookie when making requests. The server uses the session ID to identify the user and provide access to their resources.

// 2) Tokens (Cookies) => We use tokens to authenticate users. Instead of sending the session ID in the cookie, the server generates a token for each user, and the client sends this token in the Authorization header when making requests. The server verifies the token to ensure it is valid and provides access to the user's resources.

// 3) Tokens (Headers) => We can also use tokens in the Authorization header. Instead of sending the session ID in the cookie, the server generates a token for each user, and the client sends this token in the Authorization header when making requests. The server verifies the token to ensure it is valid and provides access to the user's resources.

// --------------------------------------------

// Authentication vs Authorization
// Authentication and authorization are both important processes that work together to secure applications and data. Authentication verifies the identity of a user or service, while authorization determines what that user or service can access. Authentication is a prerequisite to authorization, meaning that authorization only takes place after authentication has been completed.

// After deleting a collection in MongoDB, restart the project to automatically recreate the deleted collection (e.g., delete the "members" collection, then restart to generate an empty "members" collection).
