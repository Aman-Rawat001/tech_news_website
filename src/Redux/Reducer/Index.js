import { combineReducers } from "redux";
import { ProductReducer } from "./StoryReducer";
import { SearchTermReducer } from "./SearchTermReducer";

const rootReducer = combineReducers({
  ProductReducer,
  SearchTermReducer,
});

export default rootReducer;
