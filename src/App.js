import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Link,
  Route,
  Redirect
} from 'react-router-dom';
import Clothes from './components/Clothes';
import Fruites from './components/Fruites';
import Electionic from './components/Electionic';
import Travel from './components/Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to 电子商城</h1>
        </header>
        <div className="content">
          {/* 左侧菜单 */}
          <div className="left-content">
            <ul>
              <li><Link to="/clothes">服饰</Link></li>
              <li><Link to="/fruits">水果</Link></li>
              <li><Link to="/electionic">电子产品</Link></li>
              <li><Link to="/travel">旅行</Link></li>
            </ul>
          </div>
          {/* 右侧内容 */}
          <div className="right-content">
            <Switch>
                <Route path="/" exact render={(props) => (<Clothes {...props} data={{color: 'red'}} />)} />
                <Route path="/clothes" render={(props) => (<Clothes {...props} data={{color: 'red'}} />)} />
                <Route path="/fruits" render={(props) => (<Fruites {...props} data={{color: 'red'}} />)} />
                <Route path="/electionic" render={(props) => (<Electionic {...props} data={{color: 'red'}} />)} />
                <Route path="/travel" render={(props) => (<Travel {...props} data={{color: 'red'}} />)} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
