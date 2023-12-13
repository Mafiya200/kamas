import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',

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

    getProfile(userId) {
        console.log('warn');
        return profileAPI.getProfile(userId);

    },

}
export const profileAPI = {
    getProfile(userId) {

        return (
            instance.get(`profile/${userId}`).then((response) => {

                return response.data;

            }));
    },


    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then((response) => {


            return response.data;

        });
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status,
        });
    },
};

export const authAPI = {
    me() {

        return (
            instance.get(`auth/me`).then(response => {

                return response.data;
            })
        );
    },
    login(email, password, rememberMe) {
        return (instance.post('auth/login', {
            email,
            password,
            rememberMe,
        }).then((response)=>{
            
            return response.data;
        }));
    },
};



