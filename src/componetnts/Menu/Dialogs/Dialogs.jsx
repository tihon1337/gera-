import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMassageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMassageBody = state.newMessageBody;
    let onSendMassageClick = () => {
        props.store.dispatch(sendMassageCreator())
    }
    let onNewMassageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMassageBody} onChange={onNewMassageChange}
                                   placeholder='Enter your message'></textarea>
                    </div>
                    <div><button onClick={onSendMassageClick}>Send</button></div>
                </div>

            </div>
        </div>
    )
}
export default Dialogs;