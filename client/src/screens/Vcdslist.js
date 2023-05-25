import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../component/Filter';
import Loading from '../component/Loading';
import Error from '../component/Error';
import { getAllVcds } from '../actions/vcdActions';
import { Link, useParams } from 'react-router-dom';
import { deleteVcd } from '../actions/vcdActions';
import Adminscreen from './Adminscreen';

export default function Vcdslist() {
    const dispatch = useDispatch()

    // const {id}=useParams()

    const vcdsstate = useSelector((state) => state.getAllVcdReducer)

    const { vcds, error, loading } = vcdsstate

    useEffect(() => {
        dispatch(getAllVcds())
    }, [])
    return (
        <div className='m-5'>
            <Adminscreen/>
            <h2>Vcds list</h2>
            {loading && (<Loading />)}
            {error && (<Error error="something went wrong" />)}

            <table className='table table-bordered'>
                <thead className='thead thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Categoty</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {vcds && vcds.map(vcd => {
                        return <tr>
                            <td>{vcd.name}</td>
                            <td>
                                High:{vcd.prices[0]['High']}<br />
                                Medium:{vcd.prices[0]['Medium']}<br />
                                Low:{vcd.prices[0]['Low']}
                            </td>
                            <td>{vcd.category}</td>
                            {/* <td>{vcd.name}</td> */}
                            <td>
                                <i className='fa fa-trash m-1' onClick={() => { dispatch(deleteVcd(vcd._id)) }}></i>
                                {/* <Link to={`/admin/editvcd/${vcd._id}`}><i className='fa fa-edit m-1'></i></Link> */}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div >
    )
}
