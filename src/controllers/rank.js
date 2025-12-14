const rank = require('../services/rank');

exports.ranklist = async (req, res) => {
	const { type } = req.query;
	const data = await rank.getRankList(type);
	res.json(data);
};

exports.webRankList = async (req, res) => {
	const { type } = req.query;
	const data = await rank.getPopularity(type);
	res.json(data);
};

exports.creator = async (req, res) => {
	const { type } = req.query;
	const data = await rank.getCreatorTop(type);
	res.json(data);
};

exports.hotsearch = async (req, res) => {
	const { type } = req.query;
	const data = await rank.getHotSearchList(type);
	res.json(data);
};

exports.gamelist = async (req, res) => {

	const {count,offset,partition,partition_type,type} = req.query;

	if (!count || !offset || !partition || !partition_type) {
		return res.json({ code: 1, data: '参数错误' });
	}

	const data = await rank.getGameList(count,offset,partition,partition_type,type);

	res.json(data);
};
