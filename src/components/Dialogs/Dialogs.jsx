import React from 'react';
import s from './Dialogs.module.css';
import DialogUser from "./DialogUser/DialogUser";
import MessageUser from "./MessageUser/MessageUser";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";


const Dialogs = props => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData
        .map(d => <DialogUser name={d.name} id={d.id} imgSrc={d.imgSrc}/>);
    let messengesElements = state.messagesData
        .map(m => <MessageUser message={m.message}/>)

    let newMessageBody = state.newMessageBody;
    let textMessage = React.createRef();
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));

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
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              ref={textMessage}
                              placeholder={'Enter your message'}/>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs