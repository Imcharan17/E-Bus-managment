import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

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

// Login Function
function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
            alert('Login successful!');
            window.location.href = 'search.html'; // Redirect to search page
        })
        .catch((error) => {
            console.error('Error during login:', error.message);
            alert('Login failed: ' + error.message);
        });
}

// Event Listener for Login Form Submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Call the loginUser function
        loginUser(email, password);
    });
} else {
    console.error("Login form not found in the document.");
}
