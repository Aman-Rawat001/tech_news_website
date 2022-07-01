import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer/Index.js";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    rootReducer,
  },
});
export default store;
