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
import axios from 'axios'
import {DiscussionForm} from "../Discussion/postDiscussion";

interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

const emptyUser: User = {
    id: 3,
    firstName: "Root",
    lastName: "Admin",
    email: "root@root.com"
}

export type {User}
export {emptyUser}
