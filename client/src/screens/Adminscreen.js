import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
// import Userlist from './Userlist';
// import Vcdslist from './Vcdslist';
// import Addvcds from './Addvcds';
// import Orderslist from './Orderslist';

export default function Adminscreen() {

    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, [])
    return (
        <div>
            <div className='row  justify-content-center' style={{backgroundColor:"green"}}>
                <div className='col-md-10'>
                    <h2 style={{ fontSize: "40px" }}>Admin panel</h2>
                    <ul className='adminfunction'>
                        <li><Link to={'/admin/userslist'}>Users list</Link></li>
                        <li><Link to={'/admin/vcdslist'}>Vcds list</Link></li>
                        <li><Link to={'/admin/addvcds'}>Add vcds</Link></li>
                        <li><Link to={'/admin/orderslist'}>orderslist</Link></li>
                    </ul>

                    {/* <Routes> */}
                    {/* <Route path='/admin/userlist' element={<Userlist />} /> */}
                    {/* <Route exact path='/admin' Component={Userlist} /> */}

                    {/* <Route exact path='/admin/vcdslist' Component={Vcdslist} />
                        <Route exact path='/admin/addvcds' Component={Addvcds} />
                        <Route exact path='/admin/orderslist' Component={Orderslist} /> */}


                    {/* </Routes> */}






                </div>

            </div>

        </div>
    )
}




