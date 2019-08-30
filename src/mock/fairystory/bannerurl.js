const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据
const code = 200 //返回的状态码

const banner = req =>{
	console.log(req)

	let banner = Random.image('500x360', '#C9758C', '#C9758C', 'png','fairystory')

	return {
	  code,
	  banner
	}
}

export default banner;