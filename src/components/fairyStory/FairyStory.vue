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

		<div class="list">
			abc abc abc abc abc abc abc abc abc abc 
			abc abc abc abc abc abc abc abc abc abc
			abc abc abc abc abc abc abc abc abc abc
			abc abc abc abc abc abc abc abc abc abc
		</div>

		<div class="groupone">
			<div class="grouponeItem">
				<img :src="imageurls[0]">
				<div class="content">
					{{imageinfos[0]}}
				</div>
			</div>
			<div class="grouponeItem">
					<img :src="imageurls[1]">
				<div class="content">
					{{imageinfos[1]}}
				</div>
			</div>
			<div class="grouponeItem">
					<img :src="imageurls[2]">
				<div class="content">
					{{imageinfos[2]}}
				</div>
			</div>
		</div>

		<div class="groupTwo">
			<div class="groupTwoItem">
				<div>
					<img :src="imageurls[3]"  class="g2_img">
				</div>
				<div class="g2_content">
					{{imageinfos[3]}}
				</div>
			</div>
			<div class="groupTwoItem">
				<div>
					<img :src="imageurls[4]"  class="g2_img">
				</div>
				<div class="g2_content">
					{{imageinfos[4]}}
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

			imageurls:[],

			imageinfos:[]
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

		//获取Item图url地址
		axios.get("/imageurls")
		.then(function(response){
			console.log(response.data.imageurls)
			_this.imageurls=response.data.imageurls;
		}).catch(function(response){
			console.log(error)
		})

		//获取ItemInfo
  		axios.get("/imageinfos")
  		.then(function(response){
  			console.log(response.data.imageinfos)
  			_this.imageinfos=response.data.imageinfos;
  		}).catch(function(error){
  			console.log(error)
  		})

  },
}
</script>

<style scoped>
.fairystoryhome{
	width: 100%;
	height: 2000px;
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
	height: auto;
	background-color: #F6F9FA;
	padding: 10px 0 10px 0;
}


.groupone{
	width: 90%;
	height: 360px;
	margin: 30px auto;
	/*border: 1px solid #000000;*/
}

.grouponeItem{
	width: 30%;
	height: 340px;
	margin:10px 10px;
	border: 1px solid #cfcfcf;
	border-radius: 10px;
	/*border: 1px solid #000000;*/
	float: left;
}

.grouponeItem img{
	width: 100%;
	height: 120px;
	border-radius: 10px 10px 0 0;
	/*border: 1px solid #000000;*/
}

.grouponeItem .content{
	width: 90%;
	height: 200px;
	margin: 10px auto;
}

.groupTwo{
	width: 80%;
	height: 360px;
	margin: 20px auto;
	/*border: 1px solid #000000;*/
}

.groupTwoItem{
	width: 46%;
	height: 340px;
	margin:10px 20px;
	/*border: 1px solid #000000;*/
	float: left;
}

.groupTwoItem .g2_img{
	width: 100%;
	height: 220px;
	margin: 0 auto;
	padding-top: 10px;
	/*border: 1px solid #000000;*/
}

@media screen and (max-width: 550px){
.fairystoryhome{
	width: 100%;
	height: 2300px;
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

.groupone{
	width: 90%;
	height: 1100px;
	margin: 10px auto;
	/*border: 1px solid #000000;*/
}

.grouponeItem{
	width: 100%;
	height: 340px;
	margin:10px 0;
	border: 1px solid #cfcfcf;
	/*border: 1px solid #000000;*/
}

.groupTwo{
	width: 94%;
	height: 740px;
	margin: 20px auto;
	/*border: 1px solid #000000;*/
}

.groupTwoItem{
	width: 100%;
	height: 340px;
	margin:10px 0;
	/*border: 1px solid #000000;*/
}




}

</style>