<template>
    <div class="searchTop">
        <svg class="icon liebiao" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-prev"></use>
        </svg>
        <input type="text" placeholder="买辣椒也用券" v-model="searchKey" @keydown.enter="enterKey()">
    </div>
    <div class="searchHistory">
        <span class="searchSpan">历史</span>
        <span v-for="item in KeyWorldList" :key="item" class="spanKey" @click="searchHistory(item)">
            {{ item }}
        </span>
        <svg class="icon liebiao" aria-hidden="true" @click="delHistory">
            <use xlink:href="#icon-shanchu1"></use>
        </svg>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, i) in searchList" :key="i">
        <div class="itemLeft" @click="updateIndex(item)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.artists" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-liebiao2"></use>
          </svg>
        </div>
      </div>
    </div>
</template>
<script>
import { getSearchMusic } from '@/requrest/api/home';
export default {
    data() {
        return {
            KeyWorldList: [],
            searchKey: "",
            searchList: []
        };
    },
    mounted() {
        this.KeyWorldList = JSON.parse(sessionStorage.getItem('KeyWorldList')) ? JSON.parse(sessionStorage.getItem('KeyWorldList')) : []
    },
    methods: {
        enterKey: async function () {
            if (this.searchKey !== "") {
                this.KeyWorldList.unshift(this.searchKey);
                // 去重
                this.KeyWorldList = [...new Set(this.KeyWorldList)];
                // 固定长度
                if (this.KeyWorldList.length > 10) {
                    this.KeyWorldList.splice(this.KeyWorldList.length - 1, 1)
                }
                sessionStorage.setItem("KeyWorldList", JSON.stringify(this.KeyWorldList));
                let res = await getSearchMusic(this.searchKey)
                //console.log(res);
                this.searchList = res.data.result.songs
                this.searchKey = "";
            }
        },
        delHistory: function () {
            sessionStorage.removeItem("KeyWorldList")
            this.KeyWorldList = []
        },
        searchHistory: async function (item) {
            let res = await getSearchMusic(item);
            console.log(res);
            this.searchList = res.data.result.songs
        },
        updateIndex:function(item){
            item.al=item.album
            item.al.picUrl=item.album.artist.img1v1Url
            this.$store.commit("pushPlayList",item)
            this.$store.commit("updatePlayListIndex",this.$store.state.playList.length-1)
        }
    },
};
</script>
<style lang="less" scoped>
.searchTop {
    width: 100%;
    height: 1rem;
    padding: 0.2rem;
    display: flex;
    align-items: center;

    input {
        width: 100%;
        margin-left: .2rem;
        border: none;
        border-bottom: 1px solid #000;
        padding: .1rem;
    }
}

.searchHistory {
    width: 100%;
    padding: .2rem;
    position: relative;

    .searchSpan {
        font-size: .4rem;
        font-weight: 900;
    }

    .spanKey {
        padding: .1rem .2rem;
        background-color: rgb(185, 169, 169);
        border-radius: .4rem;
        margin: .1rem .2rem;
        display: inline-block;
    }

    .icon {
        width: .7rem;
        height: .7rem;
        position: absolute;
        right: 10px;
    }
}
.itemList {
    width: 100%;
    padding: .2rem;
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
        div {
          p {
            width: 4.54rem;
            height: .4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span{
            font-weight: 400;
            font-size: .24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .itemRight{
        width: 20%;
        height: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        position: relative;
        .icon{
          fill: #999;
        }
         .bofang{
            position: absolute;
            left: 0;
          }
         .liebiao{
            position: absolute;
            right: 0;
          }
      }
    }
  }
</style>