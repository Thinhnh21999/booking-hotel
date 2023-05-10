import { actionType } from "../action";

const initialState = {
  isAuth: true,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_AUTH:
      return {
        ...state,
        isAuth: true,
      };

    default:
      return state;
  }
}
