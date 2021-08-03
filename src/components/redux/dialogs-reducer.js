
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState={
        messagesUserNames: [
            {
                id: 1,
                name: "Vadym",
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYgu15XTLZlCOZE1Jqr8Hj8dkfCnwvZUH8Q&usqp=CAU'
            },
            {
                id: 2,
                name: "Max",
                photo: "https://i.pinimg.com/originals/d2/57/ef/d257ef22b46c7adb069354d31a9aace5.jpg"
            },
            {
                id: 3,
                name: "Alex",
                photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_HDkmkWRBkzvAPSvZzNgHxZ_UpIF7eVREaA&usqp=CAU"
            }
        ],
        messagesText: [
            {id: 1, message: "Hi!How are you?"},
            {id: 2, message: "Let'go out"},
            {id: 3, message: "Let's have fun:)"},
            {id: 1, message: "Love you"}

        ]


}

const dialogsReducer=(state=initialState, action)=> {
    switch (action.type) {
        case SEND_MESSAGE:
            let dialogNewMessage = action.newMessageText;
            return{
                ...state,
                messagesText: [...state.messagesText, {id: 3, message: dialogNewMessage}]

            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;