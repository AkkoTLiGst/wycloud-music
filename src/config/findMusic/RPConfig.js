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
    })
}