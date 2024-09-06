import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

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
const db = getFirestore(app);

// Function to register bus details in Firestore
function registerBus(busNumber, source, destination, location, time, type) {
    // Convert fields to lowercase for case-insensitive storage
    const lowercaseSource = source.toLowerCase();
    const lowercaseDestination = destination.toLowerCase();

    const busId = `${busNumber}_${time.replace(/:/g, '')}`; // Create a unique ID for the bus document

    setDoc(doc(db, 'buses', busId), {
        busNumber: busNumber,
        source: lowercaseSource,
        destination: lowercaseDestination,
        location: location,
        time: time,
        type: type,
        createdAt: new Date()
    }).then(() => {
        console.log('Bus details stored in Firestore');
        alert('Bus registration successful!');
    }).catch((error) => {
        console.error('Error storing bus details:', error.message);
        alert('Error: ' + error.message);
    });
}

// Event Listener for Bus Registration Form Submission
const busForm = document.getElementById('busRegistrationForm');
if (busForm) {
    busForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const busNumber = document.getElementById('busNumber').value;
        const source = document.getElementById('source').value;
        const destination = document.getElementById('destination').value;
        const location = document.getElementById('location').value;
        const time = document.getElementById('time').value;
        const type = document.getElementById('type').value;

        // Call the registerBus function
        registerBus(busNumber, source, destination, location, time, type);
    });
} else {
    console.error("Bus registration form not found in the document.");
}
