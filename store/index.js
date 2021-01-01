import Vue from "vue"
import Vuex from "vuex"
import home from "./modules/home.js"
import category from "./modules/category.js"
import mockCartData from "./modules/mockCartData.js"

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		home,
		category,
		mockCartData
	}
})