<template>
    <div>
        <ItemMusicTop :playlist="state.playlist"/>
        <ItemMusicList :itemList="state.itemList" :subscribedCount = "state.playlist.subscribedCount"/>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import { onMounted,reactive } from 'vue';
import { getMusicItemList,getItemList } from '@/requrest/api/item'
import ItemMusicTop from '@/components/item/ItemMusicTop.vue'
import ItemMusicList from '@/components/item/ItemMusicList.vue';
export default {
    setup(){
        const state = reactive({
            playlist:{},
            itemList:[] // 歌单的歌曲
        })
        onMounted(async ()=>{
            let id = useRoute().query.id
            console.log(id);
            // 获取歌单详情页
            let res = await getMusicItemList(id);
            console.log(res);
            state.playlist = res.data.playlist;
            // 获取歌单的歌曲
            let result = await getItemList(id);
            console.log(result);
            state.itemList = result.data.songs
            //save session
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
        });
        return { state }
    },
    components:{
    ItemMusicTop,
    ItemMusicList
}
}
</script>