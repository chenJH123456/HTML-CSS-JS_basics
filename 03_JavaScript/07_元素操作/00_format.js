//  时间前置0函数
// 传入数据为单个数字
function formatPadLeft(content, count, padStr) {
	count = count || 2;
	padStr = padStr || '0';

	content = String(content);
	return content.padStart(count, padStr);
}
