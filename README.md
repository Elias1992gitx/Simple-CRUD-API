# Simple CRUD API using In-Memory Database

This is a simple CRUD (Create, Read, Update, Delete) API implemented using an in-memory database. It allows you to perform basic operations on a collection of persons.

## Technologies Used

- Node.js
- Express.js
- browser or Postman (optional) for testing API endpoints

## Setup Instructions

1. Clone the repository to your local machine.

2. Install Node.js if you haven't already. You can download it from the official Node.js website: [https://nodejs.org](https://nodejs.org)

3. Open a terminal or command prompt and navigate to the project directory.

4. Install the project dependencies by running the following command:
   ```
   npm install
   ```

5. Start the server by running the following command:
   ```
   node index.js
   ```

6. The server will start running on `http://localhost:3000`.

## API Endpoints

- `GET /person`: Retrieves all persons in the database.

- `GET /person/:personId`: Retrieves a specific person by their ID.

- `POST /person`: Creates a new person. Requires a JSON payload in the request body with the following fields: `name` (string), `age` (number), and `hobbies` (array of strings).

- `PUT /person/:personId`: Updates an existing person by their ID. Requires a JSON payload in the request body with the fields you want to update: `name` (string), `age` (number), and/or `hobbies` (array of strings).

- `DELETE /person/:personId`: Deletes a person by their ID.

## Error Handling

- If a requested person is not found, a 404 error will be returned with the message "Person not found".

- If a required field (name or age) is missing in the request body of `POST` or `PUT` requests, a 400 error will be returned with the message "Name and age are required fields".

- For any other errors, a 500 error will be returned with the message "Internal server error".

## Usage

You can use tools like Postman to interact with the API endpoints and test different operations on the persons collection.

Example requests:

- Get all persons:
  ```
  GET http://localhost:3000/person
  ```

- Get a specific person by their ID:
  ```
  GET http://localhost:3000/person/{personId}
  ```

- Create a new person:
  ```
  POST http://localhost:3000/person
  Content-Type: application/json

  {
    "name": "John Doe",
    "age": 30,
    "hobbies": ["reading", "hiking"]
  }
  ```

- Update an existing person:
  ```
  PUT http://localhost:3000/person/{personId}
  Content-Type: application/json

  {
    "name": "Updated Name",
    "age": 35,
    "hobbies": ["swimming", "traveling"]
  }
  ```

- Delete a person:
  ```
  DELETE http://localhost:3000/person/{personId}
  ```

## Notes

- This API implementation uses an in-memory database, which means the data will be lost when the server is restarted.

