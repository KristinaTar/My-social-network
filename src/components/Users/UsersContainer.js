import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestedUsers, setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../redux/users-selectors";
import getIn from "redux-form/lib/structure/plain/getIn";


class UsersContainer extends React.Component {n
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader />  : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

/*let mapStateToProps = (state) => {

    return {
        users: state.UsersReducer.users,
        pageSize: state.UsersReducer.pageSize,
        totalUsersCount: state.UsersReducer.totalUsersCount,
        currentPage: state.UsersReducer.currentPage,
        isFetching: state.UsersReducer.isFetching,
        followingInProgress: state.UsersReducer.followingInProgress
    }
}*/

let mapStateToProps = (state) => {

    return {
        users: getUsers (state),
        pageSize: getPageSize (state),
        totalUsersCount: getTotalUsersCount (state),
        currentPage: getCurrentPage (state),
        isFetching: getIsFetching (state),
        followingInProgress: getFollowingInProgress (state)
    }
}


export default connect(mapStateToProps, {follow, unfollow,  toggleFollowingProgress, getUsers: requestedUsers, setCurrentPage })(UsersContainer);
