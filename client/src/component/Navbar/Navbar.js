import React, { useState } from "react";
import '../Navbar/Navbar.css'
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { logoutUser } from "../../actions/userActions";


function Navbar() {
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate

    const dispatch=useDispatch()
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">VCD Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">

                            {
                                currentUser ? (
                                    <DropdownButton id="dropdown"  title={currentUser.name}>
                                        <a className="dropdown-item" href="#">Orders</a>
                                        <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}} ><li>logout</li></a>
                                    </DropdownButton>
                                ) : (<li className="nav-item">
                                    <a className="nav-link" href="/login" >Login</a>

                                </li>)

                            }



                            <li className="nav-item">
                                <a className="nav-link" href="/cart">
                                    {/* set the cart length to zero */}
                                    Cart {cartstate.cartItems.length}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;



// {
//     currentUser ?
//         (<div className="dropdown mt-2">
//             <a style={{ color: "black" }} className="dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
//                 {currentUser.name}
//             </a>
//             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                 <a className="dropdown-item" href="#">Orders</a>
//                 <a className="dropdown-item" href="#">logout</a>
//             </div>        </div>) : (<li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="/login" >Login</a>
//                 </li>
//             </li>)
// }




