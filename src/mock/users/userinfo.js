const code = 200 //返回的状态骂

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

export default userInfo;