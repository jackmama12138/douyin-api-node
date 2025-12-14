exports.profileMapper = (raw) => {
	const user = raw.user;
	return {
		anchor_follower_count: user?.follower_count, // 关注者数量
		anchor_following_count: user?.following_count, // 关注的用户数量
		anchor_max_follower_count: user?.max_follower_count, // 最大关注者数量
		anchor_nickname: user?.nickname, // 昵称
		anchor_mplatform_followers_count: user?.mplatform_followers_count, // 移动端关注者数量
		anchor_live_status: user?.live_status, // 直播状态
		anchor_signature: user?.signature, // 签名
		anchor_total_favorited: user?.total_favorited, // 总点赞数
		anchor_unique_id: user?.unique_id, // 抖音唯一ID
		anchor_uid: user?.uid, // 用户ID
		anchor_room_id_str: user?.room_id_str, // 直播间ID
		anchor_avatar: user?.avatar_thumb?.url_list?.[0], // 头像
	}
}