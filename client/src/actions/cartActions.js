export const addToCart = (vcd, Quantity, Quality) => (dispatch, getState) => {


    var cartItem = {
        name: vcd.name,
        quantity: Number(Quantity),
        _id: vcd._id,
        image: vcd.image,
        quality: Quality,
        prices: vcd.prices,
        price: vcd.prices[0][Quality] * Quantity
    }

    if (cartItem.quantity > 10) {
        alert('You cannot add more than 10 vcds')
    } else {
        if (cartItem.quantity < 0) {
            dispatch({ type: 'DELETE_FROM_CART', payload: vcd })
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem })
        }
    }

    dispatch({ type: 'ADD_TO_CART', payload: cartItem })

    //set and store the cart items in the local storage
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}


export const deleteFromCart = (vcd) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: vcd })
    const cartItems = getState().cartReducer.cartItem
    localStorage.setItem('cartItem', JSON.stringify(cartItems))
}