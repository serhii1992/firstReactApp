import React from 'react';
import s from './Dialogs.module.css';
import DialogUser from "./DialogUser/DialogUser";
import MessageUser from "./MessageUser/MessageUser";
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from './../../utils/validators';
import { Textarea } from './../common/FormsControl/FormsControl';


const maxLength50 = maxLengthCreator(50)

const AddMessangeForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newMessangeForm"} placeholder={"Enter your message"} validate={[required, maxLength50 ]} />
            <button>Send</button>
        </form>
    )
};

const MessageReduxForm = reduxForm({ form: "AddMessange" })(AddMessangeForm)


const Dialogs = props => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData
        .map(d => <DialogUser name={d.name} id={d.id} imgSrc={d.imgSrc} />);
    let messengesElements = state.messagesData
        .map(m => <MessageUser message={m.message} />)

    const addMessage = (value) => {
        props.sendMessage(value.newMessangeForm);
     }

    return (
        <div className={s.wrapDialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messangesElements}>
                    {messengesElements}
                </div>
                <div className={s.submitMessage}>
                    <MessageReduxForm onSubmit={addMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs

