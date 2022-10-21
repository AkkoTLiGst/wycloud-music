import {request} from "@/config/request";

// 获取登录用户的用户歌单,uid: 用户uid
export function playList(uid){
    // data.playlist: 所有歌单
    //      data.playlist[0]: 我喜欢的音乐
    //      data.playlist[1]: 我的年度歌单
    // data.playlist[0].coverImgUrl: 歌单头像
    //                 .createTime: 创建时间，毫秒时间戳
    //                 .playCount: 播放次数
    //                 .id: 歌单ID（用来获取歌单中的所有歌曲信息）
    //                 .trackCount: 歌曲数量
    //                 .name: 歌单名称
    return request({
        url: '/user/playlist',
        params: {
            uid
        }
    });
}

// 获取歌单所有歌曲, id: 歌单id
export function getAllSong(id, limit, offset){
    /*
        data.songs: 获取到的所有歌曲（array） data.songs[0]第一首歌(object)
            data.songs[0].name: 歌曲名
            data.songs[0].ar[0].name: 作者名
            data.songs[0].alia[0]: 歌曲副标题，没有副标题alia就是空数组
            data.songs[0].al.name: 专辑名
            data.songs[0].al.picUrl: 专辑图片
            data.songs[0].dt: 时长（毫秒）

     */
    return request({
        url: '/playlist/track/all',
        params: {
            id, // 歌单id
            limit, // 每次获取的数量
            offset // 偏移量 limit=10, offset=1时获取第2-第11首歌
                         // limit=10, offset=10时获取第11-第20首歌
                         // limit=n, offset=m, 获取第(m+1)-第(m+n)首歌
        }
    });
}