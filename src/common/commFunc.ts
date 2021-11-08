import axios from 'axios'
import config from './config'

export {commGet}

function commGet(note = 'get', api = '', params = {}) {
    return new Promise((resolve, reject) => {
        let url = config.api.baseURL + api
        console.log(`commmonGet request ${note} address:${url}`);
        axios.get(url,params).then(res => {
            // return code check

            // if (res.data.code !== config.api.code.success) {
            //     console.log(`failed code: ${res.data.code}`)
            //     console.log(`commmonGet request ${note} failed error:`, res.data.message)
            //     reject(res.data.message)
            //     return;
            // }

            // if (res.data.code === config.api.code.notLoggedIn) {
            //     message.error('未登录')
            //     for (let i in wls)
            //         if (/^XB_/.test(i)) wls.removeItem(i)
            //     window.location.hash = '#/'
            //     window.location.reload()
            //     return;
            // }
            console.log(`commmonGet request ${note} successed, res:`, res.data)
            resolve(res.data)
        }).catch(err => {
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
