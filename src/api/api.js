import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "d246d7a3-4888-4cd4-b6ab-8a051bfe50fc"
    }

});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    setFollowUsers(userId) {
        return instance.delete(`follow/${userId}`);

    },
    setUnfollowUsers(userId) {
        return instance.post(`follow/${userId}`);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId);

    }

}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)

    }
}
