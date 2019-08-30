<template>
  <div class="main">

  	<div class="header">
  		<div class="logo" >
  				I Glimpse
  		</div>
  		<Menu mode="horizontal" :active-name="activeName" class="menu" theme="light">
        <MenuItem name="1" to="/main/fairystory" class="menuItem">
            	FairyStory
        </MenuItem>
        <MenuItem name="2" to="/main/minions" class="menuItem">
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
	height: 2600px;
}

.header{
	width: 100%;
	height: 52px;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid #cfcfcf;
	/*border:1px solid #000000;*/
}

.header .logo{
	width: 24%;
	height: 30px;
	margin: 15px 7px;
  color: grey;
	/*border:1px solid #000000;*/
	font-size: 18px;
	font-weight: 800;
	float: left;
}

.header .menu{
	width: 40%;
	height: 52px;
	float: right;
	/*border:1px solid #000000;*/
	font-size: 16px;
	font-weight: bold;
}

.content{
	width: 100%;
	height: 2400px;
	text-align: center;
  padding-top: 52px;
}

@media screen and (max-width: 550px){
  .header .menu{
    width: 50%;
    height: 52px;
    float: right;
    font-size: 14px;
    border-style: none;
  }

  .header .menu .menuItem{
    width: 50%;
    height: 50px;
    text-decoration: none;
    font-size: 12px;
  }

  .header .logo{
  width: 24%;
  height: 30px;
  margin: 15px 7px;
  color: grey;
  /*border:1px solid #000000;*/
  font-size: 16px;
  font-weight: 800;
  float: left;
}
}
</style>
