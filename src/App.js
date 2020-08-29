import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import TasksContainer from './components/Tasks/TasksContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initialization } from "./Redux/app-reducer";
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';


class App extends React.Component {
    componentDidMount() {
        this.props.initialization()
    }

    render() {
        if (!this.props.initializationApp) {
            return <Preloader />
        }

        return (

            <div >
                <div className='header'>
                    <div className='headerContent container'>
                        <Header />
                    </div>
                </div>
                <div className='mainContent container' >
                    <div className='navbar'>
                        <Navbar />
                    </div>
                    <div className="content">
                        <Route path='/dialogs' render={() => <DialogsContainer />} />
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                        <Route path='/users' render={() => <UsersContainer />} />
                        <Route path='/tasks' render={() => <TasksContainer />} />
                        <Route path='/login' render={() => <Login />} />
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initializationApp: state.app.initializationApp
})

export default compose(
    connect(mapStateToProps, { initialization }),
    withRouter
)(App);
