# TODO List API with Authentication

A RESTful API Todo List built with Node.js and Express.js offers user authentication (login and registration).

# Installation and Setup

## Getting Started
Make sure you have Node.js and npm installed on your system. You also need to install Express.js as framework backend, MongoDB as database and Mongoose as ODM.
## Steps your local machine
1. Clone the Repository
   
   ```
   https://github.com/RikaKamila/RestfulAPI_TodolistApp.git
   ```
   
3. Install Dependencies
   
   ```
    npm install
   ```
   
5. Run the Application
   
   ```
     npm start
   ```
   
7. Access API

   ```
   http://localhost:3001/todos
   ```

# Endpoint

## Authentication

### User Registration

POST /auth/regis

Request Body : 

```
  { 
    "username": "String", 
    "password": "String", 
    "name": "string", 
    "age": "Number", 
    "email":"String" 
  }
```

### User Login

POST /auth/login

Request Body : 

```
  { 
    "username": "String", 
    "password": "String", 
  }
```

## TODO List

* GET All Todos
  
GET /todos

Request Body :

```
  {
    "task": "String",
    "completed": "Boolean",
    "dueDate": "String",
    "priority": "String"
  }
```

* GET TodoById
  
GET /todos/{id}

Request Body :

```
  {
    "task": "String",
    "completed": "Boolean",
    "dueDate": "String",
    "priority": "String"
  }
```

* Add Todo
  
POST /todos

Request Body :

```
  {
    "task": "String",
    "completed": "Boolean",
    "dueDate": "String",
    "priority": "String"
  }
```

* Edit TodoById
  
PUT /todos/{id}

Request Body :

```
  {
    "task": "String",
    "completed": "Boolean",
    "dueDate": "String",
    "priority": "String"
  }
```

* Delete TodoById
  
DELETE /todos/{id}

Request Body :

```
  {
    "task": "String",
    "completed": "Boolean",
    "dueDate": "String",
    "priority": "String"
  }
```

* Delete AllTodos
  
DELETE /todos

Request Body :
 
```
  {
    "task": "String",
    "completed": "Boolean",
    "dueDate": "String",
    "priority": "String"
  }
```

## Testing

Using Postman for Testing Endpoint







