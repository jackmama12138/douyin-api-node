const live = require('../services/live');

/**
 * 获取直播房间信息
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 */
exports.room = async (req, res) => {
  try {
    const { web_rid } = req.params;
    const { type } = req.query;

    if (!web_rid || web_rid.trim() === '') {
      return res.json({ code: 40001, msg: "web_rid 不能为空" });
    }

    const data = await live.webLiveRoomValue(web_rid, type);
    res.json(data);
  } catch (error) {
    console.error('获取直播房间信息失败:', error);
    res.json({ code: 50001, msg: "服务器内部错误" });
  }
};

/**
 * 获取直播房间详情
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 */
exports.detail = async (req, res) => {
  try {
    const { type } = req.query;
    const { room_id } = req.params;

    if (!room_id || room_id.trim() === '') {
      return res.json({ code: 40001, msg: "room_id 不能为空" });
    }

    const data = await live.mobileLiveRoomValue(room_id, type);
    res.json(data);
  } catch (error) {
    console.error('获取直播房间详情失败:', error);
    res.json({ code: 50001, msg: "服务器内部错误" });
  }
};


