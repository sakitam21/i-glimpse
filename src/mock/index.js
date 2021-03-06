const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据
const domain = 'http://mockjs.com/api' //定义默认域名，随便写
const code = 200 //返回的状态码

import userInfo from './users/userinfo.js'
import banner from './fairystory/bannerurl.js'
import list from './fairystory/list.js'
import items from './fairystory/items.js'

/*
*用户信息
*/
Mock.mock(`${domain}\/users`,'get',userInfo);

/*
*童话故事页
*/
Mock.mock(`${domain}\/bannerurl`,'get',banner);
Mock.mock(`${domain}\/list`,'get',list);
Mock.mock(`${domain}\/items`,'get',items);
