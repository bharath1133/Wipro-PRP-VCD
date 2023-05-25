import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { loginUser } from '../actions/userActions';
import Error from "../component/Error";
import Loading from "../component/Loading"
import { useNavigate } from 'react-router-dom';

export default function Loginscreen() {


  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const loginstate = useSelector(state => state.loginUserReducer)
  const { loading, error } = loginstate


  // const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = "/"
    }
  })

  const dispatch = useDispatch()

  function login() {

    if (mail.length === 0 && password.length === 0) {
      alert("Mail and password is required to login")
    }
    else if (mail.length === 0) {
      alert("Mail is required to login")
    } else if (password.length === 0) {
      alert("password is required to login")
    }
    else {
      const user = { mail, password }
      dispatch(loginUser(user))
      // alert("login successfully")
      // navigate("/")
    }

  }

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
          <h2 className='m-2' style={{ fontSize: "40px", justifyContent: "center" }}>Login</h2>

          {loading && (<Loading />)}
          {error && (<Error error="Invalid credentials" />)}

          <div>
            <input type='text' placeholder='mail' className='form-control' value={mail} onChange={(e) => { setMail(e.target.value) }} required />
            <input type='password' placeholder='password' className='form-control' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
            <button className='btn mt-3 mb-3 ' onClick={login}>Login</button>
            <br />
            <a href='/register' style={{ color: "black" }} className='mt-2'><b>click Here To Register</b></a>
          </div>
        </div>
      </div>
    </div>
  )
}
