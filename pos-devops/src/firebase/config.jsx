// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqGbvLLoyPytkU3ryaVMigmjY-Z0TF8yU",
    authDomain: "unimar-start-devops.firebaseapp.com",
    projectId: "unimar-start-devops",
    storageBucket: "unimar-start-devops.firebasestorage.app",
    messagingSenderId: "52613467716",
    appId: "1:52613467716:web:e16c55ef0324c3ffd27611",
    measurementId: "G-Q8VX087ZC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);