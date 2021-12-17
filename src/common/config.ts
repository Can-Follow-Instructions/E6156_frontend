const config = {
    api: {
        baseURL: "/api/",
        AWSURL:"/api/",
        // localURL:"http://t.1oop.ml:3000",
        localURL: "/api/",
        code: {
            success    : 200,   // 200-success
            unauthorized: 401,   // 401-unauthorized
        },
        articles: {
            baseURL: "/posts",
        },
        discussions:{
            baseURL: "/discussions",
            getByArticlesURL:"/discussions/post"
        },
        users:{
            baseURL: "/users",
        },
        login:{
            baseURL:"/google/redirect"
        }
        }

    }
export default config