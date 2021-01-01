import ajax from "../../util/ajax.js"

const state ={
	categoryData :[]
}

const mutations = {
	GETCATEGORYDATA(state,categoryData){
		state.categoryData = categoryData
	}
}
const actions = {
	async getcategoryData({commit}){
		let categoryData = await ajax("/categorydatas");
		commit("GETCATEGORYDATA",categoryData)
	}
}
const getters = {}

export default {
	state,
	actions,
	mutations,
	getters
}