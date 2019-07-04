import React from 'react';
import { Link } from 'react-router-dom';

class Recommend extends React.Component{
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
               <section className="aui-flexView">
		{/* <!-- 头部信息 begin --> */}
		<header className="aui-navBar">
			<a href="javascript:;" className="aui-navBar-item">
				<i className="aui-icon aui-icon-back"></i>
			</a>
			<div className="aui-navBar-center">
				<span className="aui-navBar-title">推荐</span>
			</div>
			<a href="javascript:;" className="aui-navBar-item">
				<i className="aui-icon aui-icon-user"></i>
			</a>
		</header>
		{/* <!-- 头部信/息 end --> */}
		<section className="aui-scrollView">
			<div className="aui-content">
				{/* <!-- 加载完成提/示 begin --> */}
				<div className="aui-load">
					{/* <p>为你精选10条推荐</p> */}
				</div>
				{/* <!-- 加载完成提示 end --> */}

				{/* <!-- 新闻列表置顶 begin --> */}
				<div className="aui-news-box">
					<article className="aui-news-list">
						<a href="special.html" className="aui-news-item">
							<div className="aui-news-item-img">
								<img src="/data/img/ad/ad3.jpg" title="" alt="" />
							</div>
							<div className="aui-news-item-text">
								<h2 className="aui-news-item-text-title"> <em className="aui-special">专题</em>外交部：美方动作频频 暴露“只能我有，不允许你有”霸权心态</h2>
								<p className="aui-news-item-text-text">华春莹表示，在中国苹果手机随处可见，我们不觉得是威胁，但美国如果有人买了华为手机</p>
								<div className="aui-news-item-text-info">
									<span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 25分钟前</span>
									<span className="aui-news-item-text-info-text">环球新闻网</span>
								</div>
							</div>
						</a>
						<a href="special.html" className="aui-news-item">
							<div className="aui-news-item-img">
								<img src="/data/img/ad/ad1.jpg" title="" alt=""/>
							</div>
							<div className="aui-news-item-text">
								<h2 className="aui-news-item-text-title"> <em className="aui-special">专题</em>外交部：美方动作频频 暴露“只能我有，不允许你有”霸权心态</h2>
								<p className="aui-news-item-text-text">华春莹表示，在中国苹果手机随处可见，我们不觉得是威胁，但美国如果有人买了华为手机</p>
								<div className="aui-news-item-text-info">
									<span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 25分钟前</span>
									<span className="aui-news-item-text-info-text">环球新闻网</span>
								</div>
							</div>
						</a>
						<a href="special.html" className="aui-news-item aui-news-list-two">
							<div className="clearfix">
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad4.jpg" alt=""/>
								</div>
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad2.jpg" alt=""/>
								</div>
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad3.jpg" alt=""/>
								</div>
							</div>
							<div className="aui-news-item-text">
								<h2 className="aui-news-item-text-title">江苏调查连云港灌河口化工园区污染事件：已挖到疑似排污暗管</h2>
								<div className="aui-news-item-text-info">
									<span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-comment"></i>2390</span>
									<span className="aui-news-item-text-info-text">潮流老湿</span>
								</div>
							</div>
						</a>
						<a href="special.html" className="aui-news-item aui-news-list-two">
							<div className="clearfix">
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad-2.jpg" alt=""/>
								</div>
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad-3.jpg" alt=""/>
								</div>
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad-4.jpg" alt=""/>
								</div>
							</div>
							<div className="aui-news-item-text">
								<h2 className="aui-news-item-text-title">江苏调查连云港灌河口化工园区污染事件：已挖到疑似排污暗管</h2>
								<div className="aui-news-item-text-info">
									<span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-comment"></i>2390</span>
									<span className="aui-news-item-text-info-text">潮流老湿</span>
								</div>
							</div>
						</a>
						<a href="special.html" className="aui-news-item aui-news-list-one">
							<div className="aui-news-item-img">
								<img src="/data/img/ad/ad-4.jpg" alt=""/>
								<i className="aui-play-btn"></i>
							</div>
							<div className="aui-news-item-text">
								<h2 className="aui-news-item-text-title">王思聪关注的最小网红，还是抖音第一小女神，才9岁就合作TFBOYS</h2>
								<div className="aui-news-item-text-info">
									<span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-comment"></i>2390</span>
									<span className="aui-news-item-text-info-text">潮流老湿</span>
								</div>
							</div>
						</a>
						<a href="special.html" className="aui-news-item aui-news-list-two">
							<div className="clearfix">
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad4.jpg" alt=""/>
								</div>
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad2.jpg" alt=""/>
								</div>
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad3.jpg" alt=""/>
								</div>
							</div>
							<div className="aui-news-item-text">
								<h2 className="aui-news-item-text-title">江苏调查连云港灌河口化工园区污染事件：已挖到疑似排污暗管</h2>
								<div className="aui-news-item-text-info">
									<span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-comment"></i>2390</span>
									<span className="aui-news-item-text-info-text">潮流老湿</span>
								</div>
							</div>
						</a>
						<a href="special.html" className="aui-news-item aui-news-list-two">
							<div className="clearfix">
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad4.jpg" alt=""/>
								</div>
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad2.jpg" alt=""/>
								</div>
								<div className="aui-news-item-img">
									<img src="/data/img/ad/ad3.jpg" alt=""/>
								</div>
							</div>
							<div className="aui-news-item-text">
								<h2 className="aui-news-item-text-title">江苏调查连云港灌河口化工园区污染事件：已挖到疑似排污暗管</h2>
								<div className="aui-news-item-text-info">
									<span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-comment"></i>2390</span>
									<span className="aui-news-item-text-info-text">潮流老湿</span>
								</div>
							</div>
						</a>
					</article>
				</div>
				<div className="divR"></div>
				{/* <!-- 新闻列表置顶 end --> */}

				{/* <!-- 关键词 标签 begin --> */}
				<div className="aui-label-box">
					<div className="aui-label-content">
						<ul>
							<li>
								<a href="special.html">独家</a>
							</li>
							<li>
								<a href="special.html">宠物</a>
							</li>
							<li>
								<a href="special.html">娱乐</a>
							</li>
							<li>
								<a href="special.html">画家</a>
							</li>
							<li>
								<a href="special.html">时尚</a>
							</li>
							<li>
								<a href="special.html">文学</a>
							</li>
							<li>
								<a href="special.html">汽车</a>
							</li>
							<li>
								<a href="special.html">历史</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="divR"></div>
				{/* <!-- 关键词 标签 end --> */}
			</div>
		</section>
		{/* <!-- 底部导航 begin --> */}
		<footer className="aui-footer-bar aui-footer-fixed">
			<a href="index.html" className="aui-footer-item">
					<span className="aui-footer-item-icon">
						<i className="aui-icon aui-icon-news"></i>
					</span>
				<span className="aui-footer-item-text">要闻</span>
			</a>
			<a href="video.html" className="aui-footer-item">
					<span className="aui-footer-item-icon">
						<i className="aui-icon aui-icon-video"></i>
					</span>
				<span className="aui-footer-item-text">视频</span>
			</a>
			<a href="hots.html" className="aui-footer-item current">
					<span className="aui-footer-item-icon">
						<i className="aui-icon aui-icon-hot"></i>
					</span>
				<span className="aui-footer-item-text">推荐</span>
			</a>
			<a href="me.html" className="aui-footer-item">
					<span className="aui-footer-item-icon">
						<i className="aui-icon aui-icon-my"></i>
					</span>
				<span className="aui-footer-item-text">我的</span>
			</a>
		</footer>
		{/* <!-- 底部导航 end --> */}
	</section>
            </React.Fragment>
    )}
}
export default Recommend;