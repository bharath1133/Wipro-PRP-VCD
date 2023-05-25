import React from 'react';
import Vcds from '../component/Home/Vcds';
// import vcdsdata from '../vcdsdata';
import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllVcds } from '../actions/vcdActions';
import Filter from '../component/Filter';
import Loading from '../component/Loading';
import Error from '../component/Error';
import Footer from '../component/Footer';

function Homescreen() {

    const dispatch = useDispatch()

    const vcdsstate = useSelector(state => state.getAllVcdReducer)

    const { vcds, error, loading } = vcdsstate
    useEffect(() => {
        dispatch(getAllVcds())
    }, [])
    return (
        <div>
            <Filter />
            <div className='row justify-content-center'>
                {/* Getting the data from the redux store */}
                {loading ? (<Loading />) : error ? (<Error error="Something went wrong" />) :
                    (
                        vcds.map(vcd => {
                            return <div className='col-md-3 m-3' key={vcd._id}>
                                <div>
                                    <Vcds vcd={vcd} />
                                </div>
                            </div>

                        })
                    )}


                {/* Getting the data from the Static file */}

                {/* {vcdsdata.map(vcd => {
                return (
                    <div className='col-md-4'>
                        <div>
                            <Vcds vcd={vcd} />
                        </div>
                    </div>
                )
            })} */}


            </div>
            <Footer/>
        </div>
        
    )
}
export default Homescreen;









