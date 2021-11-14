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


const ARTICLEURL = config.api.posts
const MAXCONTENTLENGTH = 50
export {GetHomePost}

interface Article {
    title: string,
    content: string,
    createTime: string,
    id: number
}

function GetHomePost() {
    let page = 1
    let size = 100

    const [postList, setPostList] = useState([])

    function getArticle() {
        commGet("getPost", ARTICLEURL.baseURL, {}).then(data => {
            console.log(data)
            // @ts-ignore
            setPostList(data)
        })
    }

    useEffect(() => {
        getArticle()
    }, [page, size]);
    // @ts-ignore
    const bull = (
        <Box
            component="span"
            sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
        >
            •
        </Box>
    );
    // @ts-ignore
    return (
        <Container sx={{py: 8}} maxWidth="md">
        {postList ?
                postList.map((item: Article, index) => {
                    // @ts-ignore
                    // @ts-ignore
                    // @ts-ignore
                    return (
                            <Card sx={{minWidth: 275, m:2}}>
                                <CardContent>
                                    <Typography sx={{fontSize: 30}}  gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{fontSize: 15}} variant="h5" component="div">
                                        {brieviateString(item.content, MAXCONTENTLENGTH)}
                                    </Typography>
                                    <Typography sx={{mb: 1.5, fontSize:12}} color="text.secondary">
                                        {"posted by " + shapeTime(item.createTime)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                )
                }) : ''}
        </Container>
    )
}

