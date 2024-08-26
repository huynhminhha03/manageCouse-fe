const routes = {
    home: '/',
    blog: '/blog',
    live: '/live',
    profile:(slug) => `/${slug}`,
    upload: '/upload',
    search: '/search',

    courseDetails: (slug) => `course/${slug}`,
    myCourseDetails: (slug) => `my-course/${slug}`,

    registeredCourse: '/registered-course',
    myCourse: '/my-course',
    createCourse: '/new-course/',
    roadmap: '/roadmap',
    bookmark: '/me/bookmark',
    myBlog: '/me/posts',
    createBlog: '/new-post',
    blogDetails:(id) => `/blog/${id}`,
    editBlog:(id) => `/posts/${id}/edit`,
    
    loginEmail: '/login/email',
    registerEmail: '/register/email',
    forgotPassword: '/forgot-password',
}

export default routes