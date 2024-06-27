import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./contactsSlice";

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  selectors: { selectNameFilter: (state) => state.filters.name },
  reducers: {
    changeFilterValue(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilterValue } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const { selectNameFilter } = filtersSlice.selectors;
