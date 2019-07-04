import React from 'react';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router-dom';
const list = (props) => {
    // console.log(props)
    return (
        <>
            {props.list.map((item, index) => { 
                return (
                    <a href="/pages" className="aui-news-item" key={index}>
                        <div className="aui-news-item-img">
                            <img src={item.img} title="" alt=""/>
                        </div>
                        <div className="aui-news-item-text">
                            <h2 className="aui-news-item-text-title">{item.title}</h2>
                            <p className="aui-news-item-text-text">{item.text}</p>
                            <div className="aui-news-item-text-info">
                                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> {item.time}</span>
                                <span className="aui-news-item-text-info-text">{item.source}</span>
                            </div>
                        </div>
                    </a>
                )
            })}
        </>
    )
}
export default list;
