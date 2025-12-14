const anchor = require('../services/anchor');

exports.search = async (req, res) => {
	const { name } = req.params;
	if (!name) {
		return res.json({ code: 40001, msg: "name 不能为空" });
	}

	const data = await anchor.seachAnchor(name);
	res.json(data);
};

exports.history = async (req, res) => {
	const { aid } = req.params;
	if (!aid) {
		return res.json({ code: 40001, msg: "aid 不能为空" });
	}

	const data = await anchor.historyLive(aid);
	res.json(data);
};

exports.profile = async (req, res) => {
	const { sec_user_id } = req.params;
	const { type } = req.query;

	if (!sec_user_id) {
		return res.json({code: 40001, msg: "sec_user_id 不能为空"});
	}

	const data = await anchor.anchorProfile(sec_user_id,type);

	res.json(data);
}
