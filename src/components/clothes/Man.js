import React from 'react';
import Necktie from './man/Necktie';
import Suit from './man/Suit';
import LeatherShoes from './man/LeatherShoes';
import {
    Switch,
    Link,
    Route
  } from 'react-router-dom';

class Man extends React.Component {
    render() {
        console.log('man', this.props);
        const url = this.props.match.url;
        return (
            <div className="man-content">
                <ul>
                    {/* 这里要使地址栏正确的话，一定要机上前缀/， 否则是在原来的pathname基础上加上clothes/man，而不是替换oathname */}
                    <li><Link to={`${url}/necktie`}>领带</Link></li>
                    <li><Link to={`${url}/suit`}>西装</Link></li>
                    <li><Link to={`${url}/leather-shoes`}>皮鞋</Link></li>
                </ul>
                <div className="clothes-detail">
                    <Route path={`${url}/necktie`} component={Necktie}/>
                    <Route path={`${url}/suit`} component={Suit}/>
                    <Route path={`${url}/leather-shoes`} component={LeatherShoes}/>
                </div>
            </div>
        )
    }
}

export default Man;