<template>
  <div class='wraper'>
    <!-- <button @click="login">点击登陆</button> -->
    <div class="main">
      <ul class="order_tab">
        <li class='active'><span>订单提交</span></li>
        <li><span>收货地址</span></li>
        <li><span>正在办理</span></li>
        <li><span>办理完成</span></li>
      </ul>
      <div class="ban">
        <img src="../assets/ban.jpg" alt="">
      </div>
      
      <UpLoad></UpLoad>
      <!-- 选择列表组件 -->
      <ServeType></ServeType>
      <div class="issuc">
          <a href="">常见问题</a>
          <img src="../assets/service.jpg" alt="">
      </div>
    </div>
    <div class="footer">
        <p>实付：<span>￥399</span></p>
        <button>立即支付</button>
    </div>
   
      
  </div>
</template>

<script>
    const JSBridge = require('../utils/JSBridge.js');
    import {
        mapState,
        mapMutations
    } from 'vuex';

    import UpLoad from '@/components/upload'; // 上传证件图片
    import ServeType from '@/components/ServeType'; // 选择类型、城市组件

    export default {
        name: 'app',
        data() {
            return {

            }
        },
        components: {
            ServeType,
            UpLoad
        },
        methods: {
            // login() {
            //     JSBridge.invoke('app', 'login', {
            //         loginCallBackName: (res) => {
            //             console.log('res...', res);
            //         }
            //     });
            // }
        },
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    
    html,
    body {
        width: 100%;
        height: 100%;
    }
    
    ul,
    ol,
    li {
        list-style: none;
    }
    
    .wraper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #eee;
        overflow: hidden;
    }
    
    .main {
        flex: 1;
        overflow-y: scroll;
    }
    
    .order_tab {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #fff;
    }
    
    .order_tab li {
        position: relative;
        height: 100%;
        line-height: 50px;
        font-size: 14px;
        color: #3AAFFE;
        flex: 1;
        text-align: center;
    }
    
    .order_tab li.active {
        color: #fff;
        background-image: url('../assets/bg.jpg');
        background-size: 100% 100%;
    }
    
    .ban {
        width: 100%;
        height: 150px;
    }
    
    .ban img {
        width: 100%;
        height: 100%;
    }
    
    .select {
        color: #999;
    }
    
    .salc {
        margin-top: 10px;
    }
    
    .footer {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        background: #fff;
        padding-left: 10px;
        box-sizing: border-box;
        align-items: center;
    }
    
    .footer p span {
        color: red;
    }
    
    .footer button {
        width: 80px;
        height: 50px;
        border: none;
        background: rgb(192, 190, 190);
        color: #fff;
    }
    
    .issuc {
        width: 100%;
        height: 60px;
        position: relative;
        text-align: center;
        line-height: 60px
    }
    
    .issuc img {
        width: 60px;
        position: absolute;
        right: 5px;
        top: 5px;
    }
    
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    
    .mask img {
        width: 90%;
        margin-top: 20%;
    }
    
    .mask div {
        display: flex;
        width: 90%;
        flex-direction: column;
        align-items: center;
    }
    
    .mask div button {
        width: 100%;
        height: 40px;
        font-size: 14px;
        letter-spacing: 10px;
        border-radius: 10px;
        color: #3aafc0;
    }
    
    .mask div button:first-child {
        border-radius: 10px 10px 0 0;
    }
    
    .mask div button:nth-child(2) {
        border-radius: 0 0 10px 10px;
    }
    
    .mask div button:last-child {
        margin: 15px 0;
    }
</style>