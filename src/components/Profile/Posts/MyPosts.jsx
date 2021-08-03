import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

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

const AddPostForm = (props) => {
    return  (
        <form onSubmit={props.handleSubmit }>
            <div>
                <Field component="textarea" name="newPostText" />
            </div>

            <div><button>Add Post</button></div>

        </form>
    )

}
const AddPostFormRedux = reduxForm({form: "ProfileAddPostForm" })(AddPostForm);
export default MyPosts;
