import React from 'react'
import { HashRouter  as Router , Redirect , Switch , Route } from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//获取Action
import *as actions from '../actions/actions.js';
//JS动画
import {animate} from '../util/universal.js';
//木偶组件
import MobileNav from '../components/MobileNav/index.jsx';  //手机导航
import MobileNavDimmer from '../components/MobileNavDimmer/index.jsx';  //手机导航遮罩层
import HeaderNav from '../components/HeaderNav/index.jsx';  //头部导航组件
import Footer from '../components/Footer/index.jsx';

//获取智能组件页面
import Home from '../containers/Home/index.jsx'
import Blog from '../containers/Blog/index.jsx'
import BlogArchives from '../containers/BlogArchives/index.jsx'
import AboutMe from '../containers/Aboutme/index.jsx'
import NotFound from '../containers/NotFound/index.jsx'
//获取中转路由组件
import TransitBlogArchives from './routerTransit/TransitBlogArchives.jsx';

class RouterMap extends React.Component {
    constructor(props){
        super(props);
        //查询博客列表信息
        this.getInitializeLoad.bind(this)();
    }
    render() {
        return (
            <Router>
                <div>
                    {/*公共整个内容区域*/}
                    <div className="container">
                        {/*公共导航*/}
                        <HeaderNav
                            onSwitchMobileMenu={(status)=>{this.onSwitchMobileMenu.bind(this)(status)}}
                            onChangeLanguage={(langs)=>{this.onChangeLanguage.bind(this)(langs)}}
                            language={this.props.language}
                            isOpenMobileMenu={this.props.isOpenMobileMenu}
                        />
                        {/*公共路由配置*/}
                        <div className="content-wrap">
                            <Switch>
                                {/*路由中转件*/}
                                <Route path="/archive/:t/:q/:p" component={TransitBlogArchives}/>
                                {/*正常路由*/}
                                <Route exact path="/" render={()=>(<Redirect to="/home"/>)}/> {/*使用Redirect重定向跳转路由*/}
                                <Route path='/home' component={Home}/>
                                <Route path="/blog/:blogId" component={Blog}/>
                                <Route path="/archives/:t/:q/:p" component={BlogArchives}/>
                                <Route path="/me" component={AboutMe}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                        <div>
                            <Footer/>
                        </div>
                    </div>
                    {/*公共手机导航页面*/}
                    <MobileNav
                        onAnimateMobileMenu={(elm)=>{this.onAnimateMobileMenu.bind(this)(elm)}}
                        onChangeLanguage={(langs)=>{this.onChangeLanguage.bind(this)(langs)}}
                        onCloseMobileMenu={()=>{this.onCloseMobileMenu.bind(this)()}}
                        language={this.props.language}
                        labelInfo={this.props.labelInfo}
                        isOpenMobileMenu={this.props.isOpenMobileMenu}
                    />
                    {/*公共手机导航遮罩层*/}
                    <MobileNavDimmer
                        onCloseMobileMenu={()=>this.onCloseMobileMenu.bind(this)()}
                        isOpenMobileMenu={this.props.isOpenMobileMenu}
                    />
                </div>
            </Router>
        )
    };
    //所有的初始化查询
    getInitializeLoad(){
        //查询标签列表数据
        this.props.actions.blogLabelQueryByDefault();
    };


    //点击文本区域直接关闭Mobile菜单
    onCloseMobileMenu(){
        if(true === this.props.isOpenMobileMenu){
            this.props.actions.handleMobileMenu(false);
        }
    }
}

function mapStateToProps(state){
    return {
        language : state.languageReducer,
        isOpenMobileMenu : state.isOpenMobileMenu,
        labelInfo : state.labelInfo.blogLabelList,
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions,dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RouterMap);