<!-- 选择地列表 -->
<template>
  <div>
    <ol class='type_list'>
      <li @click='typeClick'>
        <span>服务类型</span>
        <span>{{form.type}}></span>
      </li>
      <li @click='cityClick'>
        <span>当前驾照签发城市<em>?</em></span>
        <span class='select'>{{city.join(' ')}}</span>
      </li>
      <li @click='costClick'>
        <span>可补换的签发城市<em>?</em></span>
        <span class='select'>请选择签发城市</span>
      </li>
      <li>
        <span>服务费</span>
        <span>￥399></span>
      </li>
      <li class='salc'>
        <span>优惠</span>
        <span>登陆后查看优惠券></span>
      </li>
    </ol>
    <!-- 服务类型 -->
    <van-popup v-model="showType" position='bottom' :overlay='showType'>
      <van-picker :columns='serveType' show-toolbar title='服务类型' @cancel="onCancel" @confirm="onConfirm"></van-picker>
    </van-popup>
    <!-- 签发城市 -->
    <van-popup v-model="showCity" position='bottom' :overlay='showCity'>
      <van-picker :columns="cityCoumns" show-toolbar title="选择签发城市" ref='cityPicker' @change='cityChange' @cancel="cityCancel"
        @confirm="cityConfirm" />
    </van-popup>
    <!-- 可换补签发城市 -->
    <!-- <van-popup v-model="showCity" position='bottom' :overlay='showCity'>
        <van-picker :columns="cityCoumns" show-toolbar title="选择签发城市" ref='cityPicker' @change='cityChange' @cancel="cityCancel"
          @confirm="cityConfirm" />
      </van-popup> -->
  </div>
</template>

<script>
    import {
        cityList,
        costList
    } from '@/api/index';
    import {
        mapState,
        mapActions,
        mapMutations
    } from 'vuex';

    export default {
        data() {
            return {
                form: {
                    type: '请选择'
                },
                // 控制服务类型弹框
                showType: false,
                // 服务类型数据
                serveType: ['换驾照', '补驾照'],
                // 控制签发城市弹框
                showCity: false,
                // 控制可补换驾照弹框
                showCost: false,
                // 多列选项配置
                cityCoumns: []
            }
        },
        created() {
            this.getCityList().then(res => {
                this.cityCoumns = [{
                    values: this.cityList.map(item => item.name)
                }, {
                    values: this.cityList[0].list.map(item => item.name)
                }]
            })
        },
        computed: {
            ...mapState({
                cityList: state => state.cityPicker.cityList,
                city: state => state.cityPicker.city
            })
        },
        methods: {
            // 点击服务类型弹框进行选择
            typeClick() {
                this.showType = true
            },
            // 点击点击服务类型弹框--取消按钮
            onCancel() {
                this.showType = false;
            },
            // 点击点击服务类型弹框--确定按钮
            onConfirm(value) {
                this.form.type = value
                this.showType = false;
                console.log(value)
            },
            ...mapActions({
                getCityList: 'cityPicker/getCityList',
                getCostList: 'cityPicker/getCostList'

            }),
            ...mapMutations({
                updateState: 'cityPicker/updateState'
            }),
            // 点击签发城市
            cityClick() {
                this.showCity = true;
            },
            cityChange(picker, values) {
                let index = this.cityList.findIndex(item => item.name == values[0])
                this.$refs.cityPicker.setColumnValues(1, this.cityList[index].list.map(item => item.name));
                // console.log('picker', picker, values)
            },
            cityCancel() {
                this.showCity = false
            },
            cityConfirm(values) {
                // 触发mutation更新城市数据
                this.updateState({
                    city: values
                })
                this.cityCancel()
                    // console.log('values...', values)
            },
            costClick() {
                if (!this.city.length) {
                    alert('请选择签发城市');
                } else {
                    this.getCostList();
                }
            }
        }

    }
</script>

<style>
    .type_list {
        width: 100%;
        margin-top: 10px;
    }
    
    .type_list li {
        width: 100%;
        height: 50px;
        padding: 0 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
        background: #fff;
        font-size: 14px;
        position: relative;
    }
    
    .type_list li em {
        background: #ccc;
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        text-align: center;
        line-height: 16px;
        margin-left: 5px;
    }
</style>