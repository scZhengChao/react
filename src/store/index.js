import React from 'react';
// import { createStore, applyMiddleware, compose } from 'redux' //原始 状态管理 和 改变时dispatch支持函数;
import { createStore, applyMiddleware } from 'redux' //原始 状态管理 和 改变时dispatch支持函数;
import thunk from "redux-thunk";  //配合改装dispatch 支持函数
import state from './state';    
import reducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'
let store = createStore(
    reducer,
    state,
    applyMiddleware(thunk)
);
export default store;
