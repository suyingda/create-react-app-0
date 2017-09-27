
import React, { Component } from "react"
import './css.css';
/* import { BrowserRouter as Router, Route, Link } from 'react-router-dom' */
class TopHeader extends Component {
 
    
    render() {
        return (
            <div>
                  <ul id="nav">
                    <li >知乎</li>
                    <li>首页</li>
                    <li>话题</li>
                    <li>发现</li>
                    <li>消息</li>
                </ul>
                <div className="clear-both"></div>
            </div>
        );
    }
}
export default TopHeader;