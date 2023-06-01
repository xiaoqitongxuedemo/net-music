<template>
    <div class="login">
        <div class="loginTop">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-prev"></use>
            </svg>
        </div>
        <div class="loginContent">
            <van-field v-model="email" placeholder="请输入用户名" />
            <van-field v-model="password" placeholder="请输入密码" />
            <van-button type="primary" round size="large">登录</van-button>
        </div>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
.login {
    width: 100%;
    height: 13.34rem;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 255, 255);

    .loginTop {
        width: 100%;
        height: 1rem;
        justify-items: center;
        align-items: center;
        font-size: 1rem;
        color: #fff;
        
    }

    .loginContent {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-top: 2rem;
    }
}
.icon{
        width: 100%;
        height: 0.5rem;
        stroke: #fff;
    }
</style>
  