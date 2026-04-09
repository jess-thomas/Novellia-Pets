import { SET_SELECTED_PET, SET_SELECTED_PET_ID } from "./petUtils.js";
const initialState = {
  selectedPetID: null,
  selectedPet: {},
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PET_ID:
      return {
        ...state,
        selectedPetID: action.payload,
      };
    case SET_SELECTED_PET:
      return {
        ...state,
        selectedPet: action.payload,
      };
    default:
      return state;
  }
};

export default petReducer;
