# CONTACT MANAGER APP BACKEND

Welcome to the Contact Manager App Backend! This application provides a backend server for managing contacts. It includes authentication features and CRUD operations for contacts.

## Features

- User authentication: Users can sign up, log in, and log out securely.
- Create, Read, Update, Delete (CRUD) operations for contacts.
- Secure endpoints with authentication middleware.
- API documentation available.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your preferred database)
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/arjunbector/Contact-Manager-Backend.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```PORT=3000
MONGODB_URI=<your_database_connection_string>
ACCESS_TOKEN_SECRET=<your_jwt_secret_key>
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=<your_jwt_secret_key>
REFRESH_TOKEN_EXPIRY=30d
```

4. Start the server:

```bash
npm start
```

The server will start running on the specified port.

## API Documentation

### Authentication Endpoints

#### Sign Up

- **URL:** `/api/users/register`
- **Method:** `POST`
- **Body Parameters:**
  - `username` (string): User's username.
  - `email` (string): User's email address.
  - `password` (string): User's password.

#### Log In

- **URL:** `/api/users/login`
- **Method:** `POST`
- **Body Parameters:**
  - `email` (string): User's email address.
  - `password` (string): User's password.

#### Update User

- **URL** : `/api/users/update`
- **Method**: `PUT`
- **Headers:**
  - `Authorization`: Bearer token obtained after logging in.
  
#### Log Out

- **URL:** `/api/auth/logout`
- **Method:** `GET`
- **Headers:**
  - `Authorization`: Bearer token obtained after logging in.

### Contact Endpoints

#### Get All Contacts

- **URL:** `/api/contacts`
- **Method:** `GET`
- **Headers:**
  - `Authorization`: Bearer token obtained after logging in.

#### Get Single Contact

- **URL:** `/api/contacts/:contactId`
- **Method:** `GET`
- **Headers:**
  - `Authorization`: Bearer token obtained after logging in.

#### Create Contact

- **URL:** `/api/contacts`
- **Method:** `POST`
- **Headers:**
  - `Authorization`: Bearer token obtained after logging in.
- **Body Parameters:**
  - `name` (string): Contact's name.
  - `email` (string): Contact's email address.
  - `phone` (string): Contact's phone number.

#### Update Contact

- **URL:** `/api/contacts/:contactId`
- **Method:** `PUT`
- **Headers:**
  - `Authorization`: Bearer token obtained after logging in.
- **Body Parameters:**
  - `name` (string): Contact's name.
  - `email` (string): Contact's email address (optional).
  - `phone` (string): Contact's phone number (optional).

#### Delete Contact

- **URL:** `/api/contacts/:contactId`
- **Method:** `DELETE`
- **Headers:**
  - `Authorization`: Bearer token obtained after logging in.
