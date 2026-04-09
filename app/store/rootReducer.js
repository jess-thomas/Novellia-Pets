import { combineReducers } from "@reduxjs/toolkit";
import petReducer from "../pet/petReducer";
import welcomeReducer from "../welcome/welcomeReducer";

const combinedReducer = combineReducers({
  welcome: welcomeReducer,
  pet: petReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
