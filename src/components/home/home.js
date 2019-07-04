import React from 'react';
import { Link } from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import Slider from '../../common/slider/silder';
import { connect } from 'react-redux';
import { asyncAction } from '../../store/asyncAction';
import * as types from '../../store/types';
import List from '../../common/list/list';
import QueueAnim from 'rc-queue-anim';
let sTop = 0

class Home extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        let {load_slider,load_list} = this.props
        load_slider()
        load_list()
        window.scrollTo(0,sTop)
        console.log(sTop)
    }
    componentWillMount() {
        // $(document).scrollTop(sTop)
        // console.log(sTop)
    }
    componentWillUnmount() {
        sTop = document.documentElement.scrollTop
        // console.log(sTop)
    }
    render() {
        let { slider, list } = this.props
        // console.log("home")
        // console.log(slider)
        return (
            <React.Fragment>
                 <QueueAnim
                type="scaleX"
                // type={["left", "right"]}
                    duration={500}   
                    interval={100}    
                    leaveReverse={true}
                    component={"div"}
                    onEnd={({ demo1, enter }) => {
                        // document.documentElement.scrollTop = sTop


                        // window.scrollTo(0, sTop)
                        // window.scrollBy(0,sTop)
                        // $(document).scrollTop(sTop)
                        
                        
                        // console.log($("body"))
                        $("html,body").animate({scrollTop:sTop})
                        // $("body,html").animate({scrollTop: 500 })
                    }}
                >
                    <section className="aui-flexView" key="demo1" >

                    {/* <!-- 头部信息 begin --> */}
                    <header className="aui-navBar">
                        <a href="javascript:;" className="aui-navBar-item">
                            <i className="aui-icon aui-icon-back"></i>
                        </a>
                        <div className="aui-navBar-center">
                            <span className="aui-navBar-title aui-navBar-logo" onClick={() => {
                                location.href="/shop"
                            }}></span>
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
                            { slider.length>0 ? <Slider slider={slider} />:null}
                            {/* <!-- 首页轮播滚动 end --> */}

                            


                            {/* <!-- 新闻列表置顶 begin --> */}
                            <div className="aui-news-box">
                                <article className="aui-news-list">

                                    {list.length > 0 && <List list={list} />}

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

                                    


                                    {list.length > 0 && <List list={list} />}

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
            </QueueAnim>
            </React.Fragment>
    )}
}

let MapStateToProps = (state,props) => ({
    slider: state.slider,
    list:state.list,
})

let MapDispatchToProps = (dispatch, props) => ({
    load_slider: () => dispatch(asyncAction(
        types.load_slider,
        'http://localhost:3000/banner'
    )),
    load_list: () => dispatch(asyncAction(
        types.load_list,
        'http://localhost:3000/news'
    ))
})


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Home);

