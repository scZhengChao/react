import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route ,HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux'; //为react状态管理的插件包
import store from './store';
import App from './components/app';



//引入css  以下引用方式都可以
// window.onload = function () {
//     import('./assets/themes/css/base.css');
//     import('./assets/themes/css/home.css');
//     import('./assets/themes/css/icon.css');
// }
import'./assets/themes/css/base.css';
import'./assets/themes/css/home.css';
import'./assets/themes/css/icon.css';

// require('./assets/themes/css/base.css');
// require('./assets/themes/css/home.css');
// require('./assets/themes/css/icon.css')
//引入js
import './assets/themes/js/flexible';
//全局暴露$
// import $ from './assets/themes/js/jquery'; //在react里,不能全局暴露,jquery会判断是否模块化环境,是,则会对外输出一个$
// window.$ = $
// import './assets/themes/js/main';
// import './assets/themes/js/main';
import  './assets/themes/js/flow';

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root"),
    () => {
        console.log('reactDom渲染页面结束')
    }
)