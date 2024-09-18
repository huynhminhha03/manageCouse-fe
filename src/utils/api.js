import axios from 'axios';

const HOST = process.env.REACT_APP_API_URL;

console.log(HOST);
export const userApis = {
    getCurrentUser: '/api/users/current-user/',
    updateCurrentUser: '/api/users/current-user/',
    getReturnUrl: '/api/order/vnpay_return/',
    createPayment: (id) => `/api/payment/courses/${id}/`,
    getUserBySlug: (slug) => `/api/users/${slug}/`,

    getAllCourses: '/api/users/courses/',
    getCoursesBySlug: '/api/users/courses/results/',
    getCourseDetails: (course_id) => `/api/users/courses/${course_id}/`,
    getQuickViewLessons: (course_id) => `/api/users/courses/${course_id}/lessons/quick-view/`,
    getLesson: (course_id, lesson_id) => `/api/users/courses/${course_id}/lessons/${lesson_id}/`,
    getAllLesson: (course_id) => `/api/users/courses/${course_id}/lessons/`,

    getMyCourses: '/api/users/my-courses/',
    getRegisterCourses: '/api/users/registered-courses/',
    showRegisterCourses: (slug) => `/api/users/${slug}/registered-courses/show/`,
    getMyCourseDetails: (course_id) => `/api/users/my-courses/${course_id}/`,
    createCourse: '/api/users/my-courses/',
    updateCourse: (course_id) => `/api/users/my-courses/${course_id}/`,
    deleteCourse: (course_id) => `/api/users/my-courses/${course_id}/`,

    getLessonsByCourseId: (course_id) => `/api/users/courses/${course_id}/lessons/`,
    getLessonById: (course_id, lesson_id) => `/api/users/courses/${course_id}/lessons/${lesson_id}/`,
    createLesson: (course_id) => `/api/users/my-courses/${course_id}/lessons/`,
    updateLesson: (course_id, lesson_id) => `/api/users/courses/${course_id}/lessons/${lesson_id}/`,
    deleteLesson: (course_id, lesson_id) => `/api/users/courses/${course_id}/lessons/${lesson_id}/`,

    registerCourse: (course_id) => `/api/users/courses/${course_id}/register/`,
    checkRegisterCourse: (course_id) => `/api/users/courses/${course_id}/register/checked/`,

    createBlog: '/api/users/my-blogs/',
    getMyBlogs: '/api/users/my-blogs/',
    getMyBlogById: (id) => `/api/users/my-blogs/${id}/`,
    updateMyBlog: (id) => `/api/users/my-blogs/${id}/`,

    getAllBlogs: '/api/users/blogs/',
    getBlogById: (id) => `/api/users/blogs/${id}/`,
    getOtherBlogs: (blog_id) => `/api/users/blogs/${blog_id}/others/`,

    getNumberBlogLikes: (id) => `/api/users/blogs/${id}/likes/`,
    getNumberBlogComments: (id) => `/api/users/blogs/${id}/comments/count/`,
    likeBlog: (id) => `/api/users/blogs/${id}/likes/`,
    checkLikedBlog: (id) => `/api/users/blogs/${id}/likes/checked/`,

    getAllBookmarkBlogs: '/api/users/my-bookmarks/',
    bookmarkBlog: (id) => `/api/users/blogs/${id}/bookmarks/`,
    deleteBookmarkBlogs: (id) => `/api/users/my-bookmarks/${id}/`,
    checkBookmark: (id) => `/api/users/blogs/${id}/bookmarks/checked/`,

    getParentComments: (type, id) => `/api/users/${type}/${id}/comments/`,
    createParentComment: (type, id) => `/api/users/${type}/${id}/comments/`,
    createReplyComment: (type, blog_id) => `/api/users/${type}/${blog_id}/comments/`,
    getChildrenComments: (type, blog_id, parent_comment_id) => `/api/users/${type}/${blog_id}/comments/${parent_comment_id}/`,
    getNumberRepliesComment: (type, blog_id, parent_comment_id) =>
        `/api/users/${type}/${blog_id}/comments/${parent_comment_id}/count/`,

    getLikeComments: (id) => `/api/users/comments/${id}/likes/count/`, //Tách checkLiked ra vì checkLiked cần login
    likeComment: (id) => `/api/users/comments/${id}/likes/`,
    getCommentById: (id) => `/api/users/comments/${id}/`,
    updateComment: (id) => `/api/users/comments/${id}/`,
    deleteComment: (id) => `/api/users/comments/${id}/`,
    checkLikedComment: (id) => `/api/users/comments/${id}/likes/checked/`,

    chat: '/chatting',
    login: '/api/users/auth/login/',
    checkEmail: '/api/users/auth/check-email/',
    register: '/api/users/auth/register/',
    verifyEmail: '/api/users/auth/verify-email/',
    sendOTP: '/api/users/auth/forgot-password/',

    verifyOTP: '/api/users/auth/verify-otp/',
    resetPassword: '/api/users/auth/reset-password/',
    changePassword: '/api/users/auth/change-password/',
    refreshToken: '/api/users/refresh-token/',
    users: '/api/users/',
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
