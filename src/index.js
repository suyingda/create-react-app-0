import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router.js';




/* import registerServiceWorker from './registerServiceWorker'; */
console.log(Router.RouterList)
ReactDOM.render(
    <div>
        <div>
            <Router />
        </div>
    </div>,
    document.getElementById('root')
);
/* registerServiceWorker(); */
