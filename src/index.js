import * as React from 'react';
import ReactDOM from 'react-dom';
import {GetHomeArticle} from "./Article/getArticle";
import {ArticleForm} from "./Article/postArticle"
import User from "./User";

ReactDOM.render(
    <div>
        <ArticleForm/>
        <User/>
        <GetHomeArticle/>
    </div>,
    document.querySelector('#root'),
);