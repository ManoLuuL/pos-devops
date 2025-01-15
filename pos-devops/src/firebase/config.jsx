import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAqGbvLLoyPytkU3ryaVMigmjY-Z0TF8yU",
    authDomain: "unimar-start-devops.firebaseapp.com",
    projectId: "unimar-start-devops",
    storageBucket: "unimar-start-devops.firebasestorage.app",
    messagingSenderId: "52613467716",
    appId: "1:52613467716:web:e16c55ef0324c3ffd27611",
    measurementId: "G-Q8VX087ZC9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }