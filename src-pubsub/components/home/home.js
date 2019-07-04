import React from 'react';
import { Link } from 'react-router-dom';
import pubsub from 'pubsub-js';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            pub:"asf"
        }
        pubsub.subscribe("bulala", (type, data) => {
            console.log("订阅方组件已经卸载了,注意要把订阅也给卸载了,因为订阅总线是顶层公共总线,要手动卸载,不会随着组件卸载而卸载 ")
            this.setState({pub:'zczzcczczcz'})
        })
    }
    componentWillUnmount() {
        //清除相关订阅,别面在别的页面发布bulala,因为订阅总线在最顶层,但是组件被卸载
        // pubsub.unsubscribe("bulalal")
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
                            <span className="aui-navBar-title aui-navBar-logo"></span>
                        </div>
                        <a href="javascript:;" className="aui-navBar-item">
                            <i className="aui-icon aui-icon-user"></i>
                        </a>
                    </header>
                    {/* <!-- 头部信息 end --> */}

                    <section className="aui-scrollView">
                        <div className="aui-content">
                            {/* <!-- 头部导航滑动 begin --> */}
                            <div className="aui-nav-top">
                                <div className="aui-nav-scroll">
                                    <div className="aui-nav-main">
                                        <div className="aui-nav-track">
                                            <a href="javascript:;" className="aui-nav-list current">要闻</a>
                                            <a href="javascript:;" className="aui-nav-list">视频</a>
                                            <a href="javascript:;" className="aui-nav-list">热点</a>
                                            <a href="javascript:;" className="aui-nav-list">社会</a>
                                            <a href="javascript:;" className="aui-nav-list">娱乐</a>
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
                                        <a href="channel.html" className="aui-icon aui-icon-add"></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 头部导航滑动 end --> */}

                            {/* <!-- 首页轮播滚动 begin --> */}
                            <div className="m-slider" data-ydui-slider>
                                <div className="slider-wrapper">
                                    <div className="slider-item">
                                        <Link to="/pages" >
                                            <p className="aui-slider-text">影片《复仇者联盟3：无限战争》主创在沪亮相</p>
                                            <img src="/data/img/banner/banner1.jpg" />
                                        </Link>
                                    </div>
                                    <div className="slider-item">
                                        <Link to="/pages" >
                                            <p className="aui-slider-text">拉加德呼吁消除所有贸易保护主义措施</p>
                                            <img src="/data/img/banner/banner2.jpg"/>
                                        </Link>
                                    </div>
                                    <div className="slider-item">
                                        <Link to="/pages" > 
                                            <p className="aui-slider-text">海上港结束亚冠小组赛征程抵沪受到热情接机</p>
                                            <img src="/data/img/banner/banner3.jpg"/>
                                        </Link>
                                    </div>
                                    <div className="slider-item">
                                        <Link to="/pages" > 
                                            <p className="aui-slider-text">佟丽娅与男粉丝合影超亲切 比剪刀手嘟嘴卖萌</p>
                                            <img src="/data/img/banner/banner4.jpg"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="slider-pagination"></div>
                            </div>
                            {/* <!-- 首页轮播滚动 end --> */}

                            {/* <!-- 新闻列表置顶 begin --> */}
                            <div className="aui-news-box">
                                <article className="aui-news-list">
                                    <a href="pages.html" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad1.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">外交部：美方动作频频 暴露“只能我有，不允许你有”霸权心态</h2>
                                            <p className="aui-news-item-text-text">华春莹表示，在中国苹果手机随处可见，我们不觉得是威胁，但美国如果有人买了华为手机</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 25分钟前</span>
                                                <span className="aui-news-item-text-info-text">环球新闻网</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="pages.html" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad2.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">阿森纳官宣温格今夏离任 22年枪手生涯正式终结</h2>
                                            <p className="aui-news-item-text-text">华春莹表示，在中国苹果手机随处可见，我们不觉得是威胁，但美国如果有人买了华为手机</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 35分钟前</span>
                                                <span className="aui-news-item-text-info-text">华文报社</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="pages.html" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad3.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">中兴通讯业务瞬间熄火 绝大部分产线进入停产状态</h2>
                                            <p className="aui-news-item-text-text">中兴通讯业务瞬间熄火 绝大部分产线进入停产状态</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 55分钟前</span>
                                                <span className="aui-news-item-text-info-text">金融头条</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="pages.html" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad4.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">“超能力”男孩一碰灯泡就亮 你也能做到</h2>
                                            <p className="aui-news-item-text-text">最近，有段视频流传很广：印度男孩Abu自称拥有“超能力”，他用身体任何部位轻轻一碰，电灯泡就会亮。这其实不是什么超能力，而是一个简单的物理现象。</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 1小时前</span>
                                                <span className="aui-news-item-text-info-text">和讯网</span>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                            <div className="divR"></div>
                            {/* <!-- 新闻列表置顶 end --> */}

                            {/* <!-- /</div>独家报道 begin --> */}
                            <div className="aui-picture">
                                <div className="aui-cell-flex">
                                    <a href="javascript:;" className="aui-cell-flex-item">
                                        <div className="aui-cell-text-fl">独家精选</div>
                                        <div className="aui-cell-text-fr aui-cell-arrow">查看更多</div>
                                    </a>
                                </div>
                                <div className="aui-picture-box">
                                    <div className="aui-slide-box aui-slide-box-clear">
                                        <div className="aui-slide-list">
                                            <ul className="aui-slide-item-list">
                                                <li className="aui-slide-item-item">
                                                    <a href="#" className="v-link">
                                                        <img className="v-img" src="/data/img/ad/ad-3.jpg"/>
                                                    </a>
                                                    <p>鹿晗28岁生日，跑男团凌晨集体送祝福 鹿晗今年这事可能会实现</p>
                                                </li>
                                                <li className="aui-slide-item-item">
                                                    <a href="#" className="v-link">
                                                        <img className="v-img" src="/data/img/ad/ad-1.jpg"/>
                                                    </a>
                                                    <p>短史记 “八百冷娃投黄河”的故事，并非凭空捏造</p>
                                                </li>
                                                <li className="aui-slide-item-item">
                                                    <a href="#" className="v-link">
                                                        <img className="v-img" src="/data/img/ad/ad-2.jpg"/>
                                                    </a>
                                                    <p>还是抖音第一小女神，才9岁就合作TFBOYS</p>
                                                </li>
                                                <li className="aui-slide-item-item">
                                                    <a href="#" className="v-link">
                                                        <img className="v-img" src="/data/img/ad/ad-1.jpg"/>
                                                    </a>
                                                    <p>2017国际超模大赛中国区总决赛三亚落幕</p>
                                                </li>
                                                <li className="aui-slide-item-item">
                                                    <a href="#" className="v-link">
                                                        <img className="v-img" src="/data/img/ad/ad-1.jpg"/>
                                                    </a>
                                                    <p>2017国际超模大赛中国区总决赛三亚落幕</p>
                                                </li>
                                                <li className="aui-slide-item-item">
                                                    <a href="#" className="v-link">
                                                        <img className="v-img" src="/data/img/ad/ad-1.jpg"/>
                                                    </a>
                                                    <p>2017国际超模大赛中国区总决赛三亚落幕</p>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="divR"></div>
                            {/* <!-- 独家报道 end --> */}

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
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 25分钟前</span>
                                                <span className="aui-news-item-text-info-text">环球新闻网</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad1.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">外交部：美方动作频频 暴露“只能我有，不允许你有”霸权心态</h2>
                                            <p className="aui-news-item-text-text">华春莹表示，在中国苹果手机随处可见，我们不觉得是威胁，但美国如果有人买了华为手机</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 25分钟前</span>
                                                <span className="aui-news-item-text-info-text">环球新闻网</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad2.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">阿森纳官宣温格今夏离任 22年枪手生涯正式终结</h2>
                                            <p className="aui-news-item-text-text">华春莹表示，在中国苹果手机随处可见，我们不觉得是威胁，但美国如果有人买了华为手机</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 35分钟前</span>
                                                <span className="aui-news-item-text-info-text">华文报社</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad3.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">中兴通讯业务瞬间熄火 绝大部分产线进入停产状态</h2>
                                            <p className="aui-news-item-text-text">中兴通讯业务瞬间熄火 绝大部分产线进入停产状态</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 55分钟前</span>
                                                <span className="aui-news-item-text-info-text">金融头条</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad4.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">“超能力”男孩一碰灯泡就亮 你也能做到</h2>
                                            <p className="aui-news-item-text-text">最近，有段视频流传很广：印度男孩Abu自称拥有“超能力”，他用身体任何部位轻轻一碰，电灯泡就会亮。这其实不是什么超能力，而是一个简单的物理现象。</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 1小时前</span>
                                                <span className="aui-news-item-text-info-text">和讯网</span>
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
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 25分钟前</span>
                                                <span className="aui-news-item-text-info-text">环球新闻网</span>
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

                            {/* <!-- 新闻列表置顶 begin --> */}
                            <div className="aui-news-box">
                                <article className="aui-news-list">
                                    <a href="javascript:;" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad1.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">外交部：美方动作频频 暴露“只能我有，不允许你有”霸权心态</h2>
                                            <p className="aui-news-item-text-text">华春莹表示，在中国苹果手机随处可见，我们不觉得是威胁，但美国如果有人买了华为手机</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 25分钟前</span>
                                                <span className="aui-news-item-text-info-text">环球新闻网</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad2.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">阿森纳官宣温格今夏离任 22年枪手生涯正式终结</h2>
                                            <p className="aui-news-item-text-text">华春莹表示，在中国苹果手机随处可见，我们不觉得是威胁，但美国如果有人买了华为手机</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 35分钟前</span>
                                                <span className="aui-news-item-text-info-text">华文报社</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad3.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">中兴通讯业务瞬间熄火 绝大部分产线进入停产状态</h2>
                                            <p className="aui-news-item-text-text">中兴通讯业务瞬间熄火 绝大部分产线进入停产状态</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 55分钟前</span>
                                                <span className="aui-news-item-text-info-text">金融头条</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="aui-news-item">
                                        <div className="aui-news-item-img">
                                            <img src="/data/img/ad/ad4.jpg" title="" alt=""/>
                                        </div>
                                        <div className="aui-news-item-text">
                                            <h2 className="aui-news-item-text-title">“超能力”男孩一碰灯泡就亮 你也能做到</h2>
                                            <p className="aui-news-item-text-text">最近，有段视频流传很广：印度男孩Abu自称拥有“超能力”，他用身体任何部位轻轻一碰，电灯泡就会亮。这其实不是什么超能力，而是一个简单的物理现象。</p>
                                            <div className="aui-news-item-text-info">
                                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> 1小时前</span>
                                                <span className="aui-news-item-text-info-text">和讯网</span>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                            <div className="divR"></div>
                            {/* <!-- 新闻列表置顶 end --> */}


                        </div>
                    </section>

</section>
            </React.Fragment>
    )}
}
export default Home;
