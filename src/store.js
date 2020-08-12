import {createStore} from "redux";
import reducer from "./Components/reducers/reducer";

const store = createStore(reducer);
export default store;