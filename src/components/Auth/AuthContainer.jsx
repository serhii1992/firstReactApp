import React from "react";
import { connect } from "react-redux";
import UserAuth from "./UserAuth";
import { setAuthUserData, logout, getAuthUserData } from "../../Redux/auth-reducer";




class AuthContainer extends React.Component {

    componentDidMount() {

    }
    render() {
        return (
            <UserAuth {...this.props} />
        )
    }
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    logout:state.auth.logout
})




export default connect(mapStateToProps, { setAuthUserData,logout })(AuthContainer)
