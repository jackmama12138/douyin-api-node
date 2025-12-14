const rank = require('../services/rank');

/**
 * 获取排行榜列表
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 */
exports.ranklist = async (req, res) => {
  try {
    const { type } = req.query;
    const data = await rank.getRankList(type);
    res.json(data);
  } catch (error) {
    console.error('获取排行榜列表失败:', error);
    res.json({ code: 50001, msg: "服务器内部错误" });
  }
};

/**
 * 获取网页端排行榜列表
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 */
exports.webRankList = async (req, res) => {
  try {
    const { type } = req.query;
    const data = await rank.getPopularity(type);
    res.json(data);
  } catch (error) {
    console.error('获取网页端排行榜列表失败:', error);
    res.json({ code: 50001, msg: "服务器内部错误" });
  }
};

/**
 * 获取创作者排行榜
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 */
exports.creator = async (req, res) => {
  try {
    const { type } = req.query;
    const data = await rank.getCreatorTop(type);
    res.json(data);
  } catch (error) {
    console.error('获取创作者排行榜失败:', error);
    res.json({ code: 50001, msg: "服务器内部错误" });
  }
};

/**
 * 获取热搜排行榜
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 */
exports.hotsearch = async (req, res) => {
  try {
    const { type } = req.query;
    const data = await rank.getHotSearchList(type);
    res.json(data);
  } catch (error) {
    console.error('获取热搜排行榜失败:', error);
    res.json({ code: 50001, msg: "服务器内部错误" });
  }
};

/**
 * 获取游戏列表
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 */
exports.gamelist = async (req, res) => {
  try {
    const { count, offset, partition, partition_type, type } = req.query;

    if (!count || !offset || !partition || !partition_type) {
      return res.json({ code: 40001, msg: "参数错误" });
    }

    const data = await rank.getGameList(count, offset, partition, partition_type, type);
    res.json(data);
  } catch (error) {
    console.error('获取游戏列表失败:', error);
    res.json({ code: 50001, msg: "服务器内部错误" });
  }
};
