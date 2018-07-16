import React from 'react';
import {
    Switch,
    Link,
    Route
  } from 'react-router-dom';
  import Woman from './clothes/Woman'
  import Man from './clothes/Man'


class Clothes extends React.Component {
    render() {
        console.log('clothes', this.props);
        // match.url : 当前path与pathname相匹配的部分。
        // match.path : 是路由path
        // match.isExact : path === pathname
        // match.params : 一个包含着 pathname 被 path-to-regexp 捕获的对象
        const url = this.props.match.url;
        return (
            <div className="clothes-content">
                这里是服饰馆
                <ul>
                    {/* 这里要使地址栏正确的话，一定要机上前缀/， 否则是在原来的pathname基础上加上clothes/man，而不是替换oathname */}
                    
                    <li><Link to={`${url}/woman`}>女装</Link></li>
                    <li><Link to={`${url}/man`}>男装</Link></li>
                    <li><Link to={`${url}/shoe`}>鞋子</Link></li>
                    <li><Link to={`${url}/bag`}>包包</Link></li>
                </ul>
                <div className="clothes-detail">
                    {/* 这里加这行，就是默认点服饰的时候，也会渲染women组件，不用去点women */}
                    {/* 这里要加exact，否则/clothes/woman，既会匹配/clothes,又回匹配／clothes/woman； 或者家exact */}
                    <Route path={`${url}`} exact component={Woman}/>
                    <Route path={`${url}/woman`} component={Woman}/>
                    <Route path={`${url}/man`} component={Man}/>
                    <Route path={`${url}/shoe`} component={Woman}/>
                    <Route path={`${url}/bag`} component={Woman}/>
                    {/* redict之后，导致mathc混乱查一下。。。。this.props.history.location.pathname是redict的url。??????? */}
                </div>
            </div>
        )
    }
}

export default Clothes;