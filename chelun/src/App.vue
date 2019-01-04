<template>
  <div id="app">
    <!-- <button @click="login">点击登陆</button> -->
   <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {}
        },
        methods: {
            // login() {
            //     JSBridge.invoke('app', 'login', {
            //         loginCallBackName: (res) => {
            //             console.log('res...', res);
            //         }
            //     });
            // }
        }
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
    
    #app {
        width: 100%;
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        background: #eee;
        overflow: hidden;
    }
</style>