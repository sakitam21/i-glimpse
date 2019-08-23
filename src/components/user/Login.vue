<template>
  <div class="login">
    <div class="form">
    	<h1>Login</h1>
    	<div class="inputItem">
    		<label>Username</label>
    		<input type="text" name="username" v-model="username">
    	</div>

    	<div class="inputItem">
    		<label>Password</label>
    		<input type="text" name="password" v-model="password">
    	</div>

    	<div class="Submit">
    		<input type="button" name="submit" value="Submit" v-on:click="submit">
    	</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../../router'
export default {
  name: 'Login',
  data:function(){
  	return {
  		username:"",
  		password:""
  	}
  },
  created: function(){
  	axios.get("/users")
  	.then(function(response){
  		console.log(response.data.users[0])
  	}).catch(function(error){
  		console.log(error)
  	})
  },
  methods:{
  	submit:function(){
  		if(this.username==="root"&&this.password==="password"){
  			router.push({name:'main'})
  		}else{
  			alert("用户名或者密码错误！")
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
	width: 100vw;
	height: 100vh;
}

.form{
	width: 380px;
	height: 180px;
	margin: 0 auto;
	margin-top: 200px;
	border: 1px solid black;
}

.inputItem{
	width: 300px;
	height: 30px;
	margin: 2px auto;
}
</style>
