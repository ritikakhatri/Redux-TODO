import rootReducer from "../reducer/index";
import {createStore} from "redux";

const store = createStore(rootReducer)
window.store = store
export default store;
