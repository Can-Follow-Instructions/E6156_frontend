const config = {
    api: {
        baseURL: "http://127.0.0.1:3000",
        code: {
            success    : 200,   // 200-success
        },
        articles: {
            baseURL: "/posts",
        },
        discussions:{
            baseURL: "/discussions",
            getByArticlesURL:"/discussions/post"
        }

    }

}
export default config