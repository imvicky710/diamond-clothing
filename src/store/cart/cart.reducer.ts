import { CartItem } from "./cart.types";
import { AnyAction } from "redux";
import { setIsCartOpen, setCartItems } from "./cart.action";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

//REDUCER SHOULD NOT HANDLE ANY BUSINESS LOGIC

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  //const { type, payload } = action;

  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  //   switch (type) {
  //     case CART_ACTION_TYPES.SET_CART_ITEMS:
  //       return {
  //         ...state,
  //         cartItems: payload,
  //       };
  //     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
  //       return {
  //         ...state,
  //         isCartOpen: payload,
  //       };
  //     default:
  //       return state;
  //   }
  return state;
};
