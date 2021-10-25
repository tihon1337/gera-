const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MASSAGE = 'SEND-MASSAGE';

 const dialogsReducer = (state, action) => {
     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody = action.body;
             return state;
         case SEND_MASSAGE:
             let body = state.newMessageBody;
             state.newMessageBody = '';
             state.messages.push({id: 7, message: body});
             return state;
         default:
             return state;
     }

 }
export const sendMassageCreator= () => ({type: SEND_MASSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;