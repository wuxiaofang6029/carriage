<!-- 上传证件图片 -->
<template>
  <div>
    <div class="add">
      <dl v-for='(item,index) in list' @click='clickPhone(item)'>
        <dt>
          <img v-if='item.src' :src="item.src" alt="">
          <img v-else class='add' :src="addImg" alt="">
        </dt>
        <dd>{{item.desc}}</dd>
      </dl>
    </div>
    <section v-show="showMask" class="mask" style='z-index:99'>
      <img :src="current.demo">
      <div>
        <button @click="upload(1)">拍照</button>
        <button @click="upload(2)">相册</button>
        <button @click="cancel">取消</button>
      </div>
    </section>
  </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex';
    import add from '@/assets/add.jpg';
    import {
        uploadImg
    } from '@/api/index';

    export default {
        data() {
            return {
                current: {},
                showMask: false,
            }
        },
        methods: {
            // 证件、设置点击弹出拍照、相册弹框
            clickPhone(itm) {
                this.current = itm
                this.showMask = true
            },
            // 点击上传图片弹框取消按钮
            cancel() {
                this.showMask = false
            },
            ...mapMutations({
                updateList: 'app/updateList'
            }),
            async upload(type) {
                let res = await uploadImg(type);
                let index = this.list.findIndex(item => item == this.current);
                this.updateList({
                    index,
                    // src: 'http://picture.eclicks.cn/g2//l//2019//01//02//454a564ad63ddda5_640_853.jpg',
                    src: res.data.url
                })
                this.showMask = false;
            },
        },
        computed: {
            ...mapState({
                list: state => state.upload.list
            }),
            addImg() {
                return add;
            }
        }
    }
</script>

<style>
    .add {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
        box-sizing: border-box;
        background: #fff;
    }
    
    .add dl {
        width: 100%;
    }
    
    .add dl dt {
        width: 62px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .add dl dt img {
        width: 40px;
        height: 50px;
    }
    
    .add dl dd {
        width: 50px;
        text-align: center;
        font-size: 14px;
        margin: 8px auto 0;
        color: #666;
    }
</style>