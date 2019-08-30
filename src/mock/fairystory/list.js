const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据
const code = 200 //返回的状态码

const list = req => {

	console.log(req)

	let list = []

	let list1={
		imageurl:Random.image('340x120', '#AC823D', '#AC823D', 'png', 'group1'),
		imageinfo:Random.csentence(200, 240)
	}

	list.push(list1)


	let list2={
		imageurl:Random.image('340x120', '#D895A3', '#D895A3', 'png', 'group1'),
		imageinfo:Random.csentence(200, 240)
	}

	list.push(list2)

	let list3={
		imageurl:Random.image('340x120', '#82485F', '#82485F', 'png', 'group1'),
		imageinfo:Random.csentence(200, 240)
	}

	list.push(list3)

	let list4={
		imageurl:Random.image('340x120', '#99699E', '#99699E', 'png', 'group1'),
		imageinfo:Random.csentence(200, 240)
	}

	list.push(list4)

	let list5={
		imageurl:Random.image('340x120', '#39729A', '#39729A', 'png', 'group1'),
		imageinfo:Random.csentence(200, 240)
	}

	list.push(list5)

	let list6={
		imageurl:Random.image('340x120', '#EB8DAE', '#EB8DAE', 'png', 'group1'),
		imageinfo:Random.csentence(200, 240)
	}

	list.push(list6)

	return {
		code,
		list
	}
}

export default list;