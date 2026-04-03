import { combineReducers } from "@reduxjs/toolkit";
import welcomeReducer from "../welcome/welcomeReducer";

const combinedReducer = combineReducers({
  welcome: welcomeReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
