import { SET_LOG_IN } from "./welcomeUtils";

export const login = (data) => ({
  type: SET_LOG_IN,
  payload: data,
});
