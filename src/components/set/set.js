
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as types from '../../store/types';
import { asyncAction } from '../../store/asyncAction';
class Set extends React.Component{
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        let {logOut} = this.props
        return (
            <>
               <section className="aui-flexView">
		{/* <!-- 头部信息 begin --> */}
		<header className="aui-navBar">
			<a href="javascript:history.back(-1)" className="aui-navBar-item">
				<i className="aui-icon aui-icon-back"></i>
			</a>
			<div className="aui-navBar-center">
				<span className="aui-navBar-title">设置</span>
			</div>
			<a href="javascript:;" className="aui-navBar-item">
				<i className="aui-icon aui-icon-user"></i>
			</a>
		</header>
		{/* <!-- 头部信息 end --> */}
		<section className="aui-scrollView">
			<div className="aui-content">
				<div className="aui-user-list-item">
					<a href="javascript:;" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-dope"></i>
							微信
						</div>
						<div className="aui-user-list-cell-right">
							未绑定
						</div>
					</a>
					<a href="javascript:;" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-lss"></i>
							QQ
						</div>
						<div className="aui-user-list-cell-right">
							C壹壹C同学
						</div>
					</a>
					<div className="divR"></div>
					<a href="javascript:;" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-jbb"></i>
							夜间模式
						</div>
						<div className="aui-user-list-cell-right">
							未开启
						</div>
					</a>
					<a href="javascript:;" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-llw"></i>
							文字模式
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-scc"></i>
							离线下载
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<div className="divR"></div>
					<a href="javascript:;" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-ydd"></i>
							推送设置
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-yjj"></i>
							新闻优选
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-szz"></i>
							关于我们
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-szz"></i>
							检查更新
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-szz"></i>
							用户协议
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" className="aui-user-list-cell" onClick={logOut}>
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-szz"></i>
							退出当前账户
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
				</div>
			</div>
		</section>
	</section>
            </>
        )
    }
   
    
}
let mapStateToProps = (state, props) => ({

   
    
})
let mapDispatchToProps = (dispatch, props) => ({
    logOut: () => {
        fetch(
            "http://localhost:3000/logout",
            {
                credentials:"include"
            }
        ).then(
            res=>res.json()
        ).then(
            data => {
                if (data.err == 0) {
                    alert(data.msg)
                    location.href='/user'
                } else {
                    alert('退出失败')
                }
            }
        )
   }
})
export default connect(mapStateToProps,mapDispatchToProps)(Set);