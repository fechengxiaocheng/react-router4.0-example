import React from 'react';
import {
    NavLink,
    Route
  } from 'react-router-dom';
  import Woman from './clothes/Woman'
  import Man from './clothes/Man'


class Electionic extends React.Component {
    render() {
        console.log('clothes', this.props);
        const url = this.props.match.url;
        return (
            <div className="clothes-content">
                这里是电子馆
                <ul>
                    <li><NavLink to={`${url}/woman`} activeClassName="selected">女装</NavLink></li>
                    <li><NavLink to={`${url}/man`} activeClassName="selected">男装</NavLink></li>
                    <li><NavLink to={`${url}/shoe`} activeClassName="selected">鞋子</NavLink></li>
                    <li><NavLink to={`${url}/bag`} activeClassName="selected">包包</NavLink></li>
                </ul>
                <div className="clothes-detail">
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