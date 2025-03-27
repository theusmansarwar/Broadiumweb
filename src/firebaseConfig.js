// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyA5Pn3RmPXJofC_Mo45v2gWqF7aUApVNrU",
    authDomain: "usdata-bedfb.firebaseapp.com",
    databaseURL: "https://usdata-bedfb-default-rtdb.firebaseio.com",
    projectId: "usdata-bedfb",
    storageBucket: "usdata-bedfb.firebasestorage.app",
    messagingSenderId: "543684320142",
    appId: "1:543684320142:web:8b22fbf28d40461462a2df",
    measurementId: "G-6MZ5F48JJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Get database instance

export { app, database }; // Export app as well if needed elsewhere
