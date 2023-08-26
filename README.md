# SignUpInFullStackPage

## Description

The **SignUpInFullStackPage** project is a two-page small web application built using React and Node.js. It provides users with the ability to sign up and sign in, while also securely storing user data in a MongoDB cluster.

### Features

- **Sign Up and Sign In:** The application offers a user-friendly interface to sign up and sign in. Users can create an account by providing their details, and existing users can securely log in.

- **MongoDB Integration:** User data is stored in a MongoDB database. When a user signs up, their information is stored in a MongoDB cluster, ensuring data persistence and security.

- **React Components:** The project is structured using functional React components. This allows for modularity and reusability, making it easier to maintain and extend the application.

### Usage

To get started with the **SignUpInFullStackPage** project, follow these steps:

1. **Clone the Repository:**

   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/SignUpInFullStackPage.git

2. **Navigate to the Project Directory:**
   Move into the project directory:
    ```bash
     cd SignUpInFullStackPage
3. **Install Dependencies and Start the Front-End:**
   Navigate to the client directory and install the required dependencies:
    ```bash
     cd ./client
     npm i node_module
     npm start     
4. **Update the Existing .env File:**
   Navigate to the server directory .env file :
   
     Open the .env file in your preferred text editor. In the .env file,
     find the line that starts with MONGODB_URL and update it with your MongoDB cluster connection URL:
        
       MONGODB_URL=mongodb+srv://your-email:your-password@your-cluster.lgxy4ae.mongodb.net/?retryWrites=true&w=majority

      Replace your-email, your-password, and your-cluster with your actual MongoDB credentials.

5. **Install Dependencies and Start the Backend-End:**
   Navigate to the server directory and install the required dependencies:
    ```bash
     cd ./server
     npm i node_module
     npm start
Now you have both the front-end and back-end running locally. You can access the application in your web browser and interact with its sign-up and sign-in features.

### Contributing
Contributions are welcome! If you'd like to contribute to the project, feel free to submit pull requests or raise issues.

### License

This project is licensed under the MIT License.

**MIT License**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The MIT License is a permissive open source license that allows you to do whatever you want with the source code, as long as you provide appropriate attribution and don’t hold the author liable. It is simple and easy to understand.

For more details, see the [LICENSE](LICENSE) file.
