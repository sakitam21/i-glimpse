<template>
  <div class="login">
    <div class="form">
    	<h2>Login</h2>
    	<div class="inputItem">
    		<label>username</label>
    		<input type="text" name="username" v-model="username">
    	</div>

    	<div class="inputItem">
    		<label>password</label>
    		<input type="text" name="password" v-model="password">
    	</div>

    	<div>
    		<input type="button"  class="submit" name="submit" value="submit" v-on:click="submit">
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
  			router.push({name:'fairystory'})
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
  color: gray;
}

.form{
	width: 20%;
	height: 60%;
	margin: 0 auto;
	padding-top: 24vh;
}

.inputItem{
	width: 80%;
	height: 20px;
	margin: 8px auto;
}


.inputItem input{
  border-radius: 5px;
}

.submit{
  color: gray;
  border-radius: 5px;
  border: 1px solid gray;
}


@media screen and (max-width: 768px){
  .form{
    width: 50%;
    height: 60%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 550px){
  .form{
    width: 62%;
    height: 60%;
    margin: 0 auto;
  }
}

</style>
