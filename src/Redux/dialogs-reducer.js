const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {
            name: 'Serhii',
            id: 1,
            imgSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
        },
        {
            name: 'Ira',
            id: 2,
            imgSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
        },
        {
            name: 'Dron',
            id: 3,
            imgSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
        },
        {
            name: 'Yura',
            id: 4,
            imgSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
        },
        {
            name: 'Pasha',
            id: 5,
            imgSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
        }
    ],
    messagesData: [
        {message: 'Ну шо ты', id: 0},
        {message: 'hello', id: 1},
        {message: 'perever', id: 2}
    ],
    newMessageBody: '',
};

const dialogsReducer = (state=initialState, action ) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = action.body;
            state.newMessageBody = '';
            state.messagesData.push({message: body, id: 3})
            return state
        default:
            return state
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = body => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer