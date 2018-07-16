import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Link,
  Route
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
              {/* 这里的to加不加/都可以 为什么啊？？？？？？？ */}
              <li><Link to="/clothes">服饰</Link></li>
              <li><Link to="/fruits">水果</Link></li>
              <li><Link to="/electionic">电子产品</Link></li>
              <li><Link to="/travel">旅行</Link></li>
            </ul>
          </div>
          {/* 右侧内容 */}
          <div className="right-content">
            {/* 加上switch，在页面中只渲染出当前匹配的dom，不加则都会渲染出来。效果上并没有区别？？？？？？？？ */}
            <Switch>
              {/* 加上这一行,path为/的时候也能出clothes的内容 */}
              {/* 不加exact, /fruits, /electionic, /travel都会被匹配到clothes上,除非换顺序，把path=“／”换到最后面 */}
              {/* 这里的path一定要有/作为前缀, 不然无法匹配到地址栏上面的pathname */}
              {/* component和render区别：需要向路由传递参数时候用render*/}

                {/* <Route path="/" exact component={Clothes} />
                <Route path="/clothes" component={Clothes} />
                <Route path="/fruits" component={Fruites} />
                <Route path="/electionic" component={Electionic} />
                <Route path="/travel" component={Travel} /> */}

                {/* 这里的data和props都会被传到组件的props中, 如果不用render，只有默认的props(location， history那些) */}
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
