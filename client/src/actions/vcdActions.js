import axios from "axios";
import Vcds from "../component/Home/Vcds";

export const getAllVcds = () => async dispatch => {
    dispatch({ type: 'GET_VCDS_REQUEST' })

    try {
        const response = await axios.get('/api/getallvcds')
        console.log(response.data);
        dispatch({ type: 'GET_VCDS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_VCDS_FAILED', payload: error })
    }
}

export const filterVcds = (searchkey, category) => async dispatch => {

    var filteredVcds;
    dispatch({ type: 'GET_VCDS_REQUEST' })
    try {
        const response = await axios.get('/api/getallvcds')
        console.log(response.data);
        filteredVcds = response.data.filter(vcd => vcd.name.toLowerCase().includes(searchkey.toLowerCase()))

        if (category != 'all') {
            filteredVcds = response.data.filter(vcd => vcd.category.toLowerCase() == (category.toLowerCase()))
        }
        console.log(filterVcds);
        dispatch({ type: 'GET_VCDS_SUCCESS', payload: filteredVcds })
    } catch (error) {
        dispatch({ type: 'GET_VCDS_FAILED', payload: error })
    }
}


export const addVcd = (vcd) => async dispatch => {
    dispatch({ type: 'ADD_VCD_REQUEST' })
    try {
        const response = await axios.post('/api/vcds/addvcd', { vcd })
        console.log(response);
        dispatch({ type: 'ADD_VCD_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'ADD_VCD_FAILED', payload: error })
    }
}



export const getVcdById = (vcdid) => async dispatch => {
    dispatch({ type: 'GET_VCDBYID_REQUEST' })

    try {
        const response = await axios.post('/api/vcds/getvcdbyid', { vcdid })
        console.log(response);
        dispatch({ type: 'GET_VCDBYID _SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_VCDBYID _FAILED', payload: error })
    }
}



export const editVcd = (editvcd) => async dispatch => {
    dispatch({ type: 'EDIT_VCD_REQUEST' })
    try {
        const response = await axios.post('/api/vcds/editvcd', { editvcd })
        console.log(response);
        dispatch({ type: 'EDIT_VCD_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'EDIT_VCD_FAILED', payload: error })
    }
}



export const deleteVcd = (vcdid) => async dispatch => {
    try {
        const response = await axios.post("/api/vcds/deletevcd", { vcdid })
        alert("vcd deleted successfully")
        console.log(response);
        window.location.reload();
    } catch (error) {
        alert("something went wrong");
        console.log(error);
    }
}

