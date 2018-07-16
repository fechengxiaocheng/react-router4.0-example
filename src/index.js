import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    HashRouter
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    // 页面如果部署在二级目录，加basename='/xxx',
    <BrowserRouter basename="xlj/">
        <App />
    </BrowserRouter>, document.getElementById('root'));
    // BrowserRouter: 一般用来处理动态页面,适合用户互动多的网站，
    // HashRouter：一半用来处理静态页面，适合用于展示型的网站，seo的时候一般建议静态网页。

    // 如果是HashRouter地址栏里面会多一个/#：http://localhost:3000/#/electionic
    // <HashRouter>
    //     <App />
    // </HashRouter>, document.getElementById('root'));
registerServiceWorker();
