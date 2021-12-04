import React  from 'react'
// @ts-ignore
import ReactDOM from 'react-dom';
import {GetHomeArticle} from "../Article/getArticle";
import {ArticleForm} from "../Article/postArticle"


export default function homePage(props:any){
    return(
        <div>
            <ArticleForm/>
            <GetHomeArticle/>
        </div>
    );
}