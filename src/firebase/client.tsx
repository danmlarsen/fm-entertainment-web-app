import { getApps, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbIgp4HEdmuQWZp2ySdu6xg0kTd9oAmjU",
  authDomain: "dan-entertainment-web-app.firebaseapp.com",
  projectId: "dan-entertainment-web-app",
  storageBucket: "dan-entertainment-web-app.firebasestorage.app",
  messagingSenderId: "674643339954",
  appId: "1:674643339954:web:9f628a07709c931f60b7ab",
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
}

export { auth };
