import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyBI3i4q0cP1ACL8qo_pgavBFzgE3HRzZlQ",
    authDomain: "react-4e6b2.firebaseapp.com",
    projectId: "react-4e6b2",
    storageBucket: "react-4e6b2.appspot.com",
    messagingSenderId: "415239380137",
    appId: "1:415239380137:web:82f61b5ff129f99d5a9db8",
    measurementId: "G-Z89SZTWM9F"
});
// Firebase storage reference
const storage = getStorage(app);
export default storage;