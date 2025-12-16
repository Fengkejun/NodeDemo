// 定义格式化时间函数
function dateFormat(value) { 
    const dt = new Date(value);
    const y = dt.getFullYear();
    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDate());

    const hh = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;

}
// 定义补零函数
function padZero(n) { 
    return n < 10 ? '0' + n : n;
}

module.exports = { 
    dateFormat
}