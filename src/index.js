import './index.scss';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './redux/redux-store'
import App from './App';
import {BrowserRouter} from "react-router-dom";


 let callSubscriber = (state) => {
    
    ReactDOM.render(
    <BrowserRouter>
    <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>, document.getElementById('root'));
}

callSubscriber(store.getState());

store.subscribe( () => {
    let state = store.getState();
    callSubscriber(state);
});






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




