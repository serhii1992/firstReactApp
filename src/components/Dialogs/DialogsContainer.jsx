import React from 'react';
import {sendMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { withRedirectComponent } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';





let mapStateToProps = (state) => {
    return {
        newMessageBody: state.dialogsPage.newMessageBody,
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage(bodyMessange){
            dispatch(sendMessageCreator(bodyMessange))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirectComponent
)(Dialogs)

