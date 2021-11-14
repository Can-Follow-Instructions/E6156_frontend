import React  from 'react'
// @ts-ignore
import ReactDOM from 'react-dom';
import {GetHomePost} from "../Article/getArticle";
import {ArticleForm} from "../Article/postArticle"

export default function homePage(){
    return(
        <div>
            <ArticleForm/>
            <GetHomePost/>
        </div>
    );
}