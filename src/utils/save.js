const fs = require('fs');
const path = require('path');

/**
 * 写文件工具函数
 * @param {string} dir - 目录路径，如 './logs'
 * @param {string} filename - 文件名，如 'app.log'
 * @param {string|object} content - 内容，可以是字符串或 JSON
 * @param {boolean} append - 是否追加写入（默认 false = 覆盖）
 */
function writeFile(dir, filename, content, append = false) {
	try {
		// 自动创建目录
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}

		const filePath = path.join(dir, filename);

		// JSON 转字符串
		if (typeof content === 'object') {
			content = JSON.stringify(content, null, 2);
		}

		// 写入方式：覆盖或追加
		if (append) {
			fs.appendFileSync(filePath, content + '\n', 'utf8');
		} else {
			fs.writeFileSync(filePath, content, 'utf8');
		}

		return true;
	} catch (err) {
		console.error("写入文件失败:", err);
		return false;
	}
}

module.exports = { writeFile };
