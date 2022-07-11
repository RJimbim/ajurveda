import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from "react";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvzg8KhUiEi1CdpP_6JRHVxN6XXrQESg4",
  authDomain: "ajurveda-b653d.firebaseapp.com",
  projectId: "ajurveda-b653d",
  storageBucket: "ajurveda-b653d.appspot.com",
  messagingSenderId: "210422007375",
  appId: "1:210422007375:web:2efd028b42790359a08c3a"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage();


export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unsub;
    }, [])
    return currentUser;
}