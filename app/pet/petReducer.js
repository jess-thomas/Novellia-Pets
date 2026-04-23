import { createSlice } from "@reduxjs/toolkit";
import { getPetDetailsThunk } from "./petApi";

const initialState = {
  selectedPetID: null,
  selectedPet: {},
  isLoading: false,
  error: null,
};

const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    setSelectedPetId: (state, action) => {
      state.selectedPetID = action.payload;
    },
    setSelectedPet: (state, action) => {
      state.selectedPet = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPetDetailsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPetDetailsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedPet = action.payload;
      })
      .addCase(getPetDetailsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedPetId, setSelectedPet } = petSlice.actions;
export default petSlice.reducer;
