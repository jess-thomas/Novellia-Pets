import { SET_LOG_IN } from "./welcomeUtils";
const initialState = {
  isLoggedIn: false,
  logIn: {},
};

const welcomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOG_IN:
      return {
        ...state,
        logIn: action.payload,
      };
    default:
      return state;
  }
};

export default welcomeReducer;
