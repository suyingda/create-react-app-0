
import React, { Component } from "react"
import './css.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
/* class TopHeader extends Component {
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
export default TopHeader; */

import R1 from './../../views/R1.js'
import R2 from './../../views/R2.js'
import Bottom from './../Bottom.js'
 

const TopHeader = () => (
   
    <Router>
          
        <div>
            <div className="nav">
            <ul id="nav">
                    <li ><Link to="/">知乎</Link></li>
                    <li><Link to="/two">首页</Link></li>
                    <li><Link to="/Bottom">话题</Link></li>
                    <li>发现</li>
                    <li>消息</li>
                </ul>
            </div>
            <div className="clear-both"></div>
            <div>
                <Route exact path="/" component={R1} />
                <Route path="/two" component={R2} />
                <Route path="/Bottom" component={Bottom} />
             
            </div>
        </div>
         
    </Router>
   
)
export default TopHeader