import * as React from 'react';
import ReactDOM from 'react-dom';
import {GetHomeArticle} from "./Article/getArticle";
import {ArticleForm} from "./Article/postArticle"

ReactDOM.render(
    // <ThemeProvider theme={theme}>
    //   {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    //   <CssBaseline />
    //   <App />
    // </ThemeProvider>,
    // <Album />,
    <div>
        <ArticleForm/>
        <GetHomeArticle/>
    </div>,
    document.querySelector('#root'),
);