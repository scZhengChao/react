import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as types from '../../store/types';
import { asyncAction } from '../../store/asyncAction';
class Info extends React.Component{
    constructor() {
        super()
        this.state = {
		}
	}
    render() {
        let {  } = this.props
        return (
            <>
                <section className="aui-flexView " data-ydui-tab>
		{/* <!-- 头部信息 begin --> */}
		<header className="aui-navBar">
			<a href="javascript:history.back(-1)" className="aui-navBar-item">
				<i className="aui-icon aui-icon-back"></i>
			</a>
			<div className="aui-navBar-center">
				<span className="aui-navBar-title">
					<div className="aui-model-page-title">
                        <ul className="tab-nav tab-nav-clear-ri" onClick={this.tab}>
                                        

							<li className="tab-nav-item tab-active">
								<a href="javascript:;">消息</a>
							</li>
							<li className="tab-nav-item ">
								<a href="javascript:;">私信</a>
                            </li>               
						</ul>
					</div>
				</span>
			</div>
			<a href="javascript:;" className="aui-navBar-item">
				<i className="aui-icon aui-icon-user"></i>
			</a>
		</header>
		{/* <!-- 头部信息 end --> */}
		<section className="aui-scrollView">
			<div className="aui-content">
				<div className="tab-panel">
					<div className="tab-panel-item tab-active" >

						<div className="aui-user-list-item">
							<a href="javascript:;" className="aui-user-list-cell">
								<div className="aui-user-list-cell-left">
									<i className="aui-icon aui-icon-dope"></i>
									收到的点赞
								</div>
								<div className="aui-user-list-cell-right">
								</div>
							</a>
							<a href="javascript:;" className="aui-user-list-cell">
								<div className="aui-user-list-cell-left">
									<i className="aui-icon aui-icon-lss"></i>
									粉丝
								</div>
								<div className="aui-user-list-cell-right">

								</div>
							</a>
							<div className="divR"></div>
							<a href="javascript:;" className="aui-user-list-cell">
								<div className="aui-user-list-cell-left">
									<i className="aui-icon aui-icon-jbb"></i>
									新回复通知我
								</div>
								<div className="aui-user-list-cell-right">
									查看金币
								</div>
							</a>
							<a href="javascript:;" className="aui-user-list-cell">
								<div className="aui-user-list-cell-left">
									<i className="aui-icon aui-icon-llw"></i>
									最新评论
								</div>
								<div className="aui-user-list-cell-right">
								</div>
							</a>
						</div>
					</div>
								


					<div className="tab-panel-item " >
						<div className="aui-comment-box">
							<div className="aui-comment-cell">
								<div className="aui-comment-list">
									<div className="aui-comment-head">
										<img src="/data/img/user/head.jpg" alt=""/>
									</div>
									<div className="aui-comment-text">
										<h2>C壹壹C同学</h2>
										<p>这个真的很漂亮 赞一下 某宝上面上面时候出同款啊 ，等着秒杀呐 喜欢迪丽热巴 的🌹🌹🌹🌹 🙋🌺🌹</p>
									</div>
									<div className="aui-comment-zan">129 赞</div>
								</div>
								<div className="aui-comment-item">
									<div className="aui-comment-time">
										<p>今天 <span>评论</span></p>
									</div>
									<div className="aui-comment-color">
										<a href="#" className="aui-comment-list">
											<div className="aui-comment-img">
												<img src="/data/img/user/com1.jpg" alt=""/>
											</div>
											<div className="aui-comment-title">
												<p>迪丽热巴最近街拍大片，真的好服气她的身材，S迪时尚感也是强！</p>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="aui-comment-cell">
								<div className="aui-comment-list">
									<div className="aui-comment-head">
										<img src="/data/img/user/head.jpg" alt=""/>
									</div>
									<div className="aui-comment-text">
										<h2>C壹壹C同学</h2>
										<p>这个真的很漂亮 赞一下 某宝上面上面时候出同款啊 ，等着秒杀呐 喜欢迪丽热巴 的🌹🌹🌹🌹 🙋🌺🌹</p>
									</div>
									<div className="aui-comment-zan">129 赞</div>
								</div>
								<div className="aui-comment-item">
									<div className="aui-comment-time">
										<p>今天 <span>评论</span></p>
									</div>
									<div className="aui-comment-color">
										<a href="#" className="aui-comment-list">
											<div className="aui-comment-img">
												<img src="/data/img/user/com1.jpg" alt=""/>
											</div>
											<div className="aui-comment-title">
												<p>迪丽热巴最近街拍大片，真的好服气她的身材，S迪时尚感也是强！</p>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="aui-comment-cell">
								<div className="aui-comment-list">
									<div className="aui-comment-head">
										<img src="/data/img/user/head.jpg" alt=""/>
									</div>
									<div className="aui-comment-text">
										<h2>C壹壹C同学</h2>
										<p>这个真的很漂亮 赞一下 某宝上面上面时候出同款啊 ，等着秒杀呐 喜欢迪丽热巴 的🌹🌹🌹🌹 🙋🌺🌹</p>
									</div>
									<div className="aui-comment-zan">129 赞</div>
								</div>
								<div className="aui-comment-item">
									<div className="aui-comment-time">
										<p>今天 <span>评论</span></p>
									</div>
									<div className="aui-comment-color">
										<a href="#" className="aui-comment-list">
											<div className="aui-comment-img">
												<img src="/data/img/user/com1.jpg" alt=""/>
											</div>
											<div className="aui-comment-title">
												<p>迪丽热巴最近街拍大片，真的好服气她的身材，S迪时尚感也是强！</p>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="aui-comment-cell">
								<div className="aui-comment-list">
									<div className="aui-comment-head">
										<img src="/data/img/user/head.jpg" alt=""/>
									</div>
									<div className="aui-comment-text">
										<h2>C壹壹C同学</h2>
										<p>这个真的很漂亮 赞一下 某宝上面上面时候出同款啊 ，等着秒杀呐 喜欢迪丽热巴 的🌹🌹🌹🌹 🙋🌺🌹</p>
									</div>
									<div className="aui-comment-zan">129 赞</div>
								</div>
								<div className="aui-comment-item">
									<div className="aui-comment-time">
										<p>今天 <span>评论</span></p>
									</div>
									<div className="aui-comment-color">
										<a href="#" className="aui-comment-list">
											<div className="aui-comment-img">
												<img src="/data/img/user/com1.jpg" alt=""/>
											</div>
											<div className="aui-comment-title">
												<p>迪丽热巴最近街拍大片，真的好服气她的身材，S迪时尚感也是强！</p>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="aui-comment-cell">
								<div className="aui-comment-list">
									<div className="aui-comment-head">
										<img src="/data/img/user/head.jpg" alt=""/>
									</div>
									<div className="aui-comment-text">
										<h2>C壹壹C同学</h2>
										<p>这个真的很漂亮 赞一下 某宝上面上面时候出同款啊 ，等着秒杀呐 喜欢迪丽热巴 的🌹🌹🌹🌹 🙋🌺🌹</p>
									</div>
									<div className="aui-comment-zan">129 赞</div>
								</div>
								<div className="aui-comment-item">
									<div className="aui-comment-time">
										<p>今天 <span>评论</span></p>
									</div>
									<div className="aui-comment-color">
										<a href="#" className="aui-comment-list">
											<div className="aui-comment-img">
												<img src="/data/img/user/com1.jpg" alt=""/>
											</div>
											<div className="aui-comment-title">
												<p>迪丽热巴最近街拍大片，真的好服气她的身材，S迪时尚感也是强！</p>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="aui-comment-cell">
								<div className="aui-comment-list">
									<div className="aui-comment-head">
										<img src="/data/img/user/head.jpg" alt=""/>
									</div>
									<div className="aui-comment-text">
										<h2>C壹壹C同学</h2>
										<p>这个真的很漂亮 赞一下 某宝上面上面时候出同款啊 ，等着秒杀呐 喜欢迪丽热巴 的🌹🌹🌹🌹 🙋🌺🌹</p>
									</div>
									<div className="aui-comment-zan">129 赞</div>
								</div>
								<div className="aui-comment-item">
									<div className="aui-comment-time">
										<p>今天 <span>评论</span></p>
									</div>
									<div className="aui-comment-color">
										<a href="#" className="aui-comment-list">
											<div className="aui-comment-img">
												<img src="/data/img/user/com1.jpg" alt=""/>
											</div>
											<div className="aui-comment-title">
												<p>迪丽热巴最近街拍大片，真的好服气她的身材，S迪时尚感也是强！</p>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	</section>
            </>
        )
	}
	tab(ev) {
		$(ev.target).parent().addClass("tab-active").siblings().removeClass("tab-active")
		$(".tab-panel-item").eq($(ev.target).parent().index()).addClass("tab-active").siblings().removeClass("tab-active")
	}
	
    
}
let mapStateToProps = (state, props) => ({
 
})
let mapDispatchToProps = (dispatch, props) => ({
   
  
})
export default connect(mapStateToProps,mapDispatchToProps)(Info);