import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
        <React.Fragment>
        {/* <!-- 底部导航 begin --> */}
                <footer className="aui-footer-bar aui-footer-fixed">
                <NavLink to="/home" className="aui-footer-item" activeClassName="current">
					<span className="aui-footer-item-icon">
						<i className="aui-icon aui-icon-news"></i>
					</span>
					<span className="aui-footer-item-text">要闻</span>
                </NavLink>
                <NavLink to="/video" className="aui-footer-item" activeClassName="current">
					<span className="aui-footer-item-icon">
						<i className="aui-icon aui-icon-video"></i>
					</span>
					<span className="aui-footer-item-text">视频</span>
                </NavLink>
                <NavLink to="/recommend" className="aui-footer-item" activeClassName="current">
					<span className="aui-footer-item-icon">
						<i className="aui-icon aui-icon-hot"></i>
					</span>
					<span className="aui-footer-item-text">推荐</span>
                </NavLink>
                <NavLink to="/user" className="aui-footer-item" activeClassName="current">
					<span className="aui-footer-item-icon">
						<i className="aui-icon aui-icon-my"></i>
					</span>
					<span className="aui-footer-item-text">我的</span>
                </NavLink>
			</footer>
			{/* <!-- 底部导航 end --> */}
		
        </React.Fragment>
    )}
}
export default Footer;
