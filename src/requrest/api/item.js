import service from "..";
//ItemMusic数据接口
export function getMusicItemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`,
    })
}
// itemlist数据接口
export function getItemList(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${ data }&limit=${data.limit}&offset=${data.offset}`,
    })
}//获取歌曲的歌词
export function getMusicLyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}