//import React from 'react';
import React from "react";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            postInfo: [
                {id: 1, message: "Hello, dear Friends!", LikesCount: 100},
                {id: 2, message: "Working hard", LikesCount: 260}

            ],
            newPostText: "I'm programmer, sometimes"
        },
        dialogsPage: {
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

            ],
            newMessageText: ""
        },
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    }
}

export default store;
window.store = store;