/**
 * 抖音直播房间数据映射器
 * @param {Object} raw - 抖音直播房间原始数据
 * @returns {Object} 映射后的直播房间数据
 */
exports.webLiveRoomMapper = (raw) => {
  try {
    if (!raw || !raw.data) {
      return {
        anchor_sec_uid: null,
        anchor_id: null,
        anchor_name: null,
        anchor_avatar: null,
        anchor_live_status: null,
        anchor_live_room_id: null,
      };
    }

    const user = raw.data.user;
    const data = raw.data;
    return {
      anchor_sec_uid: user?.sec_uid || null,
      anchor_id: user?.id_str || null,
      anchor_name: user?.nickname || null,
      anchor_avatar: user?.avatar_thumb?.url_list?.[0] || null,
      anchor_live_status: data?.room_status || null,
      anchor_live_room_id: data?.enter_room_id || null,
    };
  } catch (error) {
    console.error('网页端直播房间数据映射失败:', error);
    return {
      anchor_sec_uid: null,
      anchor_id: null,
      anchor_name: null,
      anchor_avatar: null,
      anchor_live_status: null,
      anchor_live_room_id: null,
    };
  }
};

/**
 * 抖音移动端直播房间数据映射器
 * @param {Object} raw - 抖音移动端直播房间原始数据
 * @returns {Object} 映射后的移动端直播房间数据
 */
exports.mobileLiveRoomMapper = (raw) => {
  try {
    if (!raw || !raw.data || !raw.data.room) {
      return {
        room: {
          live_title: null,
          live_create_time: null,
          live_finish_time: null,
          live_start_time: null,
          live_like_count: null,
          live_display_short: null,
          live_display_value: null,
          live_total_user: null,
          live_follow_count: null,
          live_stream_url_map: null,
        },
        anchor: {
          anchor_short_id: null,
          anchor_id: null,
          anchor_name: null,
          anchor_signature: null,
          anchor_avatar: null,
          anchor_display_id: null,
          anchor_sec_uid: null,
        },
      };
    }

    const room = raw.data.room;
    const anchor = raw.data.room.owner;
    return {
      room: {
        live_title: room?.title || null, // 直播标题
        live_create_time: room?.create_time || null, // 直播创建时间
        live_finish_time: room?.finish_time || null, // 直播结束时间
        live_start_time: room?.start_time || null, // 直播开始时间
        live_like_count: room?.like_count || 0, // 直播点赞数
        live_display_short: room?.room_view_stats?.display_short || null, // 场观人数
        live_display_value: room?.room_view_stats?.display_value || 0, // 场观人数具体值
        live_total_user: room?.stats?.total_user || 0, // 场观人次
        live_follow_count: room?.stats?.follow_count || 0, // 本场直播关注数
        live_stream_url_map: room?.stream_url?.hls_pull_url_map || null, // 直播流地址对象
        live_user_count: room?.user_count || 0, // 直播观众数
      },
      anchor: {
        anchor_short_id: anchor?.short_id || null, // 主播短ID
        anchor_id: anchor?.id_str || null, // 主播用户ID
        anchor_name: anchor?.nickname || null, // 主播昵称
        anchor_signature: anchor?.signature || null, // 主播签名
        anchor_avatar: anchor?.avatar_thumb?.url_list?.[0] || null, // 主播头像URL
        anchor_display_id: anchor?.display_id || null, // 主播显示ID
        anchor_sec_uid: anchor?.sec_uid || null, // 主播安全用户ID
      },
    };
  } catch (error) {
    console.error('移动端直播房间数据映射失败:', error);
    return {
      room: {
        live_title: null,
        live_create_time: null,
        live_finish_time: null,
        live_start_time: null,
        live_like_count: null,
        live_display_short: null,
        live_display_value: null,
        live_total_user: null,
        live_follow_count: null,
        live_stream_url_map: null,
      },
      anchor: {
        anchor_short_id: null,
        anchor_id: null,
        anchor_name: null,
        anchor_signature: null,
        anchor_avatar: null,
        anchor_display_id: null,
        anchor_sec_uid: null,
      },
    };
  }
};

exports.wssUrlMapper = (raw) => {
  try {
    if (!raw || !raw.data) {
      return null;
    }
    return raw.data.enter_room_id;
  } catch (error) {
    console.error('WSS URL 映射失败:', error);
    return null;
  }
};
