import React from 'react';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router-dom';
const slider = (porps) => {
    return (
        <ReactSwipe
            classNameName="carousel"
            swipeOptions={{ continuous: true, auto: 1000, speed: 1000 }}
        >
            {porps.slider.map((item, index) => {
                return (
                    <div className="slider-item" key={index}>
                        <Link to="/pages" >
                            <p className="aui-slider-text">{item.title}</p>
                            <img src={item.img} />
                        </Link>
                    </div>
                )
            })}
        </ReactSwipe>


        // <div className="m-slider" data-ydui-slider>
        //     <div className="slider-wrapper">
        //         <div className="slider-item">
        //             <a href="pages.html">
        //                 <p className="aui-slider-text">影片《复仇者联盟3：无限战争》主创在沪亮相</p>
        //                 <img src="/data/img/banner/banner1.jpg"/>
        //             </a>
        //         </div>
        //         <div className="slider-item">
        //             <a href="pages.html">
        //                 <p className="aui-slider-text">拉加德呼吁消除所有贸易保护主义措施</p>
        //                 <img src="/data/img/banner/banner2.jpg"/>
        //             </a>
        //         </div>
        //         <div className="slider-item">
        //             <a href="#">
        //                 <p className="aui-slider-text">海上港结束亚冠小组赛征程抵沪受到热情接机</p>
        //                 <img src="/data/img/banner/banner3.jpg"/>
        //             </a>
        //         </div>
        //         <div className="slider-item">
        //             <a href="#">
        //                 <p className="aui-slider-text">佟丽娅与男粉丝合影超亲切 比剪刀手嘟嘴卖萌</p>
        //                 <img src="/data/img/banner/banner4.jpg"/>
        //             </a>
        //         </div>
        //     </div>
        //     <div className="slider-pagination"></div>
        // </div>

        
    )
}
export default slider;
