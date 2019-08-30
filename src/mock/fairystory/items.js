const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据
const code = 200 //返回的状态码

const items = req => {

	console.log(req)

	let items = []

	for(let i=0;i<10;i++){
		let item=Random.word(10,12)
		items.push(item)
	}

	return {
		code,
		items
	}
}

export default items;