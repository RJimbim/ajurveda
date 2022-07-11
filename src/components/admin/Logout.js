import React from 'react'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';



 async function Logout() {

const navigate = useNavigate()

    await signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.clear();
       navigate("/");
        console.log("issilogino sekmingai");
        
      }).catch((error) => {
        // An error happened.
        console.log("nepavyko issiloginti")
      });
  return (
    <div>Logoutfd</div>
  )
}



 
 export default Logout
  
