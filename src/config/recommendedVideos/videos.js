import {request} from "@/config/request";

// 获取全部视频标签
export function getAllVideosTags() {
    return request({
        url: "/video/group/list", // obj.data.name
    });
}

//获取热门视频标签
export function getHotVideoTags() {
    return request({
        url: "/video/category/list",
    });
}

// 获取分类视频列表
export function getVideoList(id, offset) {
    return request({
        url: "/video/group",
        params: {
            id,
            offset,
        },
    });
}