const anchor = require('../api/anchor');
const AnchorMapper = require('../mappers/anchor');

/**
 * 搜索主播信息
 * @param {string} name - 主播名称
 * @returns {Object} 主播信息
 */
exports.searchAnchor = async (name) => {
  try {
    if (!name) {
      throw new Error('name 参数不能为空');
    }
    const data = await anchor.seachAnchor(name);
    return data;
  } catch (error) {
    console.error('搜索主播信息失败:', error);
    throw error;
  }
};

/**
 * 获取主播直播历史
 * @param {string} aid - 主播ID
 * @returns {Object} 主播直播历史
 */
exports.historyLive = async (aid) => {
  try {
    if (!aid) {
      throw new Error('aid 参数不能为空');
    }
    const data = await anchor.historyLive(aid);
    return data;
  } catch (error) {
    console.error('获取主播直播历史失败:', error);
    throw error;
  }
};

/**
 * 获取主播个人资料
 * @param {string} sec_user_id - 主播安全ID
 * @param {string} type - 数据类型，可选'mapper'
 * @returns {Object} 主播个人资料
 */
exports.anchorProfile = async (sec_user_id, type) => {
  try {
    if (!sec_user_id) {
      throw new Error('sec_user_id 参数不能为空');
    }

    const data = await anchor.anchorProfile(sec_user_id);

    if (type === 'mapper') {
      return AnchorMapper.profileMapper(data);
    }

    return data;
  } catch (error) {
    console.error('获取主播个人资料失败:', error);
    throw error;
  }
};
