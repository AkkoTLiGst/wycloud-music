import {request} from "@/config/request";

// 用户账号信息 用来获取uid
export function userID(){
    return request({
        url:'/user/account',
        params: {
            timestamp: (new Date()).valueOf() // 毫秒时间戳
        }
    });
}

// 获取登录状态
export function getLoginStatus(cookie = ''){
    return request({
        url: '/login/status',
        data: {
            cookie
        }
    })
}

// 用户详情 根据uid查找信息
// followeds: 粉丝数量，  follows: 关注数量， eventCount: 动态数量
export function userDetail(uid){
    return request({
        url:'/user/detail',
        params:{
            uid,
            timestamp: (new Date()).valueOf() // 毫秒时间戳
        }
    });
}

// 获取用户...
