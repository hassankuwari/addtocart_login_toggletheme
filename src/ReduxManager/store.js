import { createStore } from "redux";
import MyReducer from "./reducer";
import { loadState } from "../LocalStorage";


const persistedState = loadState();

export const store = createStore(MyReducer,persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;