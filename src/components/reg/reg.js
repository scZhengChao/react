import React from 'react';
import { Link } from 'react-router-dom';
import './reg.css';
import { connect } from 'react-redux';
import * as types from '../../store/types';
class Reg extends React.Component{
    constructor() {
        super()
    }
    render() {
        let { iptuser, iptpass, change, reg } = this.props
        return (
            <>
                <div className="content">
                <p className="fhbtn"><a href="javascript:window.history.go(-1);"></a></p>
                <h1></h1>
                <div className="login-box">
                <p className="lsolid"></p>
                <div className="login">
                    <Link to="/login">登录</Link>
                    <span></span>
                    <Link to="/reg">注册</Link>
                </div>
                <p className="rsolid"></p>
                </div>
                <ul>
                <li className="lifirst">
                            <input type="text" valeu={iptuser} name={"iptuser"} onChange={change}/>
                    <span>帐号</span>
                </li>
                <li>
                            <input type="text" value={iptpass} name={"iptpass"} onChange={change}/>
                    <span>密码</span>
                </li>
                </ul>
                <div className="footbox">
                        <input type="button" value="注 册" className="login-btn" onClick={reg.bind(null,iptuser,iptpass)}/>
                <a href="javascript:;" className="tishi">忘记密码？</a>
                </div>
                </div>
            </>
    )}
}


let mapStateToProps = (state, props) => ({
    iptuser: state.iptuser,
    iptpass: state.iptpass,
})
let mapDispatchToProps = (dispatch, props) => ({
    reg: (name,password) => {
        fetch(
            `http://localhost:3000/reg?name=${name}&password=${password}`
        ).then(
            res=>res.json()
        ).then(
            data => {
                if (data.err == 0) {
                    alert("注册成功")
                    location.href= '/login'
                } else {
                    alert("注册失败")
                }
            }
        )
    },
    //牛逼的一套状态管理的双向绑定
    change: (ev) => {
        dispatch({type:types.change,payload:{content:ev.target.value,name:ev.target.name}})
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Reg);