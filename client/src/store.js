import {combineReducers} from 'redux';
import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { getAllVcdReducer } from './reducers/vcdReducers';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer } from './reducers/userReducer';
import { loginUserReducer } from './reducers/userReducer';
import { addVcdReducer } from './reducers/vcdReducers';
import { getVcdByIdReducer } from './reducers/vcdReducers';
import { editVcdReducer } from './reducers/vcdReducers';
import { getAllUsersReducer } from './reducers/userReducer';

const finalReducer=combineReducers({
    getAllVcdReducer:getAllVcdReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    addVcdReducer:addVcdReducer,
    getVcdByIdReducer:getVcdByIdReducer,
    editVcdReducer:editVcdReducer,
    getAllUsersReducer:getAllUsersReducer
})

//get the cart items from the loacl storage after every refresh
const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

const currentUser=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem('currentUser')):null

const initialState={
   cartReducer:{
    cartItems:cartItems
   },
   loginUserReducer:{
    currentUser:currentUser
   }
}

const composeEnhancers=composeWithDevTools({})
const store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store;