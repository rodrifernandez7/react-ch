import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3Hdr2m7ZG21EjcZb4LXxtiLZ7g60x4VA",
  authDomain: "rfm-react-ch.firebaseapp.com",
  projectId: "rfm-react-ch",
  storageBucket: "rfm-react-ch.appspot.com",
  messagingSenderId: "482610268270",
  appId: "1:482610268270:web:c0deb4ed9da0adcfe2be7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => {
    return app
}