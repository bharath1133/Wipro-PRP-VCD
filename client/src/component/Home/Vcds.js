import React from 'react';
import '../Home/Vcds.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

function Vcds({ vcd }) {
    const [quantity, setQuantity] = useState(1)
    const [quality, setQuality] = useState('High')

    const [show, setShow] = useState(false);

    //dispatch cart Action
    const dispatch=useDispatch()
    function addtocart() {
       dispatch(addToCart(vcd,quantity,quality))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        //inline stye: className='m-5 shadow-lg p-3 mb-5 bg-body rounded'
        <div >
            <div onClick={handleShow}>
                <h1>{vcd.name}</h1>
                <img src={vcd.image} className='img-fluid' alt='' />
            </div>
            <div className='flex-container'>
                <div className='w-100 m-1'>
                    <p style={{ fontWeight: "600" }}>Quality</p>
                    <select className='abc' value={quality} onChange={(e) => setQuality(e.target.value)}>
                        {vcd.Quality.map(quality => {
                            return (
                                <option value={quality}>{quality}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p style={{ fontWeight: "600" }}>Quantity</p>
                    <select className='abc' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                        {[...Array(10).keys()].map((x, i) => {
                            return (
                                <option value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className='flex-container'>
                <div className='m-2 w-100'>
                    <h1 className='mt-2'>Price:{vcd.prices[0][quality] * quantity} RS/-</h1>
                </div>
                <div className='m-2 w-100'>
                    <button className='btn' onClick={addtocart}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{vcd.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={vcd.image} className='img-fluid' alt='' />
                    <p>{vcd.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
export default Vcds;