import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStattusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return <div>
        <img className={s.contentImg}
             src={props.profile.photos.large}
             alt='ava'/>
             <ProfileStatusWithHooks status={props.status}
                                     updateStatus={props.updateStatus}
                                     userId={props.profile.userId}
                                     authorizedUserId={props.authorizedUserId} />
             <div>
                 <div>About me: {props.profile.aboutMe}</div>
                 <div>Instagram: {props.profile.instagram}</div>
                 <div>{
                     (props.profile.lookingForAJob) ? "Looking for a job" : " Not looking for a job"
                 }</div>
                 <div> Job: {props.profile.lookingForAJobDescription}</div>
                 <div> Full Name: {props.profile.fullName}</div>
                 <div> User ID:{props.profile.userId}</div>
                 <div> Website: {props.profile.website}</div>


             </div>


    </div>
}
export default ProfileInfo;
