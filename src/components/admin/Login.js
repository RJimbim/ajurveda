import React, { useContext, useState } from 'react'
// import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../../firebase";
import { useNavigate } from "react-router-dom";
import Footbar from '../footbar/Footbar';
import Nav from '../navbar/Nav';
import './admin.css'
import { AuthContext } from './AuthContext';

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navitage("/admin")
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
      <>
      <div className="adm-login-container">
      <form className="adm-login-form" onSubmit={handleLogin}>
      <h1 className="adm-login-title">Prisijungimas</h1>
      <div className="adm-login-div">
        <input
          type="email"
          className="adm-login-input"
           placeholder=" "
          onChange={(e) => setEmail(e.target.value)}
        />
         <label htmlFor="" className="adm-login-label">Elektroninis paštas</label>
          </div>
          <div className="adm-login-div">
        <input
          type="password"
          className="adm-login-input"
           placeholder=" "
          onChange={(e) => setPassword(e.target.value)}
        />
         <label htmlFor="" className="adm-login-label">Slaptažodis</label>
          </div>
          <input type="submit" className="adm-login-btn" value="Prisijungti"/>
        {error && <span id='wrongLogin'>Neteisingas elektoninis paštas arba slaptažodis !</span>}
      </form>
    </div>
    </>
  )
}
export default Login;
