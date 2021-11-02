import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMassageBody = state.newMessageBody;

    let onSendMassageClick = () => {
        props.sendMassage();
    }
    let onNewMassageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body)

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