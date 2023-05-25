import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useState,useEffect } from 'react'
import { registerUser } from '../actions/userActions';
import Loading from '../component/Loading';
import Error from "../component/Error";
import Success from '../component/Success';
import {useNavigate} from "react-router-dom"


export default function Registerscreen() {
    const [name,setName]=useState("")
    const [mail,setMail]=useState("")
    const [password,setPassword]=useState("")
    const [cpassword,setCpassword]=useState("")

    const registerstate=useSelector(state=>state.registerUserReducer)
    const {error,loading,success}=registerstate

    const dispatch=useDispatch()

    const navigate=useNavigate()


    function register(){
        if(name.length===0 &&mail.length==0 &&password.length==0) {
            alert("please enter all the details to register")
        }
        else if(name.length==0){
            alert('Name required')
        }
        else if(mail.length==0){
            alert('Mail required')
        }else if(password.length==0){
            alert('Password required')
        }
       else  if(password!=cpassword){
            alert('password is not matched')
        }else{
            const user={
                name,
                mail,
                password
            }
            console.log(user);
            alert("user registered sucessfully");
            navigate("/login")
            dispatch(registerUser(user))
        }
    }
    return (
        <div>
            <div className='row justify-content-center mt-5 '>
                <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>

                    { loading && (<Loading/>)}
                    {/* {success && (<Success success="User registred successfully"/>)} */}
                    {error && (<Error error="User already registred"/>)}

                    <h2 className='m-2' style={{ fontSize: "40px",justifyContent:"center"}}>Register</h2>
                    <div>
                        <input type='text' placeholder='name' className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}} required />
                        <input type='text' placeholder='mail' className='form-control' value={mail} onChange={(e)=>{setMail(e.target.value)}} required/>
                        <input type='password' placeholder='password' className='form-control'value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                        <input type='password' placeholder='confirm password' className='form-control' value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} required/>
                        <button className='btn mt-3' onClick={register}>Register</button>
                        <br/>
                        <a href='/login' style={{color:"black"}} className='mt-2'><b>click Here To Login</b></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
