const config = {
    api: {
        baseURL: "http://d2u2lezi9jfyf1.cloudfront.net:3000",
        localURL:"http://d2u2lezi9jfyf1.cloudfront.net:3000",
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