import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get user from the local storage
const user = JSON.parse(localStorage.getItem("user"));

// create the initial state
const initialState = {
  user: user ? user : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// post/register the user

// create auth slice

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
