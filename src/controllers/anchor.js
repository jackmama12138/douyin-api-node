const anchor = require('../services/anchor');

/**
 * 搜索主播信息
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 */
exports.search = async (req, res) => {
  try {
    const { name } = req.params;
    if (!name || name.trim() === '') {
      return res.json({ code: 40001, msg: "name 不能为空" });
    }

    const data = await anchor.searchAnchor(name);
    res.json(data);
  } catch (error) {
    console.error('搜索主播信息失败:', error);
    res.json({ code: 50001, msg: "服务器内部错误" });
  }
};

/**
 * 获取主播直播历史
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 */
exports.history = async (req, res) => {
  try {
    const { aid } = req.params;
    if (!aid || aid.trim() === '') {
      return res.json({ code: 40001, msg: "aid 不能为空" });
    }

    const data = await anchor.historyLive(aid);
    res.json(data);
  } catch (error) {
    console.error('获取主播直播历史失败:', error);
    res.json({ code: 50001, msg: "服务器内部错误" });
  }
};

/**
 * 获取主播个人资料
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 */
exports.profile = async (req, res) => {
  try {
    const { sec_user_id } = req.params;
    const { type } = req.query;

    if (!sec_user_id || sec_user_id.trim() === '') {
      return res.json({ code: 40001, msg: "sec_user_id 不能为空" });
    }

    const data = await anchor.anchorProfile(sec_user_id, type);
    res.json(data);
  } catch (error) {
    console.error('获取主播个人资料失败:', error);
    res.json({ code: 50001, msg: "服务器内部错误" });
  }
};
