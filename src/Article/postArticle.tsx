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

const defaultArticle = {
    title: "",
    content: "",
    createTime: "",
    user: emptyUser
};

function ArticleForm() {
    const [formValues, setFormValues] = useState(defaultArticle);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // @ts-ignore
    const handleSubmit = () => {
        console.log(`ArticleForm handleSubmit ${formValues.title}${formValues.content}${formValues.createTime}${formValues.user}`);
        commPost("ArticleForm handleSubmit", config.api.articles.baseURL, formValues);
    }


    // @ts-ignore
    const handleInputChange = (e) => {
        console.log(`articleForm handleInputChange ${e}`)
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
            <Grid container textAlign="center">
                <Button variant="outlined" onClick={handleClickOpen}>
                    Create new post
                </Button>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create new post</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container alignItems="center" direction="column" spacing={2}>
                            <Grid item>
                                <TextField
                                    id="title-input"
                                    name="title"
                                    label="Title"
                                    type="text"
                                    value={formValues.title}
                                    onChange={handleInputChange}
                                />
                            </Grid>
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

export {ArticleForm}