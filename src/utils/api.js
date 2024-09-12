import axios from 'axios';
import CheckTokenExpired from './checkTokenExpired';


const HOST = 'https://f5b6-14-169-84-114.ngrok-free.app/api';


export const userApis = {
    getCurrentUser: '/current-user',
    updateCurrentUser: '/current-user',
    getReturnUrl: '/vnpay_return',
    createPayment: '/create_payment_url',
    getUserBySlug: (slug) => `/users/${slug}`,

    getAllCourses: '/courses',
    getCoursesBySlug: '/courses/results',
    getCourseDetails: (course_id) => `/courses/${course_id}`,
    getQuickViewLessons: (course_id) => `/courses/${course_id}/lessons/quick-view`,
    getLesson: (course_id, lesson_id) => `/courses/${course_id}/lessons/${lesson_id}`,
    getAllLesson: (course_id) => `/courses/${course_id}/lessons`,

    getMyCourses: '/my-courses',
    getRegisterCourses: '/registered-courses',
    showRegisterCourses: (slug) => `${slug}/registered-courses/show`,
    getMyCourseDetails: (course_id) => `/my-courses/${course_id}`,
    createCourse: '/my-courses',
    updateCourse: (course_id) => `/my-courses/${course_id}`,
    deleteCourse: (course_id) => `/my-courses/${course_id}`,

    getLessonsByCourseId: (course_id) => `/my-courses/${course_id}/lessons`,
    getLessonById: (course_id, lesson_id) => `/my-courses/${course_id}/lessons/${lesson_id}`,
    createLesson: (course_id) => `/my-courses/${course_id}/lessons`,
    updateLesson: (course_id, lesson_id) => `/my-courses/${course_id}/lessons/${lesson_id}`,
    deleteLesson: (course_id, lesson_id) => `/my-courses/${course_id}/lessons/${lesson_id}`,

    registerCourse: (course_id) => `/courses/${course_id}/register`,
    checkRegisterCourse: (course_id) => `/courses/${course_id}/register/checked`,

    createBlog: '/my-blogs',
    getMyBlogs: '/my-blogs',
    getMyBlogById: (id) => `/my-blogs/${id}`,
    updateMyBlog: (id) => `/my-blogs/${id}`,

    getAllBlogs: '/blogs/',
    getBlogsByTopic: (slug) => `/blogs/topics/${slug}`,
    getBlogById: (id) => `/blogs/${id}`,
    getOtherBlogs: (blog_id) => `/blogs/${blog_id}/others`,

    getNumberBlogLikes: (id) => `/blogs/${id}/likes`,
    getNumberBlogComments: (id) => `/blogs/${id}/count-comments`,
    likeBlog: (id) => `/blogs/${id}/likes`,
    checkLikedBlog: (id) => `/blogs/${id}/likes/checked`,

    getAllBookmarkBlogs: '/my-bookmarks',
    bookmarkBlog: (id) => `/blogs/${id}/bookmarks`,
    deleteBookmarkBlogs: (id) => `/my-bookmarks/${id}`,
    checkBookmark: (id) => `/blogs/${id}/bookmarks/checked`,

    getParentComments: (type, id) => `/${type}/${id}/comments`,
    createParentComment: (type, id) => `/${type}/${id}/comments`,
    createReplyComment: (type, blog_id) => `/${type}/${blog_id}/comments`,
    getChildrenComments: (type, blog_id, parent_comment_id) => `/${type}/${blog_id}/comments/${parent_comment_id}`,
    getNumberRepliesComment: (type, blog_id, parent_comment_id) =>
        `/${type}/${blog_id}/comments/${parent_comment_id}/count`,

    getLikeComments: (id) => `/comments/${id}/likes`, //Tách checkLiked ra vì checkLiked cần login
    likeComment: (id) => `/comments/${id}/likes`,
    getCommentById: (id) => `/comments/${id}`,
    updateComment: (id) => `/comments/${id}`,
    deleteComment: (id) => `/comments/${id}`,
    checkLikedComment: (id) => `/comments/${id}/check-liked`,

    login: '/auth/login/',
    checkEmail: '/auth/check-email/',
    register: '/auth/register/',
    verifyEmail: '/auth/verify-email/',
    sendOTP: '/auth/forgot-password/',

    verifyOTP: '/auth/verify-otp/',
    resetPassword: '/auth/reset-password/',
    changePassword: 'auth/change-password',
    refreshToken: '/refresh-token/',
    users: '/',
};

const api = axios.create({
    baseURL: HOST,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export const authAPI = () => {
    const token = localStorage.getItem('token');
    console.log('Token: ', token);

    const instance = axios.create({
        baseURL: HOST,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    });

    instance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');

            if (CheckTokenExpired(token)) {
                localStorage.removeItem('token');
                throw new axios.Cancel('Token expired. Redirecting to login.');
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    return instance;
};

export default api;
