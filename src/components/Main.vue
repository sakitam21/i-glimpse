<template>
  <div class="main">

  	<div class="header">
  		<div class="logo" >
  				I Glimpse
  		</div>
  		<Menu mode="horizontal" :active-name="activeName" class="menu">
        <MenuItem name="1" to="/main/fairystory/home">
            	Fairy Story
        </MenuItem>
        <MenuItem name="2" to="/main/minions">
            	Minions     
        </MenuItem>
    	</Menu>
  	</div>
  	

  	<div class="content">
  		<router-view></router-view>
  	</div>

    <FooterBar v-if="isShow"></FooterBar>
  </div>
</template>

<script>
import FooterBar from '@/components/common/FooterBar'
export default {
  name:'Main',
  components:{
    FooterBar
  },
  data:function(){
    return {
    	activeName:"1"
    }
  },
  computed:{
    isShow:function(){
      return this.$store.getters.isShow;
    }
  },
  watch:{
    $route(to,from){
      console.log(to)
      if(to.name==='storyHome'){
        this.$store.dispatch('hideFooter')
      }else{
        this.$store.dispatch('showFooter')
      }
    }
  }
}
  
</script>

<style scoped>
.main{
	width: 100%;
	height: 3200px;
}

.header{
	width: 100%;
	height: 60px;
	border:1px solid #000000;
}

.header .logo{
	width: 100px;
	height: 30px;
	margin: 15px 15px;
	border:1px solid #000000;
	font-size: 18px;
	font-weight: bold;
	float: left;
}

.header .menu{
	width: 40%;
	height: 60px;
	float: right;
	border:1px solid #000000;
	margin-right: 10px;
	font-size: 16px;
	font-weight: bold;
}

.content{
	width: 100%;
	height: 3000px;
	text-align: center;
}
</style>
