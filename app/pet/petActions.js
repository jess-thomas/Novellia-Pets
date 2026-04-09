import { SET_SELECTED_PET, SET_SELECTED_PET_ID } from "./petUtils.js";

export const setSelectedPetID = (data) => ({
  type: SET_SELECTED_PET_ID,
  payload: data,
});

export const setSelectedPet = (data) => ({
  type: SET_SELECTED_PET,
  payload: data,
});
