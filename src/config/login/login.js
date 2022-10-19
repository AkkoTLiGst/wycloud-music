import {request} from "@/config/request";

// 二维码Key
// res.data.data.unikey: key
export function getQrKey(){
    return request({
        url: '/login/qr/key',
        params: {
            timestamp: (new Date()).valueOf() // 毫秒时间戳
        }
    });
}

// 二维码生成
// res.data.data.qrimg: base64
export function createQrCode(key){
    return request({
        url: '/login/qr/create',
        params: {
            key, // 生成的Key
            qrimg: true, // 是否返回base64
            timestamp: (new Date()).valueOf() // 毫秒时间戳
        }
    });
}

// 二维码监测扫码状态
// res.data.code:
// 800: 过期， 801: 等待扫码， 802: 待确认， 803: 登录成功
export function checkQrCode(key){
    return request({
        url: '/login/qr/check',
        params: {
            key,
            timestamp: (new Date()).valueOf() // 毫秒时间戳
        }
    });
}

// 游客登录
export function visitorLogin(){
    return request({
        url: '/register/anonimous',
        params: {
            timestamp: (new Date()).valueOf() // 毫秒时间戳
        }
    });
}

// 退出登录
export function loginOut(){
    return request({
        url: '/logout'
    });
}