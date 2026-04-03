import { SET_LOG_IN, SET_USERNAME } from "./welcomeUtils";
const initialState = {
  username: "",
  isLoggedIn: false,
};

const welcomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_LOG_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default welcomeReducer;
