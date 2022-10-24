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

// 获取歌曲歌词
// res.dara.lrc 默认歌词
// res.dara.tlyric 第二歌词 多语言
export function getLyric(id){ // id：歌曲ID
    return request({
        url: '/lyric',
        params: {
            id
        }
    });
}

// 获取歌曲url
// res.data.data.url: mp3Url,
export function getSongUrl(id){
    return request({
        url: '/song/url',
        params: {
            id
        }
    });
}

// 获取评论
/*返回值：
        res.data.comments[0].user.nickname 评论发布者昵称
        res.data.comments[0].user.avatarUrl 评论发布者头像
        res.data.comments[0].commentId 评论ID
        res.data.comments[0].content 评论内容
        res.data.comments[0].timeStr 评论时间
        res.data.comments[0].likedCount 点赞数量
        res.data.comments[0].liked 是否点赞
        res.data.comments[0].liked 是否点赞
        res.data.totalCount 评论总数
* */
export function getComment(id, type, pageNo, pageSize, sortType, cursor){
    return request({
        url: '/comment/new',
        params: {
            id,       // 资源 id, 如歌曲 id,mv id
            type,     // type=0: 歌曲, type=1: mv, type=2: 歌单, type=3: 专辑
                      // type=4: 电台节目, type=5: 视频, type=6: 动态, type=7: 电台
            pageNo,   // 分页参数,第 N 页,默认为 1
            pageSize, // 分页参数,每页多少条数据,默认 20
            // 拿热评举例，热评10条是1-10，
            //  当pageNo=1, pageSize=5时，取1-5
            //  当pageNo=2, pageSize=5时，取6-10
            // 热门评论建议固定取10个就行了，也就是pageNo=1,pageSize=10，

            sortType, // 排序方式, 1:按推荐排序, 2:按热度排序, 3:按时间排序
            cursor    // 当sortType为 3 时且页数不是第一页时需传入,值为上一条数据的 time
        }
    });
}

// 给评论点赞
export function likeComment(id, cid, t, type){
    return request({
        url: '/comment/new',
        params: {
            id,       // 资源 id, 如歌曲 id,mv id
            cid,       // 评论 id
            type,     // type=0: 歌曲, type=1: mv, type=2: 歌单, type=3: 专辑
                      // type=4: 电台节目, type=5: 视频, type=6: 动态, type=7: 电台
            t,        // 是否点赞 , 1 为点赞 ,0 为取消点赞
        }
    });
}







