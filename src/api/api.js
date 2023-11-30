import axios from "axios";


const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',

});

export const usersAPI = {
    getUsers(pageActive = 1, pageSize = 10) {
        return (instance.get(`users?page=${pageActive}&count=${pageSize}`).then((response) => {
            return response.data;
        }));
    },
    userFollow(userId) {
        return (instance.post(`follow/${userId}`).then((response) => {
            return response.data;
        }));
    },
    userUnFollow(userId) {
        return (
            instance.delete(`follow/${userId}`).then((response) => {
                return response.data;
            }));
    },
}



