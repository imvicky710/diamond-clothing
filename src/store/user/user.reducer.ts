//import { USER_ACTION_TYPES } from "./user.types";
import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.action";

export type UserState = {
  currentUser: UserData | null;
  isLoading: boolean;
  error: null | Error;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  //const { type, payload } = action;

  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }
  if (
    signUpFailed.match(action) ||
    signInFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }
  return state;

  // switch (type) {
  //     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
  //         return { ...state, currentUser: payload };
  //     case USER_ACTION_TYPES.SIGN_IN_FAILED:
  //         return { ...state, error: payload };
  //     case USER_ACTION_TYPES.SIGN_UP_FAILED:
  //         return { ...state, error: payload };
  //     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
  //         return { ...state, currentUser: null };
  //     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
  //         return { ...state, error: payload };
  //     default:
  //         return state;
  // }
};
