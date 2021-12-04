import React, {useState, useEffect} from 'react'
import {commGet, brieviateString, shapeTime} from '../common/commFunc'
import config from '../common/config'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import {DiscussionInArticleDetail} from '../Discussion/getDiscussion'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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

    function getArticle() {
        return commGet("getPost", ARTICLEURL.baseURL, {}).then(data => {
            console.log(data)
            // @ts-ignore
            setPostList(data)
        })
    }

    function resetShowMoreDict() {
        let l = postList.length
        let initDict = Array(l).fill(false);
        setShowMoreDict(initDict)
    }

    useEffect(() => {
        getArticle().then(() => {
            resetShowMoreDict()
        })
    }, [page, size]);
    // @ts-ignore
    const bull = (
        <Box
            component="span"
            sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
        >
        </Box>
    );
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
                                            brieviateString(item.content, MAXCONTENTLENGTH)}
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
                                    {showMoreDict[index]? <ArrowRightIcon/>:<ArrowDropDownIcon/>}
                                </IconButton>
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

