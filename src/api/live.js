const {douyinFetch} = require('./fetch');

const getLiveRoom = async (web_rid)=>{
	try {
		const url = `https://live.douyin.com/webcast/room/web/enter/?aid=6383&web_rid=${web_rid}`;
		return await douyinFetch({url});
	}catch (err){
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'getLiveRoom failed',
			cause: err,
		};
	}
}

const getLiveRoomDetail = async (room_id)=>{
	try {
		const url = `https://webcast.amemv.com/webcast/room/reflow/info/?type_id=0&live_id=1&room_id=${room_id}&app_id=1128`;
		return await douyinFetch({url});
	}catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'getLiveRoomDetail failed',
			cause: err,
		};
	}
}





module.exports = {
	getLiveRoom,
	getLiveRoomDetail,
}
