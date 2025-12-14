const rank = require('../api/rank');
const rankMapper = require('../mappers/rank');

/**
 * 获取排行榜列表
 * @param {string} type - 数据类型，可选'mapper'
 * @returns {Array} 排行榜列表
 */
exports.getRankList = async (type) => {
  try {
    let data = await rank.getRankList();

    // ⚠️ 可预期业务失败：第一次可能为空
    if (!data) {
      console.warn('[getRankList] empty response, retrying once...');
      data = await rank.getRankList();
    }

    // 第二次仍然失败 → 降级
    if (!data) {
      // console.error('[getRankList] retry failed');
      return [];
    }

    if (type === 'mapper') {
      return rankMapper.mobileRankListMapper(data);
    }

    return data;
  } catch (error) {
    console.error('获取排行榜列表失败:', error);
    throw error;
  }
};

/**
 * 获取人气榜
 * @param {string} type - 数据类型，可选'mapper'
 * @returns {Object} 人气榜数据
 */
exports.getPopularity = async (type) => {
  try {
    const data = await rank.getWebRankList();

    if (type === 'mapper') {
      return rankMapper.webRankListMapper(data);
    }

    return data;
  } catch (error) {
    console.error('获取人气榜失败:', error);
    throw error;
  }
};

/**
 * 获取创作者排行榜
 * @param {string} type - 数据类型，可选'mapper'
 * @returns {Object} 创作者排行榜数据
 */
exports.getCreatorTop = async (type) => {
  try {
    const data = await rank.getCreatorTop();

    if (type === 'mapper') {
      return rankMapper.creatopRankListMapper(data);
    }

    return data;
  } catch (error) {
    console.error('获取创作者排行榜失败:', error);
    throw error;
  }
};

/**
 * 获取热搜排行榜
 * @param {string} type - 数据类型，可选'mapper'
 * @returns {Object} 热搜排行榜数据
 */
exports.getHotSearchList = async (type) => {
  try {
    const data = await rank.getHotSearchList(type);

    if (type === 'mapper') {
      return rankMapper.hotSearchListMapper(data);
    }

    return data;
  } catch (error) {
    console.error('获取热搜排行榜失败:', error);
    throw error;
  }
};

/**
 * 获取游戏列表
 * @param {string} count - 数量
 * @param {string} offset - 偏移量
 * @param {string} partition - 分区
 * @param {string} partition_type - 分区类型
 * @param {string} type - 数据类型，可选'mapper'
 * @returns {Object} 游戏列表数据
 */
exports.getGameList = async (count, offset, partition, partition_type, type) => {
  try {
    const data = await rank.getGameList(count, offset, partition, partition_type, type);

    if (type === 'mapper') {
      return rankMapper.gameListMapper(data);
    }

    return data;
  } catch (error) {
    console.error('获取游戏列表失败:', error);
    throw error;
  }
};
