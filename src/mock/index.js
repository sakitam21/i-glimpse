const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据
const domain = 'http://mockjs.com/api' //定义默认域名，随便写
const code = 200 //返回的状态骂

//随机生成文章数据
const postData = req => {

	console.log(req) // 请求体，用于获得参数

	let posts = []//用于存放文章数据的数组

	for (let i = 0; i < 10; i++) {
    let post = {
      title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
      icon: Random.dataImage('250x250', '文章icon'), // 随机生成大小为250x250的图片链接
      author: Random.cname(), // 随机生成名字
      date: Random.date() + ' ' + Random.time() // 随机生成年月日 + 时间
    }

    posts.push(post)
  }
  
  // 返回状态码和文章数据posts
  return {
    code,
    posts
  }
}
// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}\/posts`, 'get', postData);

//自定义用户数据
const userInfo = req => {
	console.log(req)

	let users = []

	let user = {
	  username: "root",
	  password: "password"
	}

	users.push(user)

	return {
	  code,
	  users
	}
}
//返回用户信息
Mock.mock(`${domain}\/users`,'get',userInfo);

//模拟童话首页的插画信息
const imageInfo1 = req =>{
	console.log(req)

	let infos1=[]

	for (let i=0;i<3;i++){
		let info={
			content:Random.csentence(120, 160)
		}
		infos1.push(info)
	}

	return{
		code,
		infos1
	}
}
Mock.mock(`${domain}\/imageinfo1`,'get',imageInfo1);

//模拟童话首页的插画信息
const imageInfo2 = req =>{
	console.log(req)

	let infos2=[]

	for (let i=0;i<2;i++){
		let info={
			content:Random.csentence(120, 160)
		}
		infos2.push(info)
	}

	return{
		code,
		infos2
	}
}
Mock.mock(`${domain}\/imageinfo2`,'get',imageInfo2);
