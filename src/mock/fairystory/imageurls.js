const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据
const code = 200 //返回的状态码

const imageurls = req =>{
	console.log(req)

	let imageurls=[]

	imageurls.push(Random.image('340x120', '#AC823D', '#AC823D', 'png', 'group1'))
	imageurls.push(Random.image('340x120', '#D895A3', '#D895A3', 'png', 'group1'))
	imageurls.push(Random.image('340x120', '#82485F', '#82485F', 'png', 'group1'))
	

	for(let i=0;i<2;i++){
		let imageurl=Random.image('420x300', '#cfcfcf', '#FFF', 'png', 'group2')
		imageurls.push(imageurl)
	}

	return {
	  code,
	  imageurls
	}
}

export default imageurls;