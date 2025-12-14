const live = require('../services/live');

exports.room = async (req, res) => {

	const { web_rid } = req.params;

	const { type } = req.query;

	if (!web_rid) {
		return res.json({ code: 40001, msg: "web_rid 不能为空" });
	}

	const data = await live.webLiveRoomValue(web_rid, type);

	res.json(data);
};

exports.detail = async (req, res) => {

	const { type } = req.query;

	const { room_id } = req.params;

	if (!room_id) {
		return res.json({ code: 40001, msg: "room_id 不能为空" });
	}

	const data = await live.mobileLiveRoomValue(room_id, type);

	res.json(data);
};


