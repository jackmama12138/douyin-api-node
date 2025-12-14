exports.webRankListMapper = (raw) => {
	const ranks = raw?.ranks
		return ranks?.map((item) => ({
			fansclub_name: item?.fansclub_name, // 粉丝俱乐部名称
			contributor_text: item?.contributor_text, // 粉丝俱乐部ID
		}))
}

exports.mobileRankListMapper = (raw) => {

		const ranks = raw?.data.ranks

		return ranks?.map((item) => ({
			rank: item?.rank, // 排名
			avatar: item?.user?.avatar_thumb?.url_list?.[0], // 头像
			score: item?.score, // 分数
			nickname: item?.user?.nickname, // 昵称
			user_count: item?.room.user_count, // 用户数量
			display_id: item?.user?.display_id, // 抖音ID
			sec_uid: item?.user?.sec_uid, // 抖音ID
			room_id_str: item?.user?.id_str, // 抖音直播房间ID
		}))
}

exports.creatopRankListMapper = (raw) => {
	const ranks = raw?.elem_list
		return ranks?.map((item) => ({
			nickname: item?.author_info?.name, // 昵称
			score: item?.statistic_info?.hot_value, // 分数
			avatar: item?.base_info?.cover, // 头像
			room_id_str: item?.base_info?.id, // 抖音直播房间ID
			room_title: item?.base_info?.title, // 抖音直播房间标题
		}))
}

exports.hotSearchListMapper = (raw) => {
	const ranks = raw?.elem_list
		return ranks?.map((item) => ({
			hot_title: item?.base_info.title, // 搜索词
			hot_value: item?.statistic_info?.hot_value, // 分数
		}))
}

exports.gameListMapper = (raw) => {
	const data = raw
	const r =  data?.data.map((item) => ({
		title:item?.room?.title, // 抖音直播房间标题
		room_id_str: item?.room?.id_str, // 抖音直播房间ID
		user_count: item?.room?.user_count, // 用户数量
		avatar: item?.room?.owner?.avatar_thumb?.url_list?.[0], // 主播头像
		web_rid:item?.uniq_id, // 抖音主播ID
		aid:item?.room?.owner_user_id, // 抖音主播AID
		game_tag:item?.room?.game_data?.game_tag_info, // 游戏标签
		sec_user_id:item?.room?.owner?.sec_uid, // 抖音主播sec_uid
	}))
	return {
		data:r,
		count:data?.count,
		offset:data?.offset,
	}
}
