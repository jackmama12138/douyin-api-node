const live = require('../api/live');
const LiveMapper = require('../mappers/live');
const {get_wss_url} = require('../utils/sign_v2');

/**
 * 获取网页端直播房间信息
 * @param {string} web_rid - 网页端房间ID
 * @param {string} type - 数据类型，可选'mapper'
 * @returns {Object} 直播房间信息
 */
exports.webLiveRoomValue = async (web_rid, type) => {
  try {
    if (!web_rid) {
      throw new Error('web_rid 参数不能为空');
    }

    const data = await live.getLiveRoom(web_rid);

    if (type === 'mapper') {
      return LiveMapper.webLiveRoomMapper(data);
    }

    if (type === 'wss') {
      const room_id =  LiveMapper.wssUrlMapper(data);
      return {url:get_wss_url(room_id)};
    }

    return data;
  } catch (error) {
    console.error('获取网页端直播房间信息失败:', error);
    throw error;
  }
};

/**
 * 获取移动端直播房间信息
 * @param {string} room_id - 移动端房间ID
 * @param {string} type - 数据类型，可选'mapper'
 * @returns {Object} 直播房间信息
 */
exports.mobileLiveRoomValue = async (room_id, type) => {
  try {
    if (!room_id) {
      throw new Error('room_id 参数不能为空');
    }

    const data = await live.getLiveRoomDetail(room_id);

    if (type === 'mapper') {
      return LiveMapper.mobileLiveRoomMapper(data);
    }

    return data;
  } catch (error) {
    console.error('获取移动端直播房间信息失败:', error);
    throw error;
  }
};
