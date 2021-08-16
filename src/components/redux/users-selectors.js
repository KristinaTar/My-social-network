export const getUsers = (state)=> {
    return state.UsersReducer.users
}

export const getPageSize = (state)=> {
    return state.UsersReducer.pageSize
}

export const getTotalUsersCount = (state)=> {
    return state.UsersReducer.totalUsersCount
}

export const getCurrentPage = (state)=> {
    return state.UsersReducer.currentPage
}

export const getIsFetching = (state)=> {
    return state.UsersReducer.isFetching
}

export const getFollowingInProgress = (state)=> {
    return state.UsersReducer.followingInProgress
}