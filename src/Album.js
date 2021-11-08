import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CreateUserPopUp from "./User/createUser";


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1,2,3,4];

const theme = createTheme();

export class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            createUserPopUpSeen: false
        };
    }

    toggleCreateUserPopUpSeen = () => {
        this.setState({
            createUserPopUpSeen: !this.state.createUserPopUpSeen
        });
    };

    callAPI() {
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({content: response.map(info => {
                        if (info.address)
                            return new Map([['email',info.email], ['firstName',info.firstName], ['lastName',info.lastName],['address',info.address.street]]);
                        return new Map([['email',info.email], ['firstName',info.firstName], ['lastName',info.lastName]])})});
            });
        console.log(this.state);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon sx={{mr: 2}}/>
                        <Typography variant="h6" color="inherit" noWrap>
                            Album layout
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Topic Piazza
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                Publish something interesting here.
                            </Typography>
                            <Stack
                                sx={{pt: 4}}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button variant="contained">Main call to action</Button>
                                <Button variant="outlined">Secondary action</Button>
                            </Stack>
                        </Container>
                    </Box>
                    <Container sx={{py: 8}} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} md = {6}>
                                    <Card
                                        sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                // 16:9
                                                pt: '36.25%',
                                            }}
                                            image="https://source.unsplash.com/random"
                                            alt="random"
                                        />
                                        <CardContent sx={{flexGrow: 1}}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                User Information
                                            </Typography>
                                            <Typography>
                                                    {
                                                        this.state.content.map((value,key)=>{
                                                            return<li  key={key}>{'User Name is ' + value.get('firstName') + ' ' + value.get('lastName') + ' , Email is ' + value.get('email') + ' , address is '+value.get('address')}</li>
                                                        })
                                                    }
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <div>
                                                <div className="btn" onClick={this.toggleCreateUserPopUpSeen}>
                                                    <button>Create New User</button>
                                                    {/*<Button size="small">Create New User</Button>*/}
                                                    {/*<Button size="small">Edit</Button>*/}
                                                </div>
                                                {this.state.createUserPopUpSeen ? <CreateUserPopUp toggle={this.toggleCreateUserPopUpSeen} /> : null}
                                            </div>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
                {/* Footer */}
                <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        Something here to give the footer a purpose!
                    </Typography>
                    <Copyright/>
                </Box>
                {/* End footer */}
            </ThemeProvider>
        );
    }


}
