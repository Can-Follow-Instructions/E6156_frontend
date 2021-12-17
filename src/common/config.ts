const config = {
    api: {
        baseURL: "http://127.0.0.1:3000",
        AWSURL:"http://s1.1oop.ml/",
        localURL:"http://127.0.0.1:3000",
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