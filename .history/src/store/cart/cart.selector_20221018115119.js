import { createSelector } from "reselect";

const  selectCartReducer = state => state.cart;
export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItemscartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
)

const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);