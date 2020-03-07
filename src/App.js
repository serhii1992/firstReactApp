import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='main-content'>
                <aside>
                    <Navbar/>
                    <Friends state={props.appState.friends}/>
                </aside>
                <Route path='/dialogs'
                       render={() => <Dialogs store={props.store}/>}/>
                <Route path='/profile'
                       render={() => <Profile profilePage={props.appState.profilePage}
                                              dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
}

export default App;
