import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './admin.css'
import Pages from '../pages/Pages'
import { AuthContext } from './AuthContext'
import { auth, useAuth } from '../../firebase'
import { signOut } from 'firebase/auth'
import CreatePost from './CreatePost'
import AllNews from './data/AllNews'
import Addnews from './data/addnews'
import Naujienos from '../pages/naujienos'
import Naujiena from '../pages/naujiena'
import AdminView from './adminView'
function Admin() {

const currentUser = useAuth()
const [ loading, setLoading ] = useState(false)
const navigate = useNavigate()
async function handleLogout(e) {
  e.preventDefault();
  // console.log("issilogino");
  setLoading(true)
 try {
     await signOut(auth).then(() => {
      // Sign-out successful.
     navigate("/")
     localStorage.clear();
      console.log("issilogino sekmingai");
      
    }).catch((error) => {
      // An error happened.
      console.log("nepavyko issiloginti")
    });
  } catch {
    console.log("nepavyko")
  }
  setLoading(false)

}

  return (
    <div className='admin'>
      <div className='profile-container'>
        <h2 className='profile-title'>Profilis</h2>
      <strong className='profile-title'>Email:<p className='profile-text'>{currentUser?.email}</p></strong>
      
      <button className='create-btn'><Link to="/updateProfile">Atnaujini profili</Link></button>
      
      <button className='create-btn' onClick={handleLogout}>Log out</button>
        </div>
        <div className="allNews-container">
        <Addnews />
        <AllNews />
        {/* <AdminView /> */}
        </div>
    </div>
  )
}

export default Admin