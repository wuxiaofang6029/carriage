import JSBridge from '@/utils/JSBridge.js';

// 封装请求方法
function sendRequest(url, method = 'GET', data = {}) {
    let params = {
            method
        }
        // 判断如果是POST请求，带上请求体信息
    if (method == 'POST') {
        params.body = JSON.stringify(data);
    }
    // 判断请求查询url是否携带query
    if (url.indexOf('?') == -1) {
        url += `?_=${+new Date()}`
    } else {
        url += `&_=${new Date()}`
    }
    // 拼接登陆状态token
    // url += `&token=${getToken()}`
    return fetch(url, params)
        .then(res => res.json())
        .then(body => body)
}


// 图片上传
export let uploadImg = (type) => {
    return new Promise((resolve, reject) => {
        JSBridge.invoke('device', 'chooseImage', {
            type,
            chooseCallbackName: function(res) {
                resolve(res);
            }
        })
    })
}

// 获取签发城市
export let cityList = () => {
    return sendRequest('/api/ExchangeJiaZhao/cityList')
}

// 获取可补换城市
export let costList = (...params) => {
    return sendRequest(`/api/ExchangeJiaZhao/getCostList?order_type=${params[0]}&province_id=${params[1]}&city_id=${params[2]}`)

}