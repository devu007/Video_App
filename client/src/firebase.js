import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCCxBJAc8arv7tveC6fhkAtODvEPa1zRvg",
  authDomain: "video-6b25b.firebaseapp.com",
  projectId: "video-6b25b",
  storageBucket: "video-6b25b.appspot.com",
  messagingSenderId: "490746232356",
  appId: "1:490746232356:web:b54a0b9036262cf1fe62b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
