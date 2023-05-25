import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addVcd } from '../actions/vcdActions';
import Loading from '../component/Loading';
import Error from '../component/Error';
import Success from '../component/Success'
import { addVcdReducer } from '../reducers/vcdReducers';

import Adminscreen from './Adminscreen';
// import { useNavigate } from 'react-router-dom';


export default function Addvcds() {
    const [name, setname] = useState("");
    const [highprice, sethighprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [lowprice, setlowprice] = useState()
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("")
    const [image, setimage] = useState("")

    //object of usedispatch
    const dispatch = useDispatch()

    const addvcdstate = useSelector(state => state.addVcdReducer)

    const { error, loading, success } = addvcdstate


    // const navigate=useDispatch()


    function formhandler(e) {
        e.preventDefault()

        if (name.length === 0) {
            alert("add vcd details to add")
        } else if (description.length === 0) {
            alert("Add a movie description");
        } else if (category.length === 0) {
            alert("Add movie category type")
        }else if(highprice==="" || mediumprice==="" || lowprice===""){
            alert("add price details of vcd")
        }
        else {
            const vcd = {
                name,
                image,
                description,
                category,
                prices: {
                    High: highprice,
                    Medium: mediumprice,
                    Low: lowprice
                }
            }
            alert("Vcd added successfully")
            // document.getElementById("myForm").reset();
            
            console.log(vcd);
            dispatch(addVcd(vcd));
            window.location.href = '/admin/vcdslist'
            //    navigate("/vcdslist")

        }
        

    }



    return (
        <div>
            <Adminscreen />
            <div className='text-left m-5'>
                <h2>ADD VCD</h2>

                {loading && (<Loading />)}
                {error && (<Error error="something went wrong" />)}
                {/* {success && (<Success success="new vcd added successfully" />)} */}



                <form className='form-control' onSubmit={formhandler} id='myForm'>
                    <input className='form-control' type='text' placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input className='form-control' type='text' placeholder='High Quality price' value={highprice} onChange={(e) => { sethighprice(e.target.value) }} />
                    <input className='form-control' type='text' placeholder='Medium Quality price' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
                    <input className='form-control' type='text' placeholder='Low Quality price' value={lowprice} onChange={(e) => { setlowprice(e.target.value) }} />
                    <input className='form-control' type='text' placeholder='Category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
                    <input className='form-control' type='text' placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
                    <input className='form-control' type='text' placeholder='Upload image' value={image} onChange={(e) => { setimage(e.target.value) }} />

                    <button className='btn mt-3' type='submit'>Add Vcd</button>
                </form>
            </div>
        </div>
    )
}
