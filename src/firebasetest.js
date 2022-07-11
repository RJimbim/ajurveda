import firebasetest from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvzg8KhUiEi1CdpP_6JRHVxN6XXrQESg4",
    authDomain: "ajurveda-b653d.firebaseapp.com",
    projectId: "ajurveda-b653d",
    storageBucket: "ajurveda-b653d.appspot.com",
    messagingSenderId: "210422007375",
    appId: "1:210422007375:web:2efd028b42790359a08c3a"
  };

firebasetest.initializeApp(firebaseConfig);
const db = firebasetest.firestore();

export {db};
export default firebasetest;