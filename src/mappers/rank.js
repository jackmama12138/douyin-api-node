/**
 * 网页端排行榜数据映射器
 * @param {Object} raw - 原始排行榜数据
 * @returns {Array} 映射后的排行榜数据
 */
exports.webRankListMapper = (raw) => {
  try {
    const ranks = raw?.ranks;
    if (!ranks || !Array.isArray(ranks)) {
      return [];
    }
    return ranks.map((item) => ({
      fansclub_name: item?.fansclub_name || null, // 粉丝俱乐部名称
      contributor_text: item?.contributor_text || null, // 粉丝俱乐部ID
    }));
  } catch (error) {
    console.error('网页端排行榜数据映射失败:', error);
    return [];
  }
};

/**
 * 移动端排行榜数据映射器
 * @param {Object} raw - 原始排行榜数据
 * @returns {Array} 映射后的排行榜数据
 */
exports.mobileRankListMapper = (raw) => {
  try {
    const ranks = raw?.data?.ranks;
    if (!ranks || !Array.isArray(ranks)) {
      return [];
    }
    return ranks.map((item) => ({
      rank: item?.rank || null, // 排名
      avatar: item?.user?.avatar_thumb?.url_list?.[0] || null, // 头像
      score: item?.score || 0, // 分数
      nickname: item?.user?.nickname || null, // 昵称
      user_count: item?.room?.user_count || 0, // 用户数量
      display_id: item?.user?.display_id || null, // 抖音ID
      sec_uid: item?.user?.sec_uid || null, // 抖音安全ID
      room_id_str: item?.user?.id_str || null, // 抖音直播房间ID
    }));
  } catch (error) {
    console.error('移动端排行榜数据映射失败:', error);
    return [];
  }
};

/**
 * 创作者排行榜数据映射器
 * @param {Object} raw - 原始创作者排行榜数据
 * @returns {Array} 映射后的创作者排行榜数据
 */
exports.creatopRankListMapper = (raw) => {
  try {
    const ranks = raw?.elem_list;
    if (!ranks || !Array.isArray(ranks)) {
      return [];
    }
    return ranks.map((item) => ({
      nickname: item?.author_info?.name || null, // 昵称
      score: item?.statistic_info?.hot_value || 0, // 分数
      avatar: item?.base_info?.cover || null, // 头像
      room_id_str: item?.base_info?.id || null, // 抖音直播房间ID
      room_title: item?.base_info?.title || null, // 抖音直播房间标题
    }));
  } catch (error) {
    console.error('创作者排行榜数据映射失败:', error);
    return [];
  }
};

/**
 * 热搜排行榜数据映射器
 * @param {Object} raw - 原始热搜排行榜数据
 * @returns {Array} 映射后的热搜排行榜数据
 */
exports.hotSearchListMapper = (raw) => {
  try {
    const ranks = raw?.elem_list;
    if (!ranks || !Array.isArray(ranks)) {
      return [];
    }
    return ranks.map((item) => ({
      hot_title: item?.base_info?.title || null, // 搜索词
      hot_value: item?.statistic_info?.hot_value || 0, // 分数
    }));
  } catch (error) {
    console.error('热搜排行榜数据映射失败:', error);
    return [];
  }
};

/**
 * 游戏列表数据映射器
 * @param {Object} raw - 原始游戏列表数据
 * @returns {Object} 映射后的游戏列表数据
 */
exports.gameListMapper = (raw) => {
  try {
    const data = raw;
    if (!data?.data || !Array.isArray(data.data)) {
      return {
        data: [],
        count: 0,
        offset: 0,
      };
    }
    const mappedData = data.data.map((item) => ({
      title: item?.room?.title || null, // 抖音直播房间标题
      room_id_str: item?.room?.id_str || null, // 抖音直播房间ID
      user_count: item?.room?.user_count || 0, // 用户数量
      avatar: item?.room?.owner?.avatar_thumb?.url_list?.[0] || null, // 主播头像
      web_rid: item?.uniq_id || null, // 抖音主播ID
      aid: item?.room?.owner_user_id || null, // 抖音主播AID
      game_tag: item?.room?.game_data?.game_tag_info || null, // 游戏标签
      sec_user_id: item?.room?.owner?.sec_uid || null, // 抖音主播安全ID
    }));
    return {
      data: mappedData,
      count: data?.count || 0,
      offset: data?.offset || 0,
    };
  } catch (error) {
    console.error('游戏列表数据映射失败:', error);
    return {
      data: [],
      count: 0,
      offset: 0,
    };
  }
};
