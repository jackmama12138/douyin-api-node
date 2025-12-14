const live = require('../api/live');
const LiveMapper = require('../mappers/live');

exports.webLiveRoomValue = async (web_rid, type) => {

	const data = await live.getLiveRoom(web_rid);

	if (type === 'mapper') {
		return LiveMapper.webLiveRoomMapper(data);
	}
	return data;
}

exports.mobileLiveRoomValue = async (room_id, type) => {

	const data = await live.getLiveRoomDetail(room_id);

	if (type === 'mapper') {
		return LiveMapper.mobileLiveRoomMapper(data);
	}

	return data;
}
