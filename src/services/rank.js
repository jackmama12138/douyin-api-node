const rank = require('../api/rank');
const rankMapper = require('../mappers/rank');

exports.getRankList = async (type) => {

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
};


exports.getPopularity = async (type)=>{

	const data = await rank.getWebRankList();

	if (type === 'mapper'){
		return rankMapper.webRankListMapper(data);
	}

	return data;
}

exports.getCreatorTop = async (type)=>{

	const data = await rank.getCreatorTop();

	if (type === 'mapper'){
		return rankMapper.creatopRankListMapper(data);
	}

	return data;
}

exports.getHotSearchList = async (type)=>{

	const data = await rank.getHotSearchList(type);

	if (type === 'mapper'){
		return rankMapper.hotSearchListMapper(data);
	}

	return data;
}

exports.getGameList = async (count,offset,partition,partition_type,type)=>{

	const data = await rank.getGameList(count,offset,partition,partition_type,type);

	if (type === 'mapper'){
		return rankMapper.gameListMapper(data);
	}

	return data;
}
