import {request} from "@/config/request";

// 轮播图
export function getRPBanner(){
    return request({
        url: '/banner'
    });
}

// 推荐歌单
export function getRPSongList(limit){
    return request({
        url: '/personalized',
        params: {
            limit
        }
    });
}

//独家放送
export function getExclusive(){
    return request({
        url: '/personalized/privatecontent'
    });
}

// 最新音乐
export function getLatest(limit){
    return request({
        url: '/personalized/newsong',
        params: {
            limit
        }
    });
}

// 推荐MV
export function getPrMv(){
    return request({
        url: '/personalized/mv'
    });
}