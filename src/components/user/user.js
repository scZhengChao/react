import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';

class User extends React.Component{
	render() {
		let { user,userdata } = this.props
		// console.log(userdata) // 通过props组件间船体过来的
        return (
			<React.Fragment>
				<QueueAnim
                type="scaleX"
                // type={["left", "right"]}
                    duration={500}   
                    interval={100}    
                    leaveReverse={true}
                    component={"div"}
                >

                <section className="aui-flexView">
		<section className="aui-scrollView">
			<div className="aui-content">

				<div className="aui-user-header">
					<div className="aui-user-content">
						<div className="aui-user-fex">
							<div className="aui-user-fex-head">
								<div className="aui-user-fex-photo">
									<img src="/data/img/user/head.jpg" alt="" />
								</div>
								<div className="aui-user-fex-title">
									<h2>{user.data.msg[0].name}</h2>
									<span>
										<em><i className="aui-icon aui-icon-sign"></i>北京</em>
										<em>天蝎座</em>
									</span>
								</div>
							</div>
							<div className="aui-user-fex-info">
								<a href="#"> <i className="aui-icon aui-icon-coin"></i> 签到领金币</a>
							</div>
						</div>
						<div className="aui-user-prompt">
							<p>您今天已阅读时长4小时</p>
						</div>
						<div className="aui-user-list">
							<a href="comment.html">
								<span className="aui-user-list-digit">523</span>
								<span className="aui-user-list-text">发表</span>
							</a>
							<a href="follow.html">
								<span className="aui-user-list-digit">1240</span>
								<span className="aui-user-list-text">关注</span>
							</a>
							<a href="fans.html">
								<span className="aui-user-list-digit">3423</span>
								<span className="aui-user-list-text">粉丝</span>
							</a>
							<a href="sign.html">
								<span className="aui-user-list-digit">23</span>
								<span className="aui-user-list-text">金币</span>
							</a>
						</div>
					</div>
				</div>
					<div className="aui-user-list-item">
					<Link to="/info" className="aui-user-list-cell">	
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-dope"></i>
							消息
						</div>
						<div className="aui-user-list-cell-right">
							最新消息
						</div>
					</Link>	
					<a href="history.html" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-lss"></i>
							历史/收藏
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<div className="divR"></div>
					<a href="sign.html" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-jbb"></i>
							金币
						</div>
						<div className="aui-user-list-cell-right">
							查看金币
						</div>
					</a>
					<a href="free.html" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-llw"></i>
							免流量看新闻
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<a href="https://shop108012643.m.taobao.com/" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-scc"></i>
							商城
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<div className="divR"></div>
					<a href="time.html" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-ydd"></i>
							阅读时长
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<a href="feedback.html" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-yjj"></i>
							意见反馈
						</div>
						<div className="aui-user-list-cell-right">

						</div>
					</a>
					<Link to="/set" className="aui-user-list-cell">
						<div className="aui-user-list-cell-left">
							<i className="aui-icon aui-icon-szz"></i>
							设置
						</div>
						<div className="aui-user-list-cell-right">
						</div>
					</Link>
				</div>

			</div>
		</section>
	</section>
				</QueueAnim>
			
			</React.Fragment>
		)
	}
	componentDidMount() {
		console.log(document.cookie)
	}
}
let mapStateToProps = (state, props) => ({
	user:state.user
})
let mapDispatchToProps = (dispatch, props) => ({
  
   
})
export default connect(mapStateToProps,mapDispatchToProps)(User);