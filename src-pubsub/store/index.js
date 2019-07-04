import React from 'react';
import { createStore, applyMiddleware } from 'redux' //原始状态管理和改变时dispatch支持函数;
import thunk from "redux-thunk";  //配合改装dispatch 支持函数
import state from './state';
import reducer from './reducer';

let store = createStore(
    reducer,
    state,
    applyMiddleware(thunk)
);
export default store;
