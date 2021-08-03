import React from 'react';
import s from './Post.module.css';

const Post = (props) => {


    return <div className={s.post}>
        <img className={s.userAvatar}
             src="https://cdn.vox-cdn.com/thumbor/Ri6iJ4CB3fkJ_qUbzUGqbffD8WE=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/13354209/avatar.png"
             alt="avatar"/>
        <div className={s.message}>{props.message}</div>
        <div className={s.like}>
            <span >Like </span>
            {props.LikesCount}


        </div>
    </div>


}
export default Post;
