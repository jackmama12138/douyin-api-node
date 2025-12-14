/**
 * 抖音直播房间数据映射器
 * @param {Object} raw - 抖音直播房间原始数据
 * */
exports.webLiveRoomMapper = (raw)=>{
	const user = raw.data?.user;
	const data = raw.data;
	return {
		anchor_sec_uid: user?.sec_uid,
		anchor_id: user?.id_str,
		anchor_name: user?.nickname,
		anchor_avatar: user?.avatar_thumb?.url_list?.[0],
		anchor_live_status: data?.room_status,
		anchor_live_room_id: data?.enter_room_id,
	}
}

/**
 * 抖音移动端直播房间数据映射器
 * @param {Object} raw - 抖音移动端直播房间原始数据
 * */
exports.mobileLiveRoomMapper = (raw)=>{
    const room = raw.data?.room;
	const anchor = raw.data?.room?.owner;
    return {
        room:{
	        live_title: room?.title, // 直播标题
	        live_create_time: room?.create_time, // 直播创建时间
	        live_finish_time: room?.finish_time, // 直播结束时间
	        live_start_time: room?.start_time, // 直播开始时间
	        live_like_count: room?.like_count, // 直播点赞数
	        live_display_short: room?.room_view_stats?.display_short, //场观人数
	        live_display_value: room?.room_view_stats?.display_value, //场观人数具体值
	        live_total_user: room?.stats?.total_user, //场观人次
	        live_follow_count: room?.stats?.follow_count, //本场直播关注数
	        live_stream_url_map: room?.stream_url?.hls_pull_url_map, //直播流地址对象
        },
	    anchor:{
			anchor_short_id: anchor?.short_id, // 主播短ID
		    anchor_id: anchor?.id_str, // 主播用户ID
		    anchor_name: anchor?.nickname, // 主播昵称
		    anchor_signature: anchor?.signature, // 主播签名
		    anchor_avatar: anchor?.avatar_thumb?.url_list?.[0], // 主播头像URL
		    anchor_display_id: anchor?.display_id, // 主播显示ID
		    anchor_sec_uid: anchor?.sec_uid, // 主播安全用户ID
	    }
    }
}
