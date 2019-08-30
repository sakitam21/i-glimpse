const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据
const code = 200 //返回的状态码

const imageinfos = req =>{
	console.log(req);

	let imageinfos = []

	for (let i=0;i<5;i++){
		let imageinfo=Random.csentence(200, 240)
		imageinfos.push(imageinfo)
	}

	return{
		code,
		imageinfos
	}

}

export default imageinfos;