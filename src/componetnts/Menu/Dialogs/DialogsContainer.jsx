import React from 'react';
import {sendMassageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMassageClick = () => {
        props.store.dispatch(sendMassageCreator())
    }
    let onNewMassageChange = (body) => {
         props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
    <Dialogs updateNewMessageBody={onNewMassageChange} sendMassage={onSendMassageClick}
    dialogsPage={state}/>
    )
}
export default DialogsContainer;