export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			data,
			method,
			success(val) {
				resolve(val.data)
			}
		})
	})
}