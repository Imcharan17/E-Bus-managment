import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCJJ_CRYDPi9CAXU45YrQuysi4uKdl5X-o",
    authDomain: "contact-portofolio-2f075.firebaseapp.com",
    databaseURL: "https://contact-portofolio-2f075-default-rtdb.firebaseio.com",
    projectId: "contact-portofolio-2f075",
    storageBucket: "contact-portofolio-2f075.appspot.com",
    messagingSenderId: "719073875089",
    appId: "1:719073875089:web:43c9ae4ce55e19a5859b30"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Registration Function
function registerUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User registered:', user);

            // Store additional user data in Firestore
            setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                createdAt: new Date()
            }).then(() => {
                console.log('User data stored in Firestore');
                alert('Registration successful! User data stored in Firestore.');
            }).catch((error) => {
                console.error('Error storing user data:', error.message);
                alert('Registration successful, but an error occurred while storing user data.');
            });
        })
        .catch((error) => {
            console.error('Error during registration:', error.message);
            alert('Registration failed: ' + error.message);
        });
}

// Login Function
function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
            alert('Login successful!');
        })
        .catch((error) => {
            console.error('Error during login:', error.message);
            alert('Login failed: ' + error.message);
        });
}

// Event Listener for Registration Form Submission
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    // Call the registerUser function
    registerUser(email, password);
});

// Event Listener for Login Form Submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Call the loginUser function
    loginUser(email, password);
});
