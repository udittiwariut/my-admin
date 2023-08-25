// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBoM3MYWp1fr7Asl1IE0qU-GXGFLSuk8eM",
	authDomain: "my-admin-d0496.firebaseapp.com",
	projectId: "my-admin-d0496",
	storageBucket: "my-admin-d0496.appspot.com",
	messagingSenderId: "446473698314",
	appId: "1:446473698314:web:0940156486ea7dff9d73f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
