import {request} from "@/config/request";

// 热门歌单标签
export function getHotTags(){
    return request({
        url:"/playlist/hot"
    });
}

// 精品歌单第一个
export function getTopHQ(cat){
    return request({
        url:"/top/playlist/highquality",
        params: {
            cat, // 分类
            limit: 1 // 第一个
        }
    });
}

// 所有歌单标签
export function getAllTags(){
    return request({
        url:"/playlist/catlist"
    });
}

// 获取用户精选歌单
export function getPlayList(cat, offset){
    return request({
        url: '/top/playlist',
        params: {
            cat, // 分类
            offset,  // 偏移量，用于分页
                    // offset = （页码 -1）* limit
                    // 若 limit = 50，即第一页有50个，
                    // 那么代表第二页要展示的歌单是从第51个开始获取的
                    // offset的作用就是让点击第二页的时候获取的歌单偏移50个，从第51个开始获取
                    // 点击第三页的时候偏移 (3 - 1) * 50 个
            limit: 50
        }
    });
}