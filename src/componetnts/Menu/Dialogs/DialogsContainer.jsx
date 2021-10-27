import React from 'react';
import {sendMassageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContex";


const DialogsContainer = (props) =>
{
    return <StoreContext.Consumer>
        {(store) => {

            let state = store.getState().dialogsPage;

            let onSendMassageClick = () => {
                store.dispatch(sendMassageCreator())
            }
            let onNewMassageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs updateNewMessageBody={onNewMassageChange}
                            sendMassage={onSendMassageClick}
                            dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>

}
export default DialogsContainer;