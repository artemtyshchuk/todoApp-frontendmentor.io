import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "@@filter",
  initialState: "all",
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
