import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { filterVcds } from '../actions/vcdActions';


export default function Filter() {
    const dispatch = useDispatch()

    const [searchkey, setsearchkey] = useState('')
    const [category, setcategory] = useState("all")

    return (
        <div className='container'>
            <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
                <div className='col-md-3 '>
                    <input value={searchkey} onChange={(e) => { setsearchkey(e.target.value) }} type='text' className='form-control w-100' placeholder='search movies' />
                </div>
                <div className='col-md-2 mt-2'>
                    <select className='form-control' value={category} onChange={(e) => {setcategory(e.target.value)}}>
                        <option value="all">All</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Hindi">Hindi</option>
                        <option value="English">English</option>
                    </select>
                </div>
                <div className='col-md-2 '>
                    <button className='btn w-100 mt-2' onClick={() => dispatch(filterVcds(searchkey, category))}>Search</button>
                </div>
            </div>
        </div>

    )
}