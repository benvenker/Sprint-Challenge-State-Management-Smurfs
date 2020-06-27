import { combineReducers } from "redux";
import { smurfsReducer as smurfs } from "./smurfsReducer";
import { formReducer as form } from "./formReducer";

export default combineReducers({ smurfs });
