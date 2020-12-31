import ajax from "../../util/ajax.js"

const state ={
	indexData :{}
}

const mutations = {
	GETINDEXDATA(state,indexData){
		state.indexData = indexData
	}
}
const actions = {
	async getIndexData({commit}){
		let indexData = await ajax("/index");
		commit("GETINDEXDATA",indexData)
	}
}
const getters = {}

export default {
	state,
	actions,
	mutations,
	getters
}