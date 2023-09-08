
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfqfRooOjmfPXQb-Vwxb68KP5YwCeQAyU",
  authDomain: "clone-d30b7.firebaseapp.com",
  projectId: "clone-d30b7",
  storageBucket: "clone-d30b7.appspot.com",
  messagingSenderId: "1048646919927",
  appId: "1:1048646919927:web:8d1245fc7da4e89bf495f2",
  measurementId: "G-H503HM8BY4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);