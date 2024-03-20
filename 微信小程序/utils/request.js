const SubDomain = require('../config')
 const request = (url, methods,data="", needSubDomain=true) => {
   let result = needSubDomain ? SubDomain.subDomain : ''
   let _url = SubDomain.baseUrl  + result  + url;
    return new Promise((resolve,reject) => {
        wx.request({
            url:_url,
            data: data,
            methods:methods,
            timeout: 60 * 1000,
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(request){
              resolve(request)
            },
            fail(error) {
              reject(error)
            },
            complete(aaa) {

            }

        })
    })
 }

// 导出
module.exports = request