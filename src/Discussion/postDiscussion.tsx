import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import {User, emptyUser} from "../User/getUser"
import {commPost} from "../common/commFunc"
import config from "../common/config"
import {Article} from "../Article/getArticle"
import IconButton from "@mui/material/IconButton";
import ReplySharpIcon from '@mui/icons-material/ReplySharp';

interface postDiscussion {
    parentId: number, // father comment id
    content: string,
    createTime: string,
    postId: number
}

export {DiscussionForm}

function DiscussionForm(props:any) {

    let emptyPostDiscussion: postDiscussion = {
        parentId: props.discussionID, // father comment id
        content: "",
        createTime: "",
        postId: props.articleID
    }
    const [formValues, setFormValues] = useState(emptyPostDiscussion);
    console.log("DiscussionForm article id", formValues.postId)
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        console.log(`DiscussionForm handleSubmit parentId:${formValues.parentId} content: ${formValues.content} createTime: ${formValues.createTime} postId: ${formValues.postId}`);
        commPost("DiscussionForm handleSubmit", config.api.discussions.baseURL, formValues);
    }


    const handleInputChange = (e: any) => {
        console.log(`DiscussionForm handleInputChange ${e}`)
        const {name, value} = e.target;
        let date = new Date()
        setFormValues({
            ...formValues,
            [name]: value,
            createTime: date.toLocaleString()
        });
    }

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <ReplySharpIcon/>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Reply to the discussion</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container alignItems="center" direction="column" spacing={2}>
                            <Grid item>
                                <TextField
                                    id="content-input"
                                    name="content"
                                    label="Content"
                                    type="text"
                                    rows={4}
                                    value={formValues.content}
                                    onChange={handleInputChange}
                                    multiline
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )

}

