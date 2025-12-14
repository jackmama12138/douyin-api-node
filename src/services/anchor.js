const anchor = require('../api/anchor');
const AnchorMapper = require('../mappers/anchor');

exports.seachAnchor = async (name)=>{
	const data = await anchor.seachAnchor(name);
	return data;
}

exports.historyLive = async (aid)=>{
	const data = await anchor.historyLive(aid);
	return data;
}

exports.anchorProfile = async (sec_user_id,type)=>{

	const data = await anchor.anchorProfile(sec_user_id);

    if (type === 'mapper'){
	    return AnchorMapper.profileMapper(data);
    }

	return data;
}
