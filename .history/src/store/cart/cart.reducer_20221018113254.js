export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

//REDUCER SHOULD NOT HANDLE ANY BUSINESS LOGIC

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state, ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state, isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`);
    }
}