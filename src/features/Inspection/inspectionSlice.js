import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "Property",
  newInsuredId: undefined,
};

const inspectionSlice = createSlice({
  name: "Inspection",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setNewInsuredId: (state, action) => {
      state.newInsuredId = action.payload;
    },
  },
});

export default inspectionSlice.reducer;
export const { setType, setNewInsuredId } = inspectionSlice.actions;
