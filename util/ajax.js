
import configHost from "./config.js"

let equipment = uni.getSystemInfoSync().platform
let baseUrl 

if(equipment==="devtools"){
	baseUrl = configHost.mpHost
}else{
	baseUrl = configHost.h5Host
}
export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl+url,
			data,
			method,
			success(val) {
				resolve(val.data)
			}
		})
	})
}