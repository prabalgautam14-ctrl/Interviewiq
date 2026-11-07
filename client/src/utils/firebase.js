import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7xK5-1ob_NWXAXZ2JPx6uB-oN7fN1owA",
  authDomain: "ai-interview-agent-26a1a.firebaseapp.com",
  projectId: "ai-interview-agent-26a1a",
  storageBucket: "ai-interview-agent-26a1a.firebasestorage.app",
  messagingSenderId: "1050789376194",
  appId: "1:1050789376194:web:e418ba03ce89818d74cb5b",
  measurementId: "G-ZP3LER1DKE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };