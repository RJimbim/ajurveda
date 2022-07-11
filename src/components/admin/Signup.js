import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footbar from '../footbar/Footbar';
import Nav from '../navbar/Nav';
import './admin.css'


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    // const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

async function handleSubmit(e) {
  e.preventDefault()

}
  return (
      <>
      <Nav />
      <div className='login'>
      <form onSubmit={handleSubmit}>
        <span>Registruotis</span>
        <input type='email' placeholder='email' required ref={emailRef} />
        <input type='password' placeholder='password' required ref={passwordRef} />
        <input type='password' placeholder='password confirmation' required ref={passwordConfirmRef} />
        <button disabled={loading} type='submit'>Sign up</button>
        <div className='register'>
            Turi accounta ? <Link to="/login">Prisijunk</Link>
        </div>
      </form>
    </div>
    <Footbar />
    </>
  )
}
