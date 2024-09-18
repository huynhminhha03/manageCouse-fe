import axios from 'axios';

const HOST = 'https://18a2-113-185-79-88.ngrok-free.app/api';

export const userApis = {
    getCurrentUser: '/users/current-user/',
    updateCurrentUser: '/users/current-user/',
    getReturnUrl: '/users/vnpay_return/',
    createPayment: '/users/create_payment_url/',
    getUserBySlug: (slug) => `/users/${slug}/`,

    getAllCourses: '/users/courses/',
    getCoursesBySlug: '/users/courses/results/',
    getCourseDetails: (course_id) => `/users/courses/${course_id}/`,
    getQuickViewLessons: (course_id) => `/users/courses/${course_id}/lessons/quick-view/`,
    getLesson: (course_id, lesson_id) => `/users/courses/${course_id}/lessons/${lesson_id}/`,
    getAllLesson: (course_id) => `/users/courses/${course_id}/lessons/`,

    getMyCourses: '/users/my-courses/',
    getRegisterCourses: '/users/registered-courses/',
    showRegisterCourses: (slug) => `/users/${slug}/registered-courses/show/`,
    getMyCourseDetails: (course_id) => `/users/my-courses/${course_id}/`,
    createCourse: '/users/my-courses/',
    updateCourse: (course_id) => `/users/my-courses/${course_id}/`,
    deleteCourse: (course_id) => `/users/my-courses/${course_id}/`,

    getLessonsByCourseId: (course_id) => `/users/courses/${course_id}/lessons/`,
    getLessonById: (course_id, lesson_id) => `/users/courses/${course_id}/lessons/${lesson_id}/`,
    createLesson: (course_id) => `/users/my-courses/${course_id}/lessons/`,
    updateLesson: (course_id, lesson_id) => `/users/courses/${course_id}/lessons/${lesson_id}/`,
    deleteLesson: (course_id, lesson_id) => `/users/courses/${course_id}/lessons/${lesson_id}/`,

    registerCourse: (course_id) => `/users/courses/${course_id}/register/`,
    checkRegisterCourse: (course_id) => `/users/courses/${course_id}/register/checked/`,

    createBlog: '/users/my-blogs/',
    getMyBlogs: '/users/my-blogs/',
    getMyBlogById: (id) => `/users/s/my-blogs/${id}/`,
    updateMyBlog: (id) => `/users/s/my-blogs/${id}/`,

    getAllBlogs: '/users/blogs/',
    getBlogById: (id) => `/users/s/blogs/${id}/`,
    getOtherBlogs: (blog_id) => `/users/blogs/${blog_id}/others/`,

    getNumberBlogLikes: (id) => `/users/blogs/${id}/likes/`,
    getNumberBlogComments: (id) => `/users/s/blogs/${id}/count-comments/`,
    likeBlog: (id) => `/users/s/blogs/${id}/likes/`,
    checkLikedBlog: (id) => `/users/s/blogs/${id}/likes/checked/`,

    getAllBookmarkBlogs: '/users/my-bookmarks/',
    bookmarkBlog: (id) => `/users/blogs/${id}/bookmarks/`,
    deleteBookmarkBlogs: (id) => `/users/my-bookmarks/${id}/`,
    checkBookmark: (id) => `/users/blogs/${id}/bookmarks/checked/`,

    getParentComments: (type, id) => `/users/${type}/${id}/comments/`,
    createParentComment: (type, id) => `/users/${type}/${id}/comments/`,
    createReplyComment: (type, blog_id) => `/users/${type}/${blog_id}/comments/`,
    getChildrenComments: (type, blog_id, parent_comment_id) => `/users/${type}/${blog_id}/comments/${parent_comment_id}/`,
    getNumberRepliesComment: (type, blog_id, parent_comment_id) =>
        `/users/${type}/${blog_id}/comments/${parent_comment_id}/count/`,

    getLikeComments: (id) => `/users/comments/${id}/likes/`, //Tách checkLiked ra vì checkLiked cần login
    likeComment: (id) => `/users/comments/${id}/likes/`,
    getCommentById: (id) => `/users/comments/${id}/`,
    updateComment: (id) => `/users/comments/${id}/`,
    deleteComment: (id) => `/users/comments/${id}/`,
    checkLikedComment: (id) => `/users/comments/${id}/check-liked/`,

    login: '/users/auth/login/',
    checkEmail: '/users/auth/check-email/',
    register: '/users/auth/register/',
    verifyEmail: '/users/auth/verify-email/',
    sendOTP: '/users/auth/forgot-password/',

    verifyOTP: '/users/auth/verify-otp/',
    resetPassword: '/users/auth/reset-password/',
    changePassword: '/users/auth/change-password/',
    refreshToken: '/users/refresh-token/',
    users: '/users/',
};

const api = axios.create({
    baseURL: HOST,
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
    },
});

export const authAPI = () => {
    const token = localStorage.getItem('token');
    console.log('Token: /', token);

    return axios.create({
        baseURL: HOST,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420',
        },
    });
};

export default api;
