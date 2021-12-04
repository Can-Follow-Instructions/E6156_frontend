import axios from 'axios'
import config from './config'

export {commGet, commPost, brieviateString, shapeTime}

function loginRedirect(errorCode:number) {
    if (errorCode === 401) {
        window.location.assign(config.api.localURL + config.api.login.baseURL)
    }
}

function commGet(note = 'get', api = '') {
    return new Promise((resolve, reject) => {
        let url = config.api.localURL + api
        console.log(`commmonGet request ${note} address:${url}`);
        axios.get(url, { withCredentials: true }).then(res => {
            console.log(`commmonGet response status ${res.status}`);
            console.log(`commmonGet request ${note} successed, res:`, res.data)
            console.log(`commmonGet request cookie`, document.cookie)
            resolve(res.data)
        }).catch(err => {
            loginRedirect(err.response.status)
            console.log(`commmonGet request ${note} failed error:`, err)
            reject(err)
        })
        // axios({
        //     baseURL:url,
        //     // url: url,
        //     method: 'get',
        //     params: params,
        // }).then(res => {
        //     if (res.data.code !== config.api.code.success) {
        //         console.log(`commmonGet request ${note} failed error:`, res.data.message)
        //         reject(res.data.message)
        //         return;
        //     }
        //     // if (res.data.code === config.api.code.notLoggedIn) {
        //     //     message.error('未登录')
        //     //     for (let i in wls)
        //     //         if (/^XB_/.test(i)) wls.removeItem(i)
        //     //     window.location.hash = '#/'
        //     //     window.location.reload()
        //     //     return;
        //     // }
        //     console.log(`commmonGet request ${note} successed, res:`, res.data.data)
        //     resolve(res.data.data)
        // }).catch(err => {
        //     console.log(`commmonGet request ${note} failed error:`, err)
        //     reject(err)
        // })
    })
}

function commPost(note = '', api = '', data: any) {
    return new Promise((resolve, reject) => {
        let url = config.api.localURL + api
        console.log(`commPost${note}request ${note} address:${url}, data:${data}`);
        axios.post(url, data, { withCredentials: true }).then(res => {
            console.log(`commPost request ${note} successed, res:`, res.data)
            resolve(res.data)
        }).catch(err => {
            loginRedirect(err.response.status)
            console.log(`commPost request ${note} failed error:`, err)
            reject(err)
        })
    })
}

function brieviateString(str: string, max: number) {

    if (str.length >= max) {
        return str.substring(0, max) + "..."
    } else {
        return str
    }
}

function shapeTime(time: string) {
    // 2021-11-08T02:42:09.233Z
    return time.substring(0, 10) + " " + time.substring(11, 19)
}