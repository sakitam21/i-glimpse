<template>
	<div class="fairystoryhome">
		<div class="banner">
			<img :src="bannerUrl" class="bannerimage">
			<div class="bannertext">
				<p>What Is An Fairy Story?</p>
			</div>
			<div class="bannerbutton">
				Continue reading
			</div>
		</div>

		<div  class="list">
			<ul>
				<li  v-for="item in items">{{item}}</li>
			</ul>
		</div>

		<div class="group">
			<div class="groupItem" v-for="item in list">
				<img :src="item.imageurl">
				<div class="content">
					{{item.imageinfo}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	
export default{
	name:'FairyStory',
	data:function(){
		return {
			bannerUrl:"",
			list:[],
			items:[]
		}
	},
	created: function(){
		const _this=this

		//获取banner图url地址
		axios.get("/bannerurl")
		.then(function(response){
			console.log(response.data.banner)
			_this.bannerUrl=response.data.banner;
		}).catch(function(error){
			console.log(error)
		})

  		axios.get("/list")
  		.then(function(response){
  			console.log(response.data.list)
  			_this.list=response.data.list
  		}).catch(function(response){
  			console.log(error)
  		})

  		axios.get("/items")
  		.then(function(response){
  			console.log(response.data.items)
  			_this.items=response.data.items
  		}).catch(function(response){
  			console.log(error)
  		})

  },
}
</script>

<style scoped>
.fairystoryhome{
	width: 100%;
	height: auto;
	/*border: 1px solid #000000;*/
}

.banner{
	width: 100%;
	height: 320px;
}

.bannertext{
	position: absolute;
	top: 140px;
	left: 0;
	width: 100%;
	height: 40px;
	color: #fff;
	font-size: 24px;
	font-weight: bold;
	text-align: center;
}

.bannerbutton{
	position:absolute;
	top: 220px;
	left: 42%;
	width: 16%;
	height: 40px;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	line-height: 40px;
	border: 2px solid #fff;
	border-radius: 5px;
}

.bannerimage{
	width: 100%;
	margin: 0 auto;
	height: 100%;
}

.list{
	width: 100%;
	height: 40px;
	color: grey;
	text-align: center;
	font-size: 14px;
	background-color: #F6F9FA;
	padding: 10px 0 10px 0;
}

.list li{
	width: auto;
	height: 30px;
	display: inline-block;
	float: center;
	padding-left: 10px;
}

.group{
	width: 90%;
	height: 720px;
	color: grey;
	margin: 30px auto;
	/*border: 1px solid #000000;*/
}

.groupItem{
	width: 30%;
	height: 340px;
	margin:10px 10px;
	border: 1px solid #cfcfcf;
	border-radius: 10px;
	/*border: 1px solid #000000;*/
	float: left;
}

.groupItem img{
	width: 100%;
	height: 120px;
	border-radius: 10px 10px 0 0;
	/*border: 1px solid #000000;*/
}

.groupItem .content{
	width: 90%;
	height: 200px;
	margin: 10px auto;
}

@media screen and (max-width: 550px){
.fairystoryhome{
	width: 100%;
	height: auto;
	/*border: 1px solid #000000;*/
}

.banner{
	width: 100%;
	height: 280px;
}

.bannerbutton{
	position:absolute;
	top: 220px;
	left: 26%;
	width: 48%;
	height: 40px;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	line-height: 40px;
	border: 2px solid #fff;
	border-radius: 5px;
}

.group{
	width: 90%;
	height: 1100px;
	margin: 10px auto;
	/*border: 1px solid #000000;*/
}

.groupItem{
	width: 100%;
	height: 340px;
	margin:10px 0;
	border: 1px solid #cfcfcf;
	/*border: 1px solid #000000;*/
}

}

</style>