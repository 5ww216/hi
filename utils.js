// 工具函数模块
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function calculateSum(a, b) {
    return a + b;
}

module.exports = { formatDate, calculateSum };
