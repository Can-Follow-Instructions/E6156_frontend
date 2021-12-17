import axios, {AxiosError} from 'axios'
import config from './config'

export {commGet, commPost, abbreviateString, shapeTime}

function loginRedirect() {
  window.location.assign(config.api.localURL + config.api.login.baseURL)
}

async function commGet(note = 'get', api = '') {
  let url = config.api.localURL + api
  console.log(`commmonGet request ${note} address:${url}`);
  try {
    const resp = await axios.get(url, {withCredentials: true});
    return resp.data;
  } catch (err) {
    console.log(`commmonGet request ${note} err:${err}`);
    if ((err as AxiosError).response?.status === 401) {
      loginRedirect();
    }
  }
}

async function commPost(note = '', api = '', data: any) {
  let url = config.api.localURL + api
  console.log(`commPost${note}request ${note} address:${url}, data:${data}`);
  try {
    const resp = await axios.post(url, data, {withCredentials: true});
    return resp.data;
  } catch (err) {
    console.log(`commmonGet request ${note} err:${err}`);
    if ((err as AxiosError).response?.status === 401) {
      loginRedirect();
    }
  }
}

function abbreviateString(str: string, max: number): string {
  if (str.length >= max) {
    return str.substring(0, max) + "...";
  } else {
    return str;
  }
}

function shapeTime(time: string): string {
  // 2021-11-08T02:42:09.233Z
  return time.substring(0, 10) + " " + time.substring(11, 19)
}