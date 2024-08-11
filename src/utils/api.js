import axios from 'axios';

const HOST = 'https://dcd2-14-169-35-39.ngrok-free.app/api/users';

export const userApis = {
    login: '/login/',
    register: '/register/',
    verifyEmail: '/verify-email/',
    currentUser: '/current-user/',
    methodResetPassword: '/forgot-password/',
    sendResetPasswordOTP: '/otp/',
    sendResetPasswordEmail: '/email/',
    verifyOTP: '/otp-verification/',
    resetPassword: '/password/',
    refreshToken: '/refresh-token/',
    users: '/',
};

const api = axios.create({
    baseURL: HOST,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const authAPI = () => {
    const token =  localStorage.getItem('token');
    console.log('Token: ', token);

    return axios.create({
        baseURL: HOST,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export default api;
