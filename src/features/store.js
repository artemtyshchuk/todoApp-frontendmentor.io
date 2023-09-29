import { configureStore } from "@reduxjs/toolkit";

import { filterReducer } from "./filters/filters-slice";
import { todoReducer } from "./todos/todos-slice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
  },
  devTools: true,
});
