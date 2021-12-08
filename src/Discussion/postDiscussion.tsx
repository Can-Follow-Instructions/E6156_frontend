import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {commPost} from "../common/commFunc"
import config from "../common/config"
import IconButton from "@mui/material/IconButton";
import ReplySharpIcon from '@mui/icons-material/ReplySharp';

interface postDiscussion {
  parentId: string, // father comment id
  content: string,
  createTime: string,
  postId: number
}

export function DiscussionForm(props: any) {
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
    const date = new Date();
    commPost("DiscussionForm handleSubmit", config.api.discussions.baseURL, {...formValues, createTime: date.toLocaleString()});
  }


  const handleInputChange = (e: any) => {
    console.log(`DiscussionForm handleInputChange ${e}`)
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
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

