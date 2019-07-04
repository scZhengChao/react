import React from 'react';
import { Link } from 'react-router-dom';
import style from './login.module.css';  //login和reg重复,所以模块化引入,不能全局暴露,样式冲突

class Login extends React.Component{
    constructor() {
        super()
    }
    render() {
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
                <li className={style.lifirst}>
                    <input type="text" />
                    <span>帐号</span>
                </li>
                <li>
                    <input type="text" />
                    <span>密码</span>
                </li>
                </ul>
                <div className={style.footbox}>
                <input type="button" value="登 录" className={style.loginbtn}  />
                <a href="javascript:;" className={style.tishi}>忘记密码？</a>
                </div>
            </div>
            </>
    )}
}
export default Login;