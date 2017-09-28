import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import Router from './Router.js'; */ // this is my router.js
import Router from './andou/routerTransit/Index.js'
 

console.log(Router.RouterList)
ReactDOM.render(
    <div>
        <div>
            <Router />
        </div>
    </div>,
    document.getElementById('root')
);

