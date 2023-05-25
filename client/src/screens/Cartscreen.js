import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { cartReducer } from "../reducers/cartReducer";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Footer from "../component/Footer";

function Cartscreen() {
    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    const dispatch=useDispatch()

    const subtotal=cartItems.reduce((x,item)=>x+item.price,0)

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h2 style={{ fontSize: "40px" }}>Your cart</h2>
                <hr />
                {
                    cartItems.map(item => {
                        return <div className="flex-container">
                            <div className="m-1 w-100" >
                                <h1>{cartItems.length}</h1>
                                <h1>VCD Quality:[{item.quality}]</h1>
                                <h1>Price:{item.quantity}*{item.prices[0][item.quality]}={item.price}</h1>
                                <h2 style={{ display: "inline" }}>Quantity:</h2>
                                <i className="fa-solid fa-plus" style={{ color: 'blue', margin: "5px" }} onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.quality))}}></i>
                                <b>{item.quantity}</b>
                                <i className="fa-solid fa-minus" style={{ color: 'red', margin: "5px" }} onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.quality))}}></i>
                                <hr />
                            </div>
                            <div className="m-1 w-100">
                                <img src={item.image} style={{ height: '120px', width: '150px' }} alt="" />
                            </div>
                            <div className="m-1 w-100">
                                <i className="fa-solid fa-trash mt-5" aria-hidden="true" style={{ color: 'red' }} onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                            </div>

                        </div>
                    })
                }
                <hr />
            </div>
            <div className="col-md-4 m-5">
                <h2 style={{fontSize:"40px",color:"blue"}}>Total AMount:{subtotal}/-</h2>
                <button className="btn">Pay Now</button>
            </div>

            <Footer/>
        </div>
    )
}
export default Cartscreen;
