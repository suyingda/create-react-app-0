import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'//导入的方式跟之前有点变化

import './'
import R1 from './views/R1.js'
import R2 from './views/R2.js'
import TopHeader from './components/TopHeader/TopHeader.js'
/* const One = () => (
    <div>
        <h2>首页</h2>
    </div>
) 

const Two = () => (
    <div>
        <h2>我是第二页</h2>
    </div>
)
*/

const RouterList = () => (
    <Router>
        <div>
            <div className="nav">
                <li><Link to="/">首页</Link></li>
                <li><Link to="/two">第二页</Link></li>
                <li><Link to="/TopHeader">第san页</Link></li>
            </div>
            <div className="clear-both"></div>
            <div>
                <Route exact path="/" component={R1} />
                <Route path="/two" component={R2} />
                <Route path="/TopHeader" component={TopHeader} />
            </div>
        </div>
    </Router>
)
export default RouterList