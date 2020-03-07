import React from 'react';
import './index.css';
import store from './Redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App appState={store.getState()}
                 store={store}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root'));
};
store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
