import React from 'react';
import {
    Link,
    Route
  } from 'react-router-dom';

import FruitesTemplate from './fruites/index';

class Fruites extends React.Component {
    render() {
        console.log('fruite...', this.props);
        const url = this.props.match.url;
        return (
            <div className="fruites-content">
                fruites
                {this.props.match.type}
                <ul>
                    <li><Link to={`${url}/apple`}>苹果</Link></li>
                    <li><Link to={`${url}/banana`}>香蕉</Link></li>
                    <li><Link to={`${url}/orange`}>橘子</Link></li>
                </ul>
                <Route path={`${url}/:type`} component={FruitesTemplate}/>
            </div>
        )
    }
}

export default Fruites;