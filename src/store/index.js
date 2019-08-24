import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = { //设置全局访问的state对象
	//设置初始属性值
	showFooter:true,
	changableNum:0
}

const getters = { //实时监听state值的变化（最新状态）
	isShow(state){ //方法名随意，主要是用来承载变化的changableNum的值
		return state.showFooter
	},
	getChangedNum(){
		return state.changableNum
	}

}

const mutations = {
	show(state){ //自定义改变state初始值的方法，这里面的参数除了stat之外还可以传额外的参数
		state.showFooter = true
	},
	hide(state){
		state.showFooter = false
	},
	newNum(state,sum){
		state.changableNum += sum
	}
}


const actions = {
	hideFooter(context){ //自定义出发mutations里函数的方法，context与store示例具有相同的属性和方法
		context.commit('hide')
	},
	showFooter(context){
		context.commit('show')
	},
	getNewNum(context){
		context.commit('newNum',num)
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});

export default store;
