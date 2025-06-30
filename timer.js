// 定义目标时间（2025年6月30日）
const targetDate = new Date('2023-08-30T00:00:00');

function updateCountdown() {
    const now = new Date();
    const timeDiff = now - targetDate; // 毫秒数

    // 计算年、天、小时、分钟、秒
    const seconds = Math.floor(timeDiff / 1000) % 60;
    const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) % 365;
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

    // 更新页面显示
    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// 立即执行一次，避免初始延迟
updateCountdown();

// 每秒更新一次
setInterval(updateCountdown, 1000);
