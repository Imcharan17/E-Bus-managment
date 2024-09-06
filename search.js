import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

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

onAuthStateChanged(auth, (user) => {
    if (user) {
        const searchForm = document.getElementById('searchForm');
        const resultsDiv = document.getElementById('results');

        searchForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Convert input values to lowercase for case-insensitive search
            const source = document.getElementById('source').value.trim().toLowerCase();
            const destination = document.getElementById('destination').value.trim().toLowerCase();

            resultsDiv.innerHTML = ''; // Clear previous results

            try {
                console.log(`Searching for buses from ${source} to ${destination}`); // Debugging line
                const busesRef = collection(db, "buses");
                
                // Perform the query based on lowercase values
                const q = query(busesRef, where("source", "==", source), where("destination", "==", destination));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    resultsDiv.innerHTML = "<p>No buses found for the given route.</p>";
                } else {
                    let resultsHTML = "<ul>";
                    querySnapshot.forEach((doc) => {
                        const bus = doc.data();
                        console.log(`Found bus: ${bus.busNumber}`); // Debugging line
                        resultsHTML += `<li>Bus ${bus.busNumber} (${bus.type}) from ${bus.source} to ${bus.destination} is at ${bus.location}, expected at ${bus.time}</li>`;
                    });
                    resultsHTML += "</ul>";
                    resultsDiv.innerHTML = resultsHTML;
                }
            } catch (error) {
                console.error("Error searching for buses: ", error);
                resultsDiv.innerHTML = "<p>An error occurred while searching for buses. Please try again.</p>";
            }
        });
    } else {
        window.location.href = 'login.html';
    }
});
