import React from 'react';
import s from "./Dialogues.module.css";
import {NavLink, Redirect, Route} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const DialogueItem = (props) => {
    return <div>

        <img className={s.avatarImg} src={props.photo} alt='avatar'/>&nbsp;&nbsp;&nbsp;
        <NavLink to={"/dialogues/" + props.id}>{props.name}</NavLink>


    </div>
}
const Message = (props) => {
    return <div>
        <div>{props.message}</div>
    </div>
}

const Dialogues = (props) => {

    let state = props.dialogsPage;
    let dialog = props.dialogsPage.messagesUserNames.map(dialog => <DialogueItem name={dialog.name} id={dialog.id}
                                                                                 photo={dialog.photo}/>);
    let messages = props.dialogsPage.messagesText.map(message =>
        <Route path={'/dialogues/' + message.id}
               render={
                   () => <Message message={message.message} id={message.id}/>
               }/>
    );

    let addNewMessage = (values) => {
        props.sendMessage (values.newMessageText);

    }

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
    <div className={s.structure}>
        <div className={s.UsersNames}>
            {dialog}
        </div>
        <div className={s.messages}>
            <div>{messages}</div>

        </div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
    )
}

const AddMessageForm = (props) => {
    return  (
    <form onSubmit={props.handleSubmit }>
        <div>
            <Field component="textarea" name="newMessageText" placeholder="Enter your name" />
        </div>

        <div><button>Send</button></div>

    </form>
    )

}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm" })(AddMessageForm);
export default Dialogues;
