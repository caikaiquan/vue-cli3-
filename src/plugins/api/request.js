import axios from './axios';
// 根据不同环境配置不同的baseURL
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
// 只封装了两种常用的请求方式  get/post
const request = (method, url, data) => {
    method = method.toLocaleLowerCase();
    if (method === 'get') {
        return axios.get(url, { params: data })
    } else if (method === 'post') {
        return axios.post(url, data)
    }
}

export default request;