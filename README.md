# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# HCLHackthon

### Project Overview 
The Healthcare Patient Portal is designed to provide a seamless, secure, and user-friendly interface for both patients and healthcare providers. The goal is to create a personalized and efficient platform that ensures the privacy and security of sensitive healthcare data.

Key Technologies Used:
Frontend: React.js (with Context API/Redux for state management), Next.js, Sass for styling
Backend: Node.js, Express.js
Database: MongoDB (NoSQL database)
Authentication: JWT (JSON Web Tokens) for session management
Cloud Deployment: Deployed on a cloud platform such as AWS or Heroku
CI/CD: Implemented using GitHub Actions for automated testing and deployment

### Approach to Node.js Backend:
1. API Development (Express.js):
The backend API is developed using Express.js, a fast, unopinionated web framework for Node.js. This allows for creating a RESTful API that handles different routes for user authentication, profile management, appointment booking, and public health info retrieval.

Key Features:

JWT Authentication: Secure login for both patients and healthcare providers. JWT tokens are generated on successful login and stored in HTTP-only cookies to ensure security.
Role-based Access Control (RBAC): Different permissions and access for patients and healthcare providers (e.g., providers can view patient lists but cannot edit).
RESTful Endpoints: API endpoints for user registration, login, profile management, and appointment handling. Example:
POST /api/auth/login – for logging in users
GET /api/patient/dashboard – for retrieving patient-specific information
POST /api/appointments – for booking appointments
2. Database Integration (MongoDB):
MongoDB was used as the NoSQL database, which is well-suited for healthcare applications due to its scalability and ability to handle unstructured data (such as patient records).
Mongoose was used as the ODM (Object Data Modeling) library to interact with MongoDB.
3. Security Considerations:
Data Encryption: All sensitive patient data is encrypted in the database using strong encryption algorithms.
Password Hashing: Passwords are hashed using bcrypt.js before being stored in the database.
HIPAA Compliance: Basic compliance measures were implemented, including logging user actions related to data access and including a consent checkbox during registration.

### Approach to React.js Frontend:
1. Component-based Architecture:
The frontend is developed using React.js and follows a component-based architecture. Key components include:

Login Page: Allows patients and healthcare providers to log in securely.
Patient Dashboard: Displays personalized information such as upcoming appointments, health tips, and a basic health profile.
Provider Dashboard: Shows a list of patients and their respective health profiles (view-only access for providers).
Public Health Info Page: A static page displaying general health information and policies.
2. State Management (Redux/Context API):
Redux or React Context API is used for managing the global state of the application, including authentication status and patient information.
The authentication token (JWT) is stored in a secure location (e.g., cookies) and is passed with every API request to ensure the user is authenticated.
3. Styling (Sass):
Sass was used to style the application, with a focus on responsive design to ensure that the portal works seamlessly on different screen sizes.
4. Security:
Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) protections were implemented in the frontend.
HTTPS was enforced to ensure secure communication between the frontend and backend.

### CI/CD Approach:

1. GitHub Actions Setup:
GitHub Actions was used to implement the CI/CD pipeline. The workflow runs automated tests on each push to the repository and deploys the application to a cloud platform such as AWS or Heroku if all tests pass.
Key Steps in the Pipeline:

Build: Runs the build process for both the frontend and backend applications.
Test: Runs unit tests and integration tests to ensure code quality.
Deploy: Automatically deploys the code to a cloud platform if all tests pass successfully.

2. Testing:
Jest and React Testing Library were used for unit testing React components.
Supertest was used for testing the backend API endpoints.