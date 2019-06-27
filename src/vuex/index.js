import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state={
	pictures:[
		"./static/img/1.jpg",
		"./static/img/2.jpg",
		"./static/img/3.jpg",
		"./static/img/4.jpg",
		"./static/img/5.jpg",
		"./static/img/6.jpg",
		"./static/img/7.jpg",
		"./static/img/8.jpg",
		"./static/img/9.jpg",
		"./static/img/10.jpg"
	]
}
const getters={
	
}
const mutations={
	
}
const actions={
	
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})