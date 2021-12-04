import React, {useState, useEffect} from 'react'
import {brieviateString, commGet, shapeTime} from '../common/commFunc'
import config from '../common/config'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Article} from '../Article/getArticle'
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DISCUSSIONURL = config.api.discussions

interface Discussion {
    title: string,
    content: string,
    createTime: string,
    id: number,
    commentId: number,
    post: Article,
    replies: Discussion[]
}

export {DiscussionInArticleDetail}

function DiscussionInArticleDetail(props:any) {
    let empty: Discussion[] = []
    const [discussionList, setDiscussionList] = useState(empty)

    function getDiscussionByArticleID() {
        commGet("getDiscussionByPostID", DISCUSSIONURL.getByArticlesURL + '/' + String(props.articleID)).then(data => {
            console.log(data)
            // @ts-ignore
            setDiscussionList(data)
        })
    }

    useEffect(() => {
        getDiscussionByArticleID()
    }, []);

    function DiscussionLayer(props:any){
        console.log(` test test ${props.discussion.title}`)
        return (
            <Card sx={{m: 2}} style={{ border: "none", boxShadow: "none"}}>
                <CardContent>
                    <Typography sx={{fontSize: 30}} gutterBottom>
                        {props.discussion.title}
                    </Typography>
                    <Typography sx={{fontSize: 15}} variant="h5" component="div">
                        {props.discussion.content}
                    </Typography>
                    <Typography sx={{mb: 1.5, fontSize: 12}} color="text.secondary">
                        {"posted by " + shapeTime(props.discussion.createTime)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={() => {
                    }}>
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                    </IconButton>
                </CardActions>
                {props.discussion.replies.length ?
                    props.discussion.replies.map((item: Discussion, index: any) => {
                        {console.log(index, item)}
                        return (<DiscussionLayer discussion = {item}/>)
                    }) : ""}
            </Card>
        )
    }
    return (
        <Container sx={{py: 8}} maxWidth="md">
            {discussionList.length ?
                discussionList.map((item: Discussion, index) => {
                    {console.log(index, item)}
                    return (<DiscussionLayer discussion = {item}/>)
                }) : <Typography sx={{fontSize: 15}} gutterBottom>{'No comment yet...'}</Typography>}
        </Container>
    )
}

