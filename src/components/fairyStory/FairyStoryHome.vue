<template>
	<div class="fairystoryhome">
		<div class="banner">
			<img src="@/assets/1.jpg" style="width: 70%;height: 560px; margin: 20px 0;">
		</div>	

		<div class="groupone">
			<div class="grouponeItem">
				<div class="g1_img">
					<img src="@/assets/g1_01.jpg">
				</div>
				<div class="g1_content">
					{{g1_content1}}
				</div>
			</div>
			<div class="grouponeItem">
				<div class="g1_img">
					<img src="@/assets/g1_03.jpg">
				</div>
				<div class="g1_content">
					{{g1_content2}}
				</div>
			</div>
			<div class="grouponeItem">
				<div class="g1_img">
					<img src="@/assets/g1_02.jpg">
				</div>	
				<div class="g1_content">
					{{g1_content3}}
				</div>
			</div>
		</div>

		<div class="groupTwo">
			<div class="groupTwoItem">
				<div class="g2_img">
					<img src="@/assets/g2_01.jpg"  style="width: 400px;height: 200px;">
				</div>
				<div class="g2_content">
					{{g2_content1}}
				</div>
			</div>
			<div class="groupTwoItem">
				<div class="g2_img">
					<img src="@/assets/g2_02.jpg"  style="width: 400px;height: 200px;">
				</div>
				<div class="g2_content">
					{{g2_content2}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	
export default{
	name:'FairyStoryHome',
	data:function(){
		return {
			g1_content1:"",
			g1_content2:"",
			g1_content3:"",
			g2_content1:"",
			g2_content2:""
		}
	},
	created: function(){
		const _this=this
  		axios.get("/imageinfo1")
  		.then(function(response){
  			console.log(response.data.infos)
  			_this.g1_content1=response.data.infos1[0].content;
  			_this.g1_content2=response.data.infos1[1].content;
  			_this.g1_content3=response.data.infos1[2].content;
  		}).catch(function(error){
  			console.log(error)
  		})

  		axios.get("/imageinfo2")
  		.then(function(response){
  			console.log(response.data.infos)
  			_this.g2_content1=response.data.infos2[0].content;
  			_this.g2_content2=response.data.infos2[1].content;
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
	border: 1px solid #000000;
}

.groupone{
	width: 80%;
	height: 360px;
	margin: 30px auto;
	border: 1px solid #000000;
}

.grouponeItem{
	width: 30%;
	height: 340px;
	margin:10px 15px;
	border: 1px solid #000000;
	float: left;
}

.grouponeItem .g1_img{
	width: 100%;
	height: 160px;
	padding-top: 10px;
	border: 1px solid #000000;
}

.grouponeItem .g1_content{
	width: 80%;
	height: 200px;
	margin: 10px auto;
}

.groupTwo{
	width: 80%;
	height: 360px;
	margin: 20px auto;
	border: 1px solid #000000;
}

.groupTwoItem{
	width: 46%;
	height: 340px;
	margin:10px 20px;
	border: 1px solid #000000;
	float: left;
}

.groupTwoItem .g2_img{
	width: 100%;
	height: 220px;
	margin: 0 auto;
	padding-top: 10px;
	border: 1px solid #000000;
}

</style>