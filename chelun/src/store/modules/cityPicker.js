import { cityList, costList } from '@/api/index'
const state = {
    // 签发城市列表
    cityList: [],
    // 可换补城市列表
    costList: [],
    // 选择的签发城市
    city: ['请选择签发地'],
    // 选择的补换城市
    cost: []
}

const mutations = {
    updateState(state, action) {
        state = Object.assign(state, action);
    }
}

const actions = {
    // 获取签发城市列表
    async getCityList({ commit }) {
        let res = await cityList();
        res.data.forEach(item => {
            item.list.forEach(value => {
                delete value.list;
            })
        })
        commit('updateState', { cityList: res.data })
            // console.log('res...', res)
    },
    async getCostList({ commit, state }, action) {
        let proIndex = state.cityList.findIndex(item => item.name == state.city[0]),
            cityIndex = state.cityList[proIndex].list.findIndex(item => item.name == state.city[1]);
        let res = await costList(1, state.cityList[proIndex].id, state.cityList[proIndex].list[cityIndex].id);
        console.log('res...', res);
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}