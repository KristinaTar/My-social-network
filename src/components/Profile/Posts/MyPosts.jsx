import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControl/FormsControl";

const MyPosts = (props) => {
 

    let newPostElement=React.createRef();
    let onAddPost=(values)=>{
        props.addNewPost(values.newPostText);

    }
    let posts=props.profilePage.postInfo.map(post=><Post message={post.message} LikesCount={post.LikesCount} />);

    return <div>
        <h3>New post</h3>
        <div>
            <div>
                <AddPostFormRedux onSubmit={onAddPost} />
            </div>
        </div>

        <div>
            {posts}
        </div>
    </div>
}
const maxLength10= maxLengthCreator(10)
const AddPostForm = (props) => {
    return  (
        <form onSubmit={props.handleSubmit }>
            <div>
                <Field component={Textarea} name="newPostText"  validate={[required, maxLength10]}/>
            </div>

            <div><button>Add Post</button></div>

        </form>
    )

}
const AddPostFormRedux = reduxForm({form: "ProfileAddPostForm" })(AddPostForm);
export default MyPosts;
