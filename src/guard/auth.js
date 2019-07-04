import React from 'react';
import { Route, Redirect } from 'react-router-dom'; 
import { connect }  from 'react-redux';
import { asyncAction } from '../store/asyncAction';
import * as types from '../store/types';


//这是同步授权路由.我的乖乖,永远不能异步操作,函数式组件一上来就render  return 永远不能插入异步
// const Auth = ({ component: Component, user, check_user,store, ...rest }) => {
//     // fetch(
//     //     'http://localhost:3000/user',
//     //         ).then((res) =>{
//     //             return res.json()
//     //         }).then(
//     //             data => {
//     //                 if (data.err == 0) {
//     //                     console.log(store)
//     //                     return null
//     //                     // dispatch({ type: type, payload: data.data });  
//     //                 } else {
//     //                     alert('请求错误' + data.msg)
//     //                     // return  <Redirect to="/login" />
//     //                 }
//     //                 // dispatch({ type: types.bloadding, payload: false });
//     //             }
//     //         )
//     return (
//         <Route {...rest} render={(contents) => {
//             return (
//                 user.auth ?
//                     <Component {...contents} userdata={user.data} /> :
//                     <Redirect to="/login" />
//             )
//         }} />
//     )
// }


//异步授权路由
class Auth extends React.Component{
    state = {
        isauth:false,
        user:false,
       userdata:{}
    }
    render() {
        let { component: Component,user, ...rest } = this.props;
        if (!this.state.isauth) return null;
        return (    
            <Route {...rest} render={(contents) => (
                this.state.user ?
                    <Component userdata={this.state.userdata} {...contents} /> :
                    <Redirect to="/login"/>
            )}/>
        )    
    }
    componentDidMount() {
        
        let { check_user } = this.props
        console.log(this.props.path)
        fetch(
            'http://localhost:3000/user',
            {
                credentials:"include"
            }
        ).then(
            res=>res.json()
        ).then(
            resdata => {
                if (resdata.err == 0) {
                    check_user(resdata)
                    this.setState({ user: true, userdata: resdata, isauth: true })  
                    console.log(resdata)
                    console.log(this.props)
                } else {
                    // alert('用户未登录')
                    this.setState({user:false,userdata:{},isauth:true})
                }
                // console.log(resdata)
            }
        )
        // let { check_user } = this.props
        // check_user()
    }

}


let MapStateToProps = (state,props) => ({
    user:state.user
})

let MapDispatchToProps = (dispatch, props) => ({
    check_user: (data) => {
        // console.log(this)//undefind
        dispatch({type:types.checkUser,payload:data})
    }
})

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Auth);