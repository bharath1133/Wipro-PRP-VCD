export const getAllVcdReducer=(state={vcds:[]},action)=>{
    switch(action.type)
    {
        case 'GET_VCDS_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_VCDS_SUCCESS':return{
            loading:false,
            vcds:action.payload
        }
        case 'GET_VCDS_FAILED':return{
            loading:false,
            error:action.payload
        }
        default:return state
    }
}

export const addVcdReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'ADD_VCDS_REQUEST':return{
            loading:true,
            ...state
        }
        case 'ADD_VCDS_SUCCESS':return{
            loading:false,
            success:true,
        }
        case 'ADD_VCDS_FAILED':return{
            loading:false,
            error:action.payload
        }
        default:return state
    }
}


export const getVcdByIdReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'GET_VCDBYID_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_VCDBYID_SUCCESS':return{
            loading:false,
            vcds:action.payload
        }
        case 'GET_VCDBYID_FAILED':return{
            loading:false,
            error:action.payload
        }
        default:return state
    }
}



export const editVcdReducer=(state={ },action)=>{
    switch(action.type)
    {
        case 'EDIT_VCDS_REQUEST':return{
            editloading:true,
            ...state
        }
        case 'EDIT_VCDS_SUCCESS':return{
            loading:false,
            editsuccess:true,
        }
        case 'EDIT_VCDS_FAILED':return{
            loading:false,
            editerror:action.payload
        }
        default:return state
    }
}