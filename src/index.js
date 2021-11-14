import * as React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import homePage from "./view/homePage"
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import App from './App';
import theme from './theme';
import {Album} from "./Album";
import {GetHomePost} from "./Article/getArticle";
import {ArticleForm} from "./Article/postArticle"

ReactDOM.render(
    // <ThemeProvider theme={theme}>
    //   {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    //   <CssBaseline />
    //   <App />
    // </ThemeProvider>,
    // <Album />,
    <div>
        <ArticleForm/>
        <GetHomePost/>
    </div>,
    document.querySelector('#root'),
);
// var hist = createBrowserHistory();
//
// ReactDOM.render(
//         <Routes>
//             {/*<Route path="/landing-page" component={LandingPage} />*/}
//             {/*<Route path="/profile-page" component={ProfilePage} />*/}
//             {/*<Route path="/login-page" component={LoginPage} />*/}
//             <Route path="/" element={<homePage />} />
//         </Routes>,
//     document.getElementById("root")
// );