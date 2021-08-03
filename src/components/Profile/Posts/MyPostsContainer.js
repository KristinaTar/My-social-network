import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps=(state)=>{
    return{
        profilePage:state.profileReducer,
        newPostText:state.profileReducer.newPostText
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addNewPost: (newPostText)=>{
            dispatch(addPostActionCreator(newPostText));
        }


    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;

