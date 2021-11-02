const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MASSAGE = 'SEND-MASSAGE';
let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [{id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
        {id: 6, message: 'yo'},
    ],
    newMessageBody: ''
}
 const dialogsReducer = (state=initialState, action) => {

    let stateCopy = {
        ...state,
        //messages:[...state.messages]
    };



     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             stateCopy.newMessageBody = action.body;
             return stateCopy;

         case SEND_MASSAGE:
             let body = state.newMessageBody;
             stateCopy.newMessageBody = '';
             stateCopy.messages.push({id: 7, message: body});
             return stateCopy;

         default:
             return state;
     }

 }
export const sendMassageCreator= () => ({type: SEND_MASSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;