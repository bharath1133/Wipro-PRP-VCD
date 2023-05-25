import React from 'react'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Error from "../component/Error";
import Loading from "../component/Loading";
// import Success from "../component/Success";
import { getAllUsers } from '../actions/userActions';
import { deleteUsers } from '../actions/userActions';

import Adminscreen from "../screens/Adminscreen"

export default function Userlist() {
  const dispatch=useDispatch()

const usersstate=useSelector((state)=>state.getAllUsersReducer)

const {error,loading,users}=usersstate

  useEffect(()=>{
    dispatch(getAllUsers())
  })
  return (
    <div className='m-5'>
      <Adminscreen/>
      <h2>User List</h2>
      {loading && (<Loading/>)}
      {/* {error && (<Error error="something went wrong"/>)} */}

      <table className='table table-bordered  col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded '>
        <thead className='thead-dark'>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>Email</th>
          {/* <th>Delete</th> */}
        </tr>
        </thead>

        <tbody>
          {users && users.map(user=>{
            return <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.mail}</td>
              {/* <td><i className='fa fa-trash' onClick={()=>{dispatch( deleteUsers(user._id))}}></i></td> */}
            </tr>
          })}
        </tbody>

      </table>
    </div>
  )
}
