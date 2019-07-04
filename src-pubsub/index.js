import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; //状态管理
import store from './store'
import App from './components/app';



//引入css 
import './assets/themes/css/base.css';
import './assets/themes/css/home.css';
import './assets/themes/css/icon.css';

//引入js
// import './lib/jquery.js';
// console.log('index',$)
import $ from 'jquery'
import  './assets/themes/js/flexible';
// import './assets/themes/js/main';
// import  './assets/themes/js/flow';

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
)