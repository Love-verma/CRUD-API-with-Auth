
# RESTful API with Node.js, Express, and MongoDB

This is a fully functional RESTful API built with Node.js and Express.js, using MongoDB for data storage. The API supports user registration, login with secure password hashing, CRUD operations, pagination, sorting, filtering, and JWT-based authentication.

## Features

- **User Registration**: Securely register users with hashed passwords.
- **User Login**: Authenticate users and generate JWT tokens for session management.
- **CRUD Operations**: Create, Read, Update, and Delete data items.
- **Pagination**: Retrieve data in paginated format.
- **Sorting**: Sort data based on user-defined fields.
- **Filtering**: Filter data based on query parameters.
- **Error Handling**: Comprehensive error handling with meaningful error messages.
- **Logging**: Log API requests for debugging and monitoring.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Bcrypt.js (for password hashing)
- Jsonwebtoken (for JWT authentication)
- dotenv (for environment variable management)

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- MongoDB (local installation or a cloud instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Love-verma/CRUD-API-with-Auth.git
   cd CRUD-API-with-Auth
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/rest-api-example
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### Authentication

- **Register a User**
  - **POST** `/api/auth/register`
  - **Request Body**:
    ```json
    {
      "username": "testuser",
      "email": "testuser@example.com",
      "password": "yourpassword"
    }
    ```

- **Login a User**
  - **POST** `/api/auth/login`
  - **Request Body**:
    ```json
    {
      "email": "testuser@example.com",
      "password": "yourpassword"
    }
    ```

### Data Items

- **Create Data Item**
  - **POST** `/api/data`
  - **Headers**: `Authorization: Bearer <token>`
  - **Request Body**:
    ```json
    {
      "name": "Item Name",
      "description": "Description of the item"
    }
    ```

- **Get Data Items**
  - **GET** `/api/data?page=1&limit=5&sort=createdAt`
  - **Query Parameters**:
    - `page`: Page number (default: 1)
    - `limit`: Number of items per page (default: 10)
    - `sort`: Field to sort by (e.g., `createdAt`, `name`)

- **Update Data Item**
  - **PUT** `/api/data/:id`
  - **Headers**: `Authorization: Bearer <token>`
  - **Request Body**:
    ```json
    {
      "name": "Updated Item Name",
      "description": "Updated description"
    }
    ```

- **Delete Data Item**
  - **DELETE** `/api/data/:id`
  - **Headers**: `Authorization: Bearer <token>`

## Testing with Postman

You can use [Postman](https://www.postman.com/) to test the API endpoints. Make sure to include the JWT token in the Authorization header for protected routes.

### Example Authorization Header:

```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

The API handles errors and returns meaningful messages. Common error responses include:

- **400 Bad Request**: For validation errors or missing fields.
- **401 Unauthorized**: When authentication fails or no token is provided.
- **404 Not Found**: When a requested resource does not exist.
- **500 Internal Server Error**: For server-related issues.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you want to add.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Bcrypt.js](https://github.com/kelektiv/node.bcrypt.js)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
