import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ProfileReducer from "./Profile/ProfileReducer";
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    ProfileReducer:ProfileReducer,
});

const intialState = {};
const middleware = [thunk];

const Store = createStore(rootReducer,intialState,applyMiddleware(...middleware));

export default Store;