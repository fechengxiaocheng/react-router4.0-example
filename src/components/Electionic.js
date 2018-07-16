import React from 'react';
import {
    Switch,
    NavLink,
    Route
  } from 'react-router-dom';
  import Woman from './clothes/Woman'
  import Man from './clothes/Man'


class Electionic extends React.Component {
    render() {
        console.log('clothes', this.props);
        // match.url : 当前path与pathname相匹配的部分。
        // match.path : 是路由path
        // match.isExact : path === pathname
        // match.params : 一个包含着 pathname 被 path-to-regexp 捕获的对象
        const url = this.props.match.url;
        console.log(url+ '/woman')
        return (
            <div className="clothes-content">
                这里是电子馆
                <ul>
                    {/* 这里要使地址栏正确的话，一定要机上前缀/， 否则是在原来的pathname基础上加上clothes/man，而不是替换oathname */}
                    
                    <li><NavLink to={`${url}/woman`} activeClassName="selected">女装</NavLink></li>
                    <li><NavLink to={`${url}/man`} activeClassName="selected">男装</NavLink></li>
                    <li><NavLink to={`${url}/shoe`} activeClassName="selected">鞋子</NavLink></li>
                    <li><NavLink to={`${url}/bag`} activeClassName="selected">包包</NavLink></li>
                </ul>
                <div className="clothes-detail">
                    {/* 这里加这行，就是默认点服饰的时候，也会渲染women组件，不用去点women */}
                    <Route path={`${url}`} exact component={Woman}/>
                    <Route path={`${url}/woman`} component={Woman}/>
                    <Route path={`${url}/man`} component={Man}/>
                    <Route path={`${url}/shoe`} component={Woman}/>
                    <Route path={`${url}/bag`} component={Woman}/>
                </div>
            </div>
        )
    }
}

export default Electionic;