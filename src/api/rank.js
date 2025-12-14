const {douyinFetch,fetch} = require('./fetch');


const getWebRankList = async (room_id = '7580737421006408483')=>{
	try {
		const url = `https://live.douyin.com/webcast/ranklist/popularity/?aid=6383&anchor_id=${room_id}`;
		const data = await douyinFetch({url,need_ck:false});
		return data?.data;
	}catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'getWebRankList failed',
			cause: err,
		};
	}
}

const getRankList = async ()=>{
	try {
		const url = `https://webcast.amemv.com/webcast/ranklist/hot/?iid=2074140285342921&device_id=3323176289581092&aid=1128&app_name=&version_code=&device_platform=android`;
		const data = await fetch({url});
		return data?.data;
	}catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'getRankList failed',
			cause: err,
		};
	}
}

const getCreatorTop = async ()=>{
	try {
		const url = `https://creator.douyin.com/janus/douyin/creator/data/billboard/list?aid=2906&page_num=1&page_size=200&type=10`;
		const data = await fetch({url});
		return data?.data;
	}catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'getCreatorTop failed',
			cause: err,
		};
	}
}

const getHotSearchList = async ()=>{
	try {
		const url = `https://creator.douyin.com/janus/douyin/creator/data/billboard/list?aid=2906&page_num=1&page_size=200&type=1`;
		const data = await fetch({url});
		return data?.data;
	}catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'getHotSearchList failed',
			cause: err,
		};
	}
}

const getGameList = async (count,offset,partition,partition_type)=>{
	try {
		const url = `https://live.douyin.com/webcast/web/partition/detail/room/v2/?aid=6383&count=${count}&offset=${offset}&partition=${partition}&partition_type=${partition_type}&req_from=2`;
		const data = await douyinFetch({url});
		return data?.data;
	}catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'getGameList failed',
			cause: err,
		};
	}
}

module.exports = {
	getWebRankList,
	getRankList,
	getCreatorTop,
	getHotSearchList,
	getGameList
}
