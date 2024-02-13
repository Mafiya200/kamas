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
    setPhotoAuthUser(photoFile) {

        let formData = new FormData();
        formData.append('image', photoFile);


        return instance.put('profile/photo', formData, { headers: { "Content-Type": "multipart/form-data" } }).then((response) => {
            return response;
        });
    },
    setProfileAuthUser(formData) {
        return instance.put('profile', formData).then((response) => {
            return response;
        });
    },

};
export const securityAPI = {
    getSecurityCaptchaUrl() {
        return instance.get('security/get-captcha-url');
    },
    checkSecurity() {

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
    login(email, password, rememberMe = false, captcha = null) {
        return (instance.post('auth/login', {
            email,
            password,
            rememberMe,
            captcha,
        }).then((response) => {

            return response.data;
        }));
    },
    logout() {
        return (instance.delete('auth/login')
            .then((response) => {

                return response.data;
            }));
    },
};



