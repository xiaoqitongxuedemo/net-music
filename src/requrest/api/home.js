import service from "..";
//banner数据接口
export function getBanner(){
    return service({
        method:"GET",
        url:"/banner?type=2",
    })
}
//MusicList数据接口
export function getMusicList(){
    return service({
        method:"GET",
        url:"/personalized?limit=30",
    })
}
//搜索
export function getSearchMusic(data){
    return service({
        method:"GET",
        url:`/search?keywords=${data}`
    })
}
//登录
export function getEmailLogin(data){
    return service({
        method:"GET",
        url:`/login/cellphone?email=${data.emali}&password=${data.password}`
    })
}
//获取用户详情
export function getLoginUser(data){
    return service({
        method:"GET",
        url:`/user/detail?uid=${data}`
    })
}
