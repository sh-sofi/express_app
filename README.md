# Express_app

This is a basic project built with Express.js to demonstrate fundamental web application development techniques (CRUD operations, session-based authentication, and middleware integration for secure web application development) using Node.js.

## Table of Contents

- [Instruction](#instruction)
- [Technologies Used](#technologies-used)
- [Demo](#demo)
- [Endpoints](#endpoints)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Instruction

### Getting Started

Follow the steps below to run this project locally.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**
- **npm**

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/sh-sofi/express_app.git
   cd express_app
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the main directory with the following variables:

- `PUBLIC_PORT`: Specify the port for the local server.
- `WEB_TOKEN_SECRET_KEY`: Your secret key for generating JSON Web Tokens (JWT).
- `SESSION_SECRET_KEY`: Your secret key for session management.

4. Start the application:

   ```bash
   npm run start:dev
   ```

5. Open Postman for testing the API.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **EJS**: Template engine for dynamic HTML rendering.
- **JWT (JSON Web Token)**: Used for secure user authentication.
- **sqlite3**: Lightweight SQL database engine for storing user data.
- **bcryptjs**: For password hashing.
- **express-session**: Middleware for session management.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens.
- **nodemon**: Development tool for automatic server restarts.

## Demo

![Home Page Screenshot](./public/express-app-postman.PNG)

Note: This example contains test user data with hashed passwords. These are not real credentials and are used for demonstration purposes only.

## Endpoints

Here is a list of available endpoints in the project:

| **HTTP Method** |   **Path**   |                          **Description**                           |                     **Middleware**                     | **Required Role** | **Expected Response Status** |
| :-------------: | :----------: | :----------------------------------------------------------------: | :----------------------------------------------------: | :---------------: | :--------------------------: |
|     `POST`      |  `/signin`   | User authentication. Returns an access token upon successful login |                           -                            |         -         |           `200 OK`           |
|     `POST`      |  `/signup`   |                        Register a new user                         |                           -                            |         -         |        `201 Created`         |
|      `GET`      | `/users/me`  |               Get information about the current user               | `authenticated`, `hasRole`, `addCurrentUserIdToParams` |  `limited_user`   |           `200 OK`           |
|      `GET`      |   `/users`   |                      Get a list of all users                       |               `authenticated`, `hasRole`               |      `admin`      |           `200 OK`           |
|      `GET`      | `/users/:id` |           Get user information by ID if the user exists            |               `authenticated`, `hasRole`               |      `admin`      |           `200 OK`           |
|     `POST`      |   `/users`   |                         Create a new user                          |               `authenticated`, `hasRole`               |      `admin`      |        `201 Created`         |
|      `PUT`      | `/users/:id` |             Update user information if the user exists             |               `authenticated`, `hasRole`               |      `admin`      |           `200 OK`           |
|    `DELETE`     | `/users/:id` |                        Delete a user by ID                         |               `authenticated`, `hasRole`               |      `admin`      |       `204 No Content`       |

## Features

- **Session Management**: Secure user sessions with cookies.
- **Authentication & Authorization**: Implemented login functionality.
- **CRUD Operations**: Basic create, read, update, and delete functionality for user data.
- **Middleware**: Includes custom and third-party middleware for enhancing functionality.

## Contributing

This is a learning project, so contributions are not expected. However, feel free to fork and experiment with it. For suggestions or feedback, please open an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

##

Repository created during the course by ITVDN "Node.js Essential".

Special thanks to the course instructor for guidance and learning materials. 🙌
