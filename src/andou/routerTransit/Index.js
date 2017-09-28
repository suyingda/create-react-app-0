/**
 * @Created by Chris on 7/27/2017
 * @Description 档案文章列表路由中转
 */
import React from 'react';
import {Redirect} from 'react-router';
class TransitBlogArchives extends React.Component{
    constructor(props){
        super(props);
        this.componentInitialState.bind(this)();
    }
    componentInitialState(){
        /* let jumpParam = this.props.match.params;
        let queryType = parseInt(jumpParam.t);
        let queryWord = jumpParam.q;
        let queryStartPage = jumpParam.p */
        this.state = {
            t:queryType,
            q:queryWord,
            p:queryStartPage,
        };
    };
    componentDidMount(){};
    componentDidUpdate(){};

    render(){
        return(
            <Redirect to={"/archives/"+this.state.t+"/"+this.state.q+"/"+this.state.p}/>
        );
    };
};

export default (TransitBlogArchives);