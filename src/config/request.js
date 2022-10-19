import axios from 'axios'
export function request(config){
    const instance = axios.create({
        baseURL: 'http://localhost:3000/',
        timeout: 20000, // 指定请求超时
        withCredentials: true
    });

    // 请求超时
    instance.interceptors.request.use(
        config => {
            return config;
        },
        err => {
            return Promise.reject(err);
        }
    );

    // 响应拦截
    instance.interceptors.response.use(
        res => {
            return res;
        },
        err =>{
            return Promise.reject(err);
        }
    );

    return instance(config);
}