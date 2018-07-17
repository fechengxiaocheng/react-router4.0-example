import React from 'react';
import {
    Link,
    Route,
    Redirect,
    Switch
  } from 'react-router-dom';
  import Woman from './clothes/Woman'
  import Man from './clothes/Man'


class Clothes extends React.Component {
    render() {
        console.log('clothes', this.props);
        const url = this.props.match.url;
        return (
            <div className="clothes-content">
                这里是服饰馆
                <ul>
                    <li><Link to={{pathname: `${url}/woman`, hash: 'my-hash', state: {userName: 'xlj'}}}>女装</Link></li>
                    <li><Link to={{pathname: `${url}/man`, state: {userName: 'zl'}}}>男装</Link></li>
                    <li><Link to={`${url}/shoe`} replace>鞋子</Link></li>
                    <li><Link to={`${url}/bag`}>包包</Link></li>
                </ul>
                <div className="clothes-detail">
                    <Switch>
                        <Route path={`${url}`} exact component={Woman}/>
                        <Route path={`${url}/woman`} component={Woman}/>
                        <Route path={`${url}/man`} component={Man}/>
                        <Route path={`${url}/shoe`} component={Woman}/>
                        <Route path={`${url}/bag`} component={Woman}/>
                        <Redirect to={`${url}/woman`} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Clothes;