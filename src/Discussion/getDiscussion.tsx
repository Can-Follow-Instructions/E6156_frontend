import React, {useEffect, useState} from 'react'
import {commGet, shapeTime} from '../common/commFunc'
import config from '../common/config'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Article} from '../Article/getArticle'
import {DiscussionForm} from "./postDiscussion";

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

export type {Discussion};

export function DiscussionInArticleDetail(props: any) {
  let empty: Discussion[] = []
  const [discussionList, setDiscussionList] = useState(empty)

  useEffect(() => {
    const getDiscussionByArticleID = async () => {
      const data = await commGet("getDiscussionByPostID", DISCUSSIONURL.getByArticlesURL + '/' + String(props.articleID))
      console.log(data)
      setDiscussionList(data)
    }

    getDiscussionByArticleID()
  }, [props]);

  function DiscussionLayer(props: any) {
    console.log(` test test ${props.discussion.title}`)
    return (
      <Card sx={{m: 2}} style={{border: "none", boxShadow: "none"}}>
        <CardContent>
          <Typography sx={{fontSize: 15}} variant="h5" component="div">
            {props.discussion.content}
          </Typography>
          <Typography sx={{mb: 1.5, fontSize: 12}} color="text.secondary">
            {"posted by " + shapeTime(props.discussion.createTime)}
          </Typography>
          <DiscussionForm articleID={props.articleID} discussionID={props.discussion.id}/>
        </CardContent>
        {props.discussion.replies.length ?
          props.discussion.replies.map((item: Discussion) => {
            return <DiscussionLayer discussion={item} key={props.discussion.id} articleID={props.articleID}/>
          }) : ""}
      </Card>
    )
  }

  return (
    <Container sx={{py: 8}} maxWidth="md">
      {discussionList.length ?
        discussionList.map((item: Discussion, index) => {
          {
            console.log(index, item)
          }
          return (<DiscussionLayer discussion={item} articleID={props.articleID}/>)
        }) : <Typography sx={{fontSize: 15}} gutterBottom>{'No comment yet...'}</Typography>}
    </Container>
  )
}

