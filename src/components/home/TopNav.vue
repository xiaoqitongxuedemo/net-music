
import router from '@/router';

<template>
    <div class="topNav">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao2"></use>
            </svg>
        </div>
        <div class="topContent">
            <span @click="$router.push('/infoUser')">我的</span>
            <span class="active">发现</span>
            <span>动态</span>
            <span>视频</span>
        </div>
        <div class="topRight">
            <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
                <use xlink:href="#icon-search"></use>
            </svg>
        </div>
    </div>
</template>
<style lang="less" scoped>
.topNav {
    width: 100%;
    height: 1rem;
    padding: .2rem;
    margin-top: .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .topContent {
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        font-size: .4rem;
        font-family: demo;
        .active{
            font-weight: 900;
        }
    }
}
</style>