<template>
	<div class="fairyStory">
		<div class="header">
			<div class="logo">
				Fairy Story
			</div>
			<div class="menu">
				<Menu mode="horizontal" theme="light" active-name="1">
        			<MenuItem name="1" to="/main/fairystory/home">
            			Home
        			</MenuItem>
        			<MenuItem name="2">
            			page1
        			</MenuItem>
        		</Menu>
			</div>
		</div>

		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

export default{
	name:'FairyStory',
	data:function(){
		return {

		}
	}
}
</script>

<style scoped>
.storyHome{
	width: 98%;
	height: 1000px;
	border: 1px solid #000000;
	margin:1%;
}

.header{
	width: 100%;
	height: 120px;
	border:1px solid #000000;
}

.header .logo{
	width: 100%;
	height: 40px;
	border: 1px solid #000000;
	font-size: 24px;
	font-weight: bold;
}

.header .menu{
	width: 20%;
	height: 60px;
	margin: 0 auto;
}

.content{
	width: 100%;
	height: 2000px;
	border: 1px solid #000000;
}
</style>