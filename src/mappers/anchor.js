/**
 * 主播个人资料数据映射器
 * @param {Object} raw - 原始主播个人资料数据
 * @returns {Object} 映射后的主播个人资料数据
 */
exports.profileMapper = (raw) => {
  try {
    if (!raw || !raw.user) {
      return {
        anchor_follower_count: 0, // 关注者数量
        anchor_following_count: 0, // 关注的用户数量
        anchor_max_follower_count: 0, // 最大关注者数量
        anchor_nickname: null, // 昵称
        anchor_mplatform_followers_count: 0, // 移动端关注者数量
        anchor_live_status: null, // 直播状态
        anchor_signature: null, // 签名
        anchor_total_favorited: 0, // 总点赞数
        anchor_unique_id: null, // 抖音唯一ID
        anchor_uid: null, // 用户ID
        anchor_room_id_str: null, // 直播间ID
        anchor_avatar: null, // 头像
      };
    }

    const user = raw.user;
    return {
      anchor_follower_count: user?.follower_count || 0, // 关注者数量
      anchor_following_count: user?.following_count || 0, // 关注的用户数量
      anchor_max_follower_count: user?.max_follower_count || 0, // 最大关注者数量
      anchor_nickname: user?.nickname || null, // 昵称
      anchor_mplatform_followers_count: user?.mplatform_followers_count || 0, // 移动端关注者数量
      anchor_live_status: user?.live_status || null, // 直播状态
      anchor_signature: user?.signature || null, // 签名
      anchor_total_favorited: user?.total_favorited || 0, // 总点赞数
      anchor_unique_id: user?.unique_id || null, // 抖音唯一ID
      anchor_uid: user?.uid || null, // 用户ID
      anchor_room_id_str: user?.room_id_str || null, // 直播间ID
      anchor_avatar: user?.avatar_thumb?.url_list?.[0] || null, // 头像
    };
  } catch (error) {
    console.error('主播个人资料数据映射失败:', error);
    return {
      anchor_follower_count: 0,
      anchor_following_count: 0,
      anchor_max_follower_count: 0,
      anchor_nickname: null,
      anchor_mplatform_followers_count: 0,
      anchor_live_status: null,
      anchor_signature: null,
      anchor_total_favorited: 0,
      anchor_unique_id: null,
      anchor_uid: null,
      anchor_room_id_str: null,
      anchor_avatar: null,
    };
  }
};