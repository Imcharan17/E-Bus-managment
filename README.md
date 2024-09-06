Overview
This project is an innovative Ebus Management System designed to manage and interact with bus transportation more efficiently.
It provides features for user registration, login, and searching for buses based on source and destination locations. The system leverages Firebase for authentication and Firestore for data storage.

Table of Contents :
Introduction
Features
Technologies Used
Installation Instruction
Usage
Firebase Configuration
Troubleshooting
Contact
Introduction
The Ebus Management System allows users to register, log in, and search for buses between specified locations. It features a user-friendly interface with a slider to showcase bus images and a form for bus searches.

Features
Home Page: Introduction to the Ebus Management System with a slider displaying bus images.
Login Page: Allows users to log in to access the bus search functionality.
Register Page: Enables new users to create an account.
Search Page: Allows logged-in users to search for buses based on source and destination.
Form Validation: Ensures that all required fields in the forms are filled out.
Firebase Integration: Handles authentication and stores data in Firestore.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Firebase Firestore, Firebase Authentication
Libraries: Firebase JavaScript SDK
Usage
Home Page (index.html): Provides an overview of the system and features a slider with bus images.
Login Page (login.html): Users can log in to access additional features.
Register Page (register.html): New users can register by providing an email and password.
Search Page (search.html): Logged-in users can search for buses based on source and destination locations.
Firebase Configuration
Setup Firebase:

Go to the Firebase Console.
Create a new project and configure it for web use.
Update Firebase Configuration:

Replace the placeholder Firebase configuration in app.js, login.js, register.js, and search.js with your own Firebase project credentials.

javascript
Copy code
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
Troubleshooting
Form Submission Issues:

Ensure that Firebase configuration is correct and the Firebase project is properly set up.
Slider Not Working:

Verify that JavaScript for the slider is correctly linked and there are no syntax errors.
Search Functionality Issues:

Check if the Firestore collection buses is properly populated and matches the query fields.
ith a description of your changes.

Contact
For questions or feedback, please contact me at dubaguntlacharan123@gmail.com

