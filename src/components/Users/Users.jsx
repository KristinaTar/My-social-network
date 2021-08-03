import React from "react";
import styles from "./user.module.css";
import UserPhoto from "../assets/photos/Sample_User_Icon.png";
import {NavLink} from "react-router-dom";

let Users=(props) => {
    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages=[];
    const pageRange = 21;
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        {/*PAGES*/}
        <div>
            {pages.map(p => {
                if((p===1)
                    ||(props.currentPage <= ((pageRange-1)/2+2) && p<=(pageRange-1)/2+3)
                    ||(props.currentPage > (pageRange-1)/2+2 && p >= props.currentPage - (pageRange-1)/2 && p <= props.currentPage + (pageRange-1)/2)
                    ||(p===pages.length))
                            return <span className={props.currentPage===p ? styles.selectedPage : undefined}
                            onClick={(e)=>{props.onPageChanged(p);}}> {p} </span>
                if ((props.currentPage > (pageRange-1)/2+2 && p === 2)
                    ||(props.currentPage < pages.length-3 && p === pages.length-1))return "..";
                return "";

            })}

        </div>
        {/*PAGES END*/}

        {props.users.map(u => <div key={u.id}>
          <span>
              <div>
                  <NavLink to={"/profile/" + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={styles.usersPhoto} alt={'ava'}/>
                  </NavLink>
              </div>
              <div>
                  {u.followed
                      ? <button disabled={props.followingInProgress.some(id =>id===u.id)} onClick={() => {
                          props.unfollow(u.id);}}> Unfollow </button>
                      : <button disabled={props.followingInProgress.some(id =>id===u.id)}  onClick={() =>{
                          props.follow(u.id);}}> Follow </button>
                  }

                </div>
            </span>
            <span>
                <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
                <span>
                <div>ID: {u.id}</div>
                <div>Status: {u.status}</div>
            </span>
                </span>
        </div>)

        }


    </div>

}
export default Users;
