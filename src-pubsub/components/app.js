import React from 'react'; //核心
import { Switch, Route, Redirect } from 'react-router-dom';  //路由

import { connect } from 'react-redux';//基于redux状态管理思想上的react插件包,
import * as types from '../store/types'; //总领字面量类型

import Auth from '../guard/auth'; // 路由守卫,实际上就是个函数,然后有一个必须有返回值,是个组件,

import pubsub from 'pubsub-js'; //订阅发布库 


//引入组件
import Home from './home/home';
import Video from './video/video';
import Recommend from './recommend/recommend';
import Special from './special/special';
import User from './user/user';
import Error from './error/error';
import Footer from '../common/footer/footer';
import Pages from '../common/pages/pages';
import Login from './login/login';
import Reg from './reg/reg';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            bfooter: true
        }

        //订阅,这是异步的,结合state
        pubsub.subscribe("view_footer", (type, data) => {
          
            this.setState({bfooter:data})
        })
    }
    //路由监听,是否跟新props
    componentWillReceiveProps(nextProps){//路由监听
        let {view_footer}=nextProps;
        let path = nextProps.location.pathname;
        if (/pages/.test(path)) { view_footer(false) }
        if((/home|recommend|video|user/.test(path))){view_footer(true)}
    }
    
    // componentWillMount() {
    //     console.log(this.props)
    //     let {view_footer} = this.props
    //     let path = this.props.location.pathname;
    //     if (/pages/.test(path)) { view_footer(false) }
    //     if((/home|recommend|video|user/.test(path))){view_footer(true)}
    // }
    render() {
        // let {bfoot } = this.props;
        let { bfooter } = this.state;
        return (
            <>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/video' component={Video} />
                    <Route path='/recommend' component={Recommend} />
                    <Route path='/special' component={Special} />

                    <Auth path='/user' component={User} />

                    <Route path='/login' component={Login} />
                    <Route path="/reg" component={Reg}/>
                    <Route path="/pages" component={Pages} />
                    <Redirect exact from='/' to='/home' />
                    <Route component={Error} />
                </Switch>
                {bfooter && <Footer style={{zIndex:99999999}}/>}
            </>
        )
    }
}

let MapStateToProps = (state,props) => ({
    bfoot:state.bfoot,
})

let MapDispatchToProps = (dispatch, props) => ({
    view_footer:(bl)=>dispatch({type:types.view_footer,payload:bl})
})


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(App);
