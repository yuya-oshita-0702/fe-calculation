// js/common/utils.js

function isEmpty(id) {
  const el = document.getElementById(id);
  return !el || el.value.trim() === "";
}

// 値を範囲内に収める
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

// 2RNテーブル生成（FE系）
function generate2RNTable() {
  const counts = Array(100).fill(0);

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const v = Math.floor((i + j) / 2);
      counts[v]++;
    }
  }

  const table = [];
  let sum = 0;

  for (let n = 0; n < 100; n++) {
    sum += counts[n];
    table[n] = sum / 10000;
  }

  return table;
}