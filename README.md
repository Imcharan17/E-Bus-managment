<div align="center">

# 🚌 E-Bus Management System

### 🚀 A Real-Time Bus Management & Search Platform using Firebase

<p align="center">

<a href="https://imcharan17.github.io/E-Bus-managment/">
<img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Website-0A66C2?style=for-the-badge"/>
</a>

<a href="https://github.com/Imcharan17/E-Bus-managment">
<img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github"/>
</a>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"/>

</p>

</div>

---

# 🌐 Live Demo

### 🚀 Visit the Project

👉 **https://imcharan17.github.io/E-Bus-managment/**

---

# 📖 Overview

The **E-Bus Management System** is a web application designed to simplify bus transportation management. It allows users to register, log in securely, and search for buses based on their **source** and **destination**.

The application uses **Firebase Authentication** for secure user login and **Cloud Firestore** to store and retrieve bus information in real time.

---

# ✨ Features

### 🏠 Home Page
- Beautiful landing page
- Responsive design
- Image slider showcasing buses
- Navigation to Login & Register

### 🔐 Authentication
- User Registration
- Secure Login
- Firebase Authentication
- Session Management

### 🔍 Bus Search
- Search buses by Source
- Search buses by Destination
- Display matching buses instantly
- Real-time Firestore database queries

### ✅ Validation
- Client-side Form Validation
- Required field validation
- Error handling

### 🔥 Firebase Integration
- Firebase Authentication
- Cloud Firestore Database
- Secure data management

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Firebase Authentication
- Cloud Firestore

## Tools

- Git
- GitHub
- Firebase Console

---

# 📂 Project Structure

```
E-Bus-Management/

│── index.html
│── login.html
│── register.html
│── search.html
│── bus_registration.html
│
├── css/
│
├── js/
│   ├── app.js
│   ├── login.js
│   ├── register.js
│   ├── search.js
│
├── images/
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Imcharan17/E-Bus-managment.git
```

---

## Navigate to Project

```bash
cd E-Bus-managment
```

---

## Open Project

Simply open

```
index.html
```

or use

**Live Server** in VS Code.

---

# 🔥 Firebase Configuration

## Step 1

Create a project on

👉 https://console.firebase.google.com/

---

## Step 2

Enable

- Authentication
- Firestore Database

---

## Step 3

Replace Firebase configuration inside

- app.js
- login.js
- register.js
- search.js

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

# 🚍 How to Use

### 1️⃣ Home Page

- Explore the application
- View image slider
- Navigate to Login or Register

### 2️⃣ Register

- Create a new account
- Email & Password authentication

### 3️⃣ Login

- Login securely using Firebase Authentication

### 4️⃣ Search Bus

- Enter Source
- Enter Destination
- View available buses instantly

---

# 📸 Screenshots

> Add screenshots here for a better project presentation.

```
📂 screenshots/

home.png

login.png

register.png

search.png

results.png
```

---

# 📈 Future Enhancements

- 🗺 Google Maps Live Bus Tracking
- 💳 Online Ticket Booking
- 📍 GPS Location Tracking
- 📱 Mobile Responsive UI Improvements
- 🎫 QR Code Ticket Generation
- 🔔 Email & SMS Notifications
- 💰 Online Payment Gateway
- 👨‍💼 Admin Dashboard
- 📊 Bus Analytics Dashboard

---

# 🐞 Troubleshooting

## Authentication Issues

- Verify Firebase Authentication is enabled.
- Check your Firebase configuration.

---

## Firestore Issues

- Ensure the **buses** collection exists.
- Verify Firestore security rules.

---

## Search Issues

- Check that bus documents contain:

```
source

destination

busNumber

busType

time
```

---

## Image Slider Issues

- Ensure all image paths are correct.
- Verify JavaScript files are properly linked.

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Create a Pull Request

---

# 👨‍💻 Developer

## Dubaguntla Charan Sai

📧 **Email**

dubaguntlacharan123@gmail.com

🌐 **Portfolio**

https://portfoilo-react-dun.vercel.app/

💼 **LinkedIn**

https://linkedin.com/in/charan

🐱 **GitHub**

https://github.com/Imcharan17

🚍 **Project Live**

https://imcharan17.github.io/E-Bus-managment/

---

<div align="center">

## ⭐ If you found this project useful, don't forget to Star ⭐

Made with ❤️ using HTML, CSS, JavaScript & Firebase

</div>
