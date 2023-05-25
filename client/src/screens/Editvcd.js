import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVcdById } from '../actions/vcdActions'
import Loading from '../component/Loading';
import Error from '../component/Error';
// import Success from '../component/success'
import { editVcd } from '../actions/vcdActions'

import Adminscreen from './Adminscreen'




export default function Editvcd() {

    const [name, setname] = useState("");
    const [highprice, sethighprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [lowprice, setlowprice] = useState()
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("")
    const [image, setimage] = useState("")


    const getvcdbyidstate = useSelector((state) => state.getVcdByIdReducer);
    const { vcd, error,loading } = getvcdbyidstate

    const editvcdstate = useSelector((state) => state.editVcdReducer)
    const { editloading, editsuccess, editerror } = editvcdstate

    const { vcdid } = useParams()


    const dispatch = useDispatch()

    useEffect(() => {

        if (vcd) {
            if (vcd._id == vcdid) {
                setname(vcd.name)
                setdescription(vcd.description)
                setcategory(vcd.category)
                sethighprice(vcd.prices[0]["High"])
                setmediumprice(vcd.prices[0]["Medium"])
                setlowprice(vcd.prices[0]["Low"])
                setimage(vcd.image)
            } else {
                dispatch(getVcdById(vcdid))
            }
        } else {
            dispatch(getVcdById(vcdid))
        }


    }, [vcd, dispatch])


    function formhandler(e) {
        e.preventDefault()

        const editvcd = {
            _id:vcdid,
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
        dispatch(editVcd(editvcd))

    }


    return (
        <div>
            <Adminscreen/>
            <h2>Edit Vcd</h2>
            <h4>vcd id:{vcdid}</h4>

            {/* {loading && (<Loading />)} */}
            {error && (<Error error="something went wrong" />)}

            {/* {editsuccess && (<Success success="vcd edited successfully" />)} */}


            <form className='form-control' onSubmit={formhandler} >
                <input className='form-control' type='text' placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
                <input className='form-control' type='text' placeholder='High Quality price' value={highprice} onChange={(e) => { sethighprice(e.target.value) }} />
                <input className='form-control' type='text' placeholder='Medium Quality price' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
                <input className='form-control' type='text' placeholder='Low Quality price' value={lowprice} onChange={(e) => { setlowprice(e.target.value) }} />
                <input className='form-control' type='text' placeholder='Category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
                <input className='form-control' type='text' placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
                <input className='form-control' type='text' placeholder='Upload image' value={image} onChange={(e) => { setimage(e.target.value) }} />

                <button className='btn mt-3' type='submit'>Update Vcd</button>
            </form>
        </div>
    )
}





// export default function Editvcd() {

//     const dispatch=useDispatch()

//     useEffect(()=>{
//         dispatch(getVcdById(vcdid))
//     },[])
//     const {vcdid}=useParams()
//   return (
//     <div>
//         <h1>Edit vcd</h1>
//         <h2>vcdid={vcdid}</h2>
//     </div>
//   )
// }


