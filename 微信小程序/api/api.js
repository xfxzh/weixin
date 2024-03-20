 /**引入request请求函数 */
 const rquest = require('../utils/request')

 /**封装轮播图接口 */
 const bannerList = () => {
   return rquest('/banner/list','get')
 }

 /**店铺信息 */
const shop = () => {
  return rquest('/shop/subshop/list', 'POST')
}






 module.exports = {
  bannerList,
  shop
 }