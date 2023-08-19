import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import counterReducer from "./counter";
import homeReducer from "./home";

// 正常情况下, store.dispatch(object)
// 想要派发函数，store.dispatch(function)

// 将两个reducer合并在一起
const reducer = combineReducers({
    counter: counterReducer,
    home: homeReducer,
});

// redux-devtools
const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
