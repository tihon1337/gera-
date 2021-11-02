import React from 'react';
import {sendMassageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMassage:()=>{
            dispatch(sendMassageCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;