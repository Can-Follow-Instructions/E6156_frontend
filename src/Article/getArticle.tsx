import React, {useEffect, useState} from 'react'
import {abbreviateString, commGet, shapeTime} from '../common/commFunc'
import config from '../common/config'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import {DiscussionInArticleDetail} from '../Discussion/getDiscussion'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {DiscussionForm} from "../Discussion/postDiscussion";

const ARTICLEURL = config.api.articles
const MAXCONTENTLENGTH = 50
export {GetHomeArticle};
export type {Article};

interface Article {
  title: string,
  content: string,
  createTime: string,
  id: number
}

function GetHomeArticle() {
  let page = 1
  let size = 100
  let emptyArticleList: Article[] = []
  const [postList, setPostList] = useState(emptyArticleList)
  let empty: boolean[] = []
  const [showMoreDict, setShowMoreDict] = useState(empty)



  const resetShowMoreDict = () => {
    const l = postList.length
    const initDict = Array(l).fill(false);
    setShowMoreDict(initDict)
  }

  // @ts-ignore
  useEffect(() => {
    const getArticle = async () => {
      const data = await commGet("getPost", ARTICLEURL.baseURL);
      setPostList(data);
      resetShowMoreDict()
    };
    getArticle();
  }, [page, size]);

  return (
    <Container sx={{py: 8}} maxWidth="md">
      {postList ?
        postList.map((item: Article, index) => {
          return (
            <Card sx={{minWidth: 275, m: 2}}>
              <CardContent>
                <Typography sx={{fontSize: 30}} gutterBottom>
                  {item.title}
                </Typography>
                <Typography sx={{mb: 1.5, fontSize: 12}} color="text.secondary">
                  {"posted by " + shapeTime(item.createTime)}
                </Typography>
                <Typography sx={{fontSize: 15}} variant="h5" component="div">
                  {
                    showMoreDict[index] ? item.content :
                      abbreviateString(item.content, MAXCONTENTLENGTH)}
                </Typography>
                <Typography sx={{mb: 1.5, fontSize: 12}} color="text.secondary">
                  {index}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => {
                  let newShowMoreDict = [...showMoreDict]
                  newShowMoreDict[index] = !newShowMoreDict[index]
                  setShowMoreDict(newShowMoreDict)
                  console.log(showMoreDict)
                }}>
                  {showMoreDict[index] ? <ArrowRightIcon/> : <ArrowDropDownIcon/>}
                </IconButton>
                <DiscussionForm articleID={item.id} discussionID={''}/>
              </CardActions>
              <CardContent>
                {showMoreDict[index] && <DiscussionInArticleDetail articleID={item.id}/>}
              </CardContent>
            </Card>
          )
        }) : ''}
    </Container>
  )
}

