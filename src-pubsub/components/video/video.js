import React from 'react';
import { Link } from 'react-router-dom';

class Video extends React.Component{
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
               	<section className="aui-flexView">
		<section className="aui-scrollView">
			<div className="aui-content">
				{/* <!-- 头部导航滑动 begin --> */}
				<div className="aui-nav-top">
					<div className="aui-nav-scroll">
						<div className="aui-nav-main">
							<div className="aui-nav-track">
								<a href="javascript:;" className="aui-nav-list current">推荐</a>
								<a href="javascript:;" className="aui-nav-list">直播</a>
								<a href="javascript:;" className="aui-nav-list">网红</a>
								<a href="javascript:;" className="aui-nav-list">搞笑</a>
								<a href="javascript:;" className="aui-nav-list">生活</a>
								<a href="javascript:;" className="aui-nav-list">军事</a>
								<a href="javascript:;" className="aui-nav-list">科技</a>
								<a href="javascript:;" className="aui-nav-list">汽车</a>
								<a href="javascript:;" className="aui-nav-list">体育</a>
								<a href="javascript:;" className="aui-nav-list">财经</a>
								<a href="javascript:;" className="aui-nav-list">国际</a>
								<a href="javascript:;" className="aui-nav-list">时尚</a>
								<a href="javascript:;" className="aui-nav-list">时尚</a>
								<a href="javascript:;" className="aui-nav-list">房产</a>
								<a href="javascript:;" className="aui-nav-list">历史</a>
								<a href="javascript:;" className="aui-nav-list">酷站</a>
							</div>
						</div>
						<div className="aui-nav-more">
							<a href="javascript:;" className="aui-icon aui-icon-add"></a>
						</div>
					</div>
				</div>
				{/* <!-- 头部导航滑动 end --> */}


				{/* <!-- 新闻列表置顶 begin --> */}
				<div className="aui-news-box">
					<article className="aui-news-list">
						<a href="javascript:;" className="aui-news-item aui-news-list-one">
							<div className="aui-news-item-img">
								<img src="/data/img/ad/ad-2.jpg" alt=""/>
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
						<a href="javascript:;" className="aui-news-item aui-news-list-one">
							<div className="aui-news-item-img">
								<img src="/data/img/ad/ad-3.jpg" alt=""/>
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
						<a href="javascript:;" className="aui-news-item aui-news-list-one">
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
					</article>
				</div>
				<div className="divR"></div>
				{/* <!-- 新闻列表置顶 end --> */}

				{/* <!-- 关键词 标签 begin --> */}
				<div className="aui-label-box">
					<div className="aui-label-content">
						<ul>
							<li>
								<a href="javascript:;">独家</a>
							</li>
							<li>
								<a href="javascript:;">宠物</a>
							</li>
							<li>
								<a href="javascript:;">娱乐</a>
							</li>
							<li>
								<a href="javascript:;">画家</a>
							</li>
							<li>
								<a href="javascript:;">时尚</a>
							</li>
							<li>
								<a href="javascript:;">文学</a>
							</li>
							<li>
								<a href="javascript:;">汽车</a>
							</li>
							<li>
								<a href="javascript:;">历史</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="divR"></div>
				{/* <!-- 关键词 标签 end --> */}

			</div>

			{/* <!-- 底部导航 begin --> */}
			<footer className="aui-footer-bar aui-footer-fixed">
				<a href="index.html" className="aui-footer-item">
					<span className="aui-footer-item-icon">
						<i className="aui-icon aui-icon-news"></i>
					</span>
					<span className="aui-footer-item-text">要闻</span>
				</a>
				<a href="video.html" className="aui-footer-item current">
					<span className="aui-footer-item-icon">
						<i className="aui-icon aui-icon-video"></i>
					</span>
					<span className="aui-footer-item-text">视频</span>
				</a>
				<a href="hots.html" className="aui-footer-item">
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

	</section>
            </React.Fragment>
    )}
}
export default Video;