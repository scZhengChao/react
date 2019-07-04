import React from 'react';
import { Link } from 'react-router-dom';
import style from './login.module.css';  //login和reg重复,所以模块化引入,不能全局暴露,样式冲突
import { connect } from 'react-redux';
import * as types from '../../store/types';
import { asyncAction } from '../../store/asyncAction';
class Login extends React.Component{
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        let { login, iptuser, iptpass, change } = this.props
        return (
            <>
                <div className={style.content}>
                <p className={style.fhbtn}><a href="javascript:history.go(-1);"></a></p>
                <h1></h1>
                <div className={style.loginbox}>
                <p className={style.lsolid}></p>
                <div className={style.login}>
                    {/* <!-- <input type="button" value="按钮" @click="check"> --> */}
                    <Link to="/login">登录</Link>
                    <span></span>
                    <Link to="/reg">注册</Link>
                </div>
                <p className={style.rsolid}></p>
                </div>
                    <ul>
                        {/* 双向绑定 */}
                <li className={style.lifirst}>
                            <input type="text" value={iptuser} name={"iptuser"} onChange={change}/>
                    <span>帐号</span>
                </li>
                <li>
                            <input type="text" value={iptpass} name={"iptpass"} onChange={change}/>
                    <span>密码</span>
                </li>
                </ul>
                <div className={style.footbox}>
                        <input type="button" value="登 录" className={style.loginbtn} onClick={() =>{login(iptuser, iptpass) }}/>
                <a href="javascript:;" className={style.tishi}>忘记密码？</a>
                </div>
            </div>
            </>
        )
    }
    
}
let mapStateToProps = (state, props) => ({
    iptuser: state.iptuser,
    iptpass: state.iptpass,
    auth:state.user,
    
})
let mapDispatchToProps = (dispatch, props) => ({
    login: function(user, password){
        dispatch(asyncAction(
            types.checkUser,
            'http://localhost:3000/login',
            {
                name: user,
                password:password,
            }
        )).then((data) => {
            location.href = '/user'
            //bind改变this指向,this.props.history.push 或者没有回退功能的replace 是想无刷新跳转,不印象状态管理仓库的内容
            // this.props.history.push('/user')
            console.log(data)
        })
    },

    //牛逼的一套状态管理的双向绑定
    change: (ev) => {
        dispatch({type:types.change,payload:{content:ev.target.value,name:ev.target.name}})
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
