import {sendMessageCreator} from "../redux/dialogs-reducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps=(state)=>{

    return{
        dialogsPage:state.dialogsReducer,

    }
}


let mapDispatchToProps=(dispatch)=>{
    return{
        sendMessage: (newMessageText)=>{
             dispatch(sendMessageCreator(newMessageText));
        }
    }
}


export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogues);
