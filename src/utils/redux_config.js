import { createSlice, configureStore } from "@reduxjs/toolkit";
import { getLocalItem } from "./local_storage_helpers";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    token: getLocalItem("token") || null,
    user: getLocalItem("user") || null,
  },
  reducers: {
    changeToken: (state, action) => {
      state.token = state.token ? null : action.payload;
    },
    changeUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { changeToken, changeUserData } = authenticationSlice.actions;
export default authenticationSlice.reducer;
