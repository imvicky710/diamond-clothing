import { createSelector } from "reselect";

const  selectCartReducer = state => state.cart;
export const selectCartItems = createSelector(
    
)

const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);