const {oneDataFetch,douyinFetch} = require('./fetch.js');
const qs = require('qs');
const {HOST} = require('../config/index.js');

const seachAnchor = async (name,server=true)=>{
	let url = ''
	const postData = qs.stringify({
		'keyword': name,
		'cursor': '0'
	});
	if (server){
		url = HOST.seachNormal
	}else {
		url = HOST.seachAll
	}
	try {
		const {data} = await oneDataFetch({
			url,
			method:'POST',
			data:postData
		})
		return data
	}catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'seachAnchor failed',
			cause: err,
		};
	}
}

const historyLive = async (id)=>{
	const url = HOST.historyLive
	const postData = qs.stringify({
		'anchor_id': id
	});
	try {
		const {data} = await oneDataFetch({
			url,
			method:'POST',
			data:postData
		})
		return data
	}catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'historyLive failed',
			cause: err,
		};
	}
}

const anchorProfile = async (sec_user_id)=>{

    try {
	    const url = `https://www-hj.douyin.com/aweme/v1/web/user/profile/other/?device_platform=webapp&aid=6383&sec_user_id=${sec_user_id}`

	    return await douyinFetch({url})
    }catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'anchorProfile failed',
			cause: err,
		};
	}
}

module.exports={
	seachAnchor,
	historyLive,
	anchorProfile
}
