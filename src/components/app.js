import React from 'react'; //核心
import { Switch, Route, Redirect } from 'react-router-dom';  //路由
import { connect } from 'react-redux';//基于redux状态管理思想上的react插件包,
import * as types from '../store/types'; //总领字面量类型
import Auth from '../guard/auth'; // 路由守卫,实际上就是个函数,然后有一个必须有返回值,是个组件,最好不要在守卫里出出力异步函数
import { asyncAction } from '../store/asyncAction'; //异步处理函数


//loadable 异步路由,懒加载,import全是同步加载的,没有什么能阻挡他,即使你用不到,写上去了就马上加载.所以要懒加载,你用到了我才加载,有利有弊
import loadable from 'react-loadable';
import Loadding from '../common/loadding/loadding';


//自己封装的loadable,只接受一个参数,不能传loading
// import myloadable from '../common/asyncComponent/loadable';
// const Video = myloadable(() => import('./video/video'));


//引入组件,全部都是同步加载进来的
// import Home from './home/home';
// import Video from './video/video';
// import Recommend from './recommend/recommend';
// import Special from './special/special';
// import User from './user/user';
// import Error from './error/error';
// import Footer from '../common/footer/footer';
// import Pages from '../common/pages/pages';
// import Login from './login/login';
// import Reg from './reg/reg';
// import Set from '../components/set/set';
// import Shop from '../components/shop/shop';
// import Car from '../components/car/car';
// import Info from '../components/info/info';

const Home = loadable({loader: () => import('./home/home'), loading: Loadding,// loading:()=>{return null} 
})
const Video = loadable({loader: () => import('./video/video'), loading: Loadding })
const Recommend = loadable({ loader: () => import('./recommend/recommend'), loading: Loadding, })
const Special = loadable({loader: () => import('./special/special'), loading: Loadding, })
const User = loadable({loader: () => import('./user/user'), loading: Loadding,})
const Error = loadable({ loader: () => import('./error/error'), loading: Loadding,})
const Footer = loadable({ loader: () => import('../common/footer/footer'), loading: Loadding,})
const Pages = loadable({ loader: () => import('../common/pages/pages'), loading: Loadding,})
const Login = loadable({loader: () => import('./login/login'), loading: Loadding, })
const Reg = loadable({loader: () => import('./reg/reg'), loading: Loadding,})
const Set = loadable({loader: () => import('../components/set/set'), loading: Loadding, })
const Shop = loadable({loader: () => import('../components/shop/shop'), loading: Loadding,})
const Car = loadable({loader: () => import('../components/car/car'), loading: Loadding,})
const Info = loadable({loader: () => import('../components/info/info'), loading: Loadding,})

class App extends React.Component {
    constructor(props) {
        super()  
        // console.log(this.props)
    }
    //加载器跟新期,要清除,主入口可以拿到子组件的
    //路由监听 注意在app组件里,nextprops总是比this.props快一步,而且所有的this.props都是一样的,可以这样理解,这个函数在shouldprops之前,表示props还没有跟新,所以你拿到的props里的path是没跟新之前的,但给了你一个参数nextprops来达到跟新之后的props
    componentWillReceiveProps(nextProps){//路由监听 //注意了在要不要跟新之前,所以在这里面的函数领先后面的一步,这里更新了.后面还没偶遇跟新列
        let {view_footer,car}=nextProps;
        this.show(nextProps);
        //监听,每次都能返回到顶部
        // if (this.props.location.pathname !== nextProps.location.pathname) {
        //     window.scrollTo(0,0)
        // }
        
        var str = JSON.stringify(car)
        localStorage.setItem("goods",str)
    }
    shouldComponentUpdate() { 
        return true
    }
    componentWillUpdate(){}
    componentDidMount() {
        this.show(this.props);
        let { getCookie } = this.props;
        var data = JSON.parse( localStorage.getItem("goods"))
       
        // console.log(data)
        getCookie(data)
    }
    show(props) {
        let {view_footer}=props;
        let path = props.location.pathname;
        if (/pages|special/.test(path)) { view_footer(false) }
        if ((/home|recommend|video|user|shop|car/.test(path))) { view_footer(true)}
        // console.log(path)
    }
    render() {
        let {bfoot,bloadding } = this.props;
        return (
            <>
                {bloadding && <Loadding />}
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/video' component={Video} />
                    <Route path='/recommend' component={Recommend} />
                    <Route path='/special' component={Special} />

                    <Auth path='/user' component={User} />

                    <Route path='/login' component={Login} />
                    <Route path="/reg" component={Reg}/>
                    <Route path="/pages" component={Pages} />
                    <Route path="/set" component={Set} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/car" component={Car} />
                    <Route path="/info" component={Info} />
                    <Redirect exact from='/' to='/home' />
                    <Route component={Error} />
                </Switch>
                {bfoot && <Footer style={{zIndex:99999999}}/>}
            </>
        )
    }
}

let MapStateToProps = (state,props) => ({
    bfoot: state.bfoot,
    bloadding: state.bloadding,
    car:state.car,
})

let MapDispatchToProps = (dispatch, props) => ({
    view_footer: (bl) => dispatch({ type: types.view_footer, payload: bl }),
    getCookie: (data) => dispatch({ type: types.get_cookie_car, payload: data }),
})


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(App);
