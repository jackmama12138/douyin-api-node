const {sign} = require('../utils/sign');
const axios = require('axios');
const {UA,CK,TOKEN} = require('../config/index.js');

const douyinFetch = async (options) => {
	const { url, need_ck = true } = options;

	const headers = {
		'User-Agent': UA,
		Referer: 'https://www.douyin.com/',
	};

	if (need_ck) {
		headers['Cookie'] = CK;
	}

	const a_bogus = sign(url.split('?')[1], headers['User-Agent']);

	try {
		const res = await axios({
			method: 'GET',
			url: `${url}&a_bogus=${a_bogus}`,
			headers,
			timeout: 10000,
		});

		return res.data;
	} catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'douyin fetch failed',
			status: err?.response?.status,
			data: err?.response?.data,
		};
	}
};


const fetch = async (options)=>{

	const {method='GET',url} = options

	const headers = {
		'User-Agent': UA
	}


	try {
		return axios({
			method:method,
			url,
			headers
		});
	} catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'fetch failed',
			status: err?.response?.status,
			data: err?.response?.data,
		};
	}
}

const oneDataFetch = async (options)=>{
	const {url,data} = options;

	const headers = {
		'User-Agent': UA
	}

	headers['Token'] = TOKEN;


	try {
		return axios({
			method:'POST',
			url,
			headers,
			data
		})
	}catch (err) {
		// ❗ 保留关键信息
		throw {
			type: 'FETCH_ERROR',
			message: 'oneDataFetch failed',
			status: err?.response?.status,
			data: err?.response?.data,
		};
	}
}

module.exports = {
	douyinFetch,
	fetch,
	oneDataFetch
}