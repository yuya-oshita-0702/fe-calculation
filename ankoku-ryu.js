
// 武器データ
const weapons = [
  { name: "なし", power: 0,hit: 0,weight: 0, effective: [], type: "none" },

  // 剣
  { name: "てつのつるぎ", power: 5, hit: 100,weight: 2,crit: 0, effective: [], type: "physical" },
  { name: "はがねのつるぎ", power: 8,hit: 80,weight: 4,crit: 0, effective: [], type: "physical" },
  { name: "ぎんのつるぎ", power: 12,hit: 100,weight: 3,crit: 0, effective: [], type: "physical" },
  { name: "キルソード", power: 8,hit: 100,weight: 2,crit: 20, effective: [], type: "physical" },
  { name: "アーマーキラー", power: 5,hit: 80,weight: 2,crit: 0, effective: ["armor"], type: "physical" },
  { name: "ドラゴンキラー", power: 6,hit: 80,weight: 2,crit: 0, effective: ["dragon","Manakete"], type: "physical" },
  { name: "サンダーソード", power: 7,hit: 90,weight: 2,crit: 0, effective: [], type: "magic" },
  { name: "デビルソード", power: 17,hit: 100,weight: 5,crit: 0, effective: [], type: "physical" },
  { name: "レイピア", power: 5,hit: 100,weight: 1,crit: 10, effective: ["armor", "snight", "Paladin"], type: "physical" },
  { name: "メリクル", power: 18,hit: 100,weight: 1,crit: 10, effective: [], type: "physical" },
  { name: "ファルシオン", power: 10,hit: 100,weight: 3,crit: 0, effective: ["EarthDragon"], type: "physical" },

  // 槍
  { name: "やり", power: 8,hit: 80,weight: 6,crit: 0, effective: [], type: "physical" },
  { name: "ぎんのやり", power: 12,hit: 80,weight: 7,crit: 0, effective: [], type: "physical" },
  { name: "ナイトキラー", power: 5,hit: 90,weight: 5,crit: 0, effective: ["snight"], type: "physical" },
  { name: "てやり", power: 7,hit: 70,weight: 6,crit: 0, effective: [], type: "physical" },
  { name: "グラディウス", power: 20,hit: 100,weight: 4,crit: 0, effective: [], type: "physical" },

  // 斧
  { name: "おの", power: 7,hit: 80,weight: 7,crit: 0, effective: [], type: "physical" },
  { name: "はがねのおの", power: 9,hit: 70,weight: 9,crit: 0, effective: [], type: "physical" },
  { name: "ハンマー", power: 6,hit: 70,weight: 6,crit: 0, effective: ["armor"], type: "physical" },
  { name: "ておの", power: 5,hit: 60,weight: 9,crit: 0, effective: [], type: "physical" },
  { name: "デビルアクス", power: 20,hit: 70,weight: 14,crit: 0, effective: [], type: "physical" },

  // 弓
  { name: "ゆみ", power: 4,hit: 90,weight: 1,crit: 0, effective: ["flying"], type: "physical" },
  { name: "はがねのゆみ", power: 7,hit: 80,weight: 3,crit: 0, effective: ["flying"], type: "physical" },
  { name: "ぎんのゆみ", power: 11,hit: 80,weight: 6,crit: 0, effective: ["flying"], type: "physical" },
  { name: "ボウガン", power: 5,hit: 100,weight: 2,crit: 20, effective: ["flying"], type: "physical" },
  { name: "パルティア", power: 17,hit: 100,weight: 3,crit: 0, effective: ["flying"], type: "physical" },

  //投擲
  { name: "クインクレイン", power: 12,hit: 90,weight: 7,crit: 0, effective: ["flying"], type: "physical" },
  { name: "ストーンヘッジ", power: 15,hit: 50,weight: 13,crit: 0, effective: [], type: "physical" },
  { name: "サンダーボルト", power: 10,hit: 90,weight: 11,crit: 0, effective: ["Ballistician"], type: "physical" },
  { name: "ファイヤーガン", power: 12,hit: 100,weight: 10,crit: 0, effective: [], type: "physical" },
  { name: "エレファント", power: 18,hit: 90,weight: 12,crit: 0, effective: [], type: "physical" },

  // 魔法
  { name: "ファイアー", power: 5,hit: 100,weight: 0,crit: 0, effective: [], type: "magic" },
  { name: "サンダー", power: 6,hit: 90,weight: 1,crit: 0, effective: [], type: "magic" },
  { name: "ブリザー", power: 7,hit: 80,weight: 2,crit: 5, effective: [], type: "magic" },
  { name: "エルファイア", power: 9,hit: 80,weight: 5,crit: 0, effective: [], type: "magic" },
  { name: "ボルガノン", power: 12,hit: 70,weight: 6,crit: 0, effective: [], type: "magic" },
  { name: "トロン", power: 13,hit: 100,weight: 3,crit: 10, effective: [], type: "magic" },
  { name: "ウォーム", power: 16,hit: 70,weight: 9,crit: 0, effective: [], type: "magic" },
  { name: "スターライト", power: 13,hit: 100,weight: 5,crit: 0, effective: [], type: "magic" },
  { name: "エクスカリバー", power: 13,hit: 100,weight: 3,crit: 20, effective: [], type: "magic" },
  { name: "オーラ", power: 20,hit: 90,weight: 7,crit: 0, effective: [], type: "magic" },
  { name: "マフー", power: 14,hit: 70,weight: 9,crit: 0, effective: [], type: "magic" },

  // 竜石
  { name: "かりゅうせき", power: 16,hit: 80,weight: 3,crit: 0, effective: [], type: "physical" },
  { name: "しんりゅうせき", power: 12,hit: 100,weight: 1,crit: 0, effective: ["Manakete"], type: "physical" },
  { name: "まりゅうせき", power: 18,hit: 90,weight: 6,crit: 0, effective: [], type: "physical" },
  { name: "ちりゅうせき", power: 20,hit: 70,weight: 10,crit: 0, effective: [], type: "physical" }
];


// dropdownを作る
const playerWeaponSelect = document.getElementById("playerWeapon");
const enemyWeaponSelect = document.getElementById("enemyWeapon");

weapons.forEach((weapon, index) => {
  const option1 = document.createElement("option");
  option1.value = index;
  option1.textContent = weapon.name;
  playerWeaponSelect.appendChild(option1);

  const option2 = document.createElement("option");
  option2.value = index;
  option2.textContent = weapon.name;
  enemyWeaponSelect.appendChild(option2);
});

// ダメージ計算
function calculateDamage(attack, defense) {
  let damage = attack - defense;
  if (damage < 0) damage = 0;
  return damage;
}


// ボタン処理
document.getElementById("calcBtn").addEventListener("click", () => {
 const attack = parseInt(document.getElementById("attack").value);
 const defense = parseInt(document.getElementById("defense").value);
 const enemyType = document.getElementById("enemyType").value;

 const enemyMap = {
  normal: ["normal"],
  armor: ["armor"],
  snight: ["snight"],
  Paladin: ["Paladin"],
  dragon: ["dragon"],
  flying: ["flying"],
  dragon_flying: ["dragon", "flying"],
  Ballistician: ["Ballistician"],
  Manakete: ["Manakete", "dragon"],
  EarthDragon: ["EarthDragon"]
 };

 const enemyTypes = enemyMap[enemyType];

 const playerWeapon =
   weapons[document.getElementById("playerWeapon").value];

   if (playerWeapon.type === "none") {
  document.getElementById("result").innerHTML = "武器がないため攻撃できません";
  return;
 }

 let totalAttack = attack + playerWeapon.power;

 // 特効
 const isEffective = playerWeapon.effective.some(type =>
   enemyTypes.includes(type)
 );

 if (isEffective) {
   totalAttack = attack + (playerWeapon.power * 3);
 }

 // 通常ダメージ
 const resistance = parseInt(document.getElementById("resistance").value);

 let normalDamage;

 if (playerWeapon.type === "magic") {
   // 魔法
   normalDamage = playerWeapon.power - resistance;
   if (normalDamage < 0) normalDamage = 0;
 } else {
   // 物理
   normalDamage = calculateDamage(totalAttack, defense);
 }

 if (playerWeapon.name === "なし") {
  normalDamage = 0;
 }

 let doubleNormalDamage = normalDamage * 2;

 // 必殺ダメージ
 let criticalDamage = normalDamage * 3;
 let doubleCriticalDamage = criticalDamage * 2;

 //片方必殺ダメージ
 let mixedDamage = normalDamage + criticalDamage;

 console.log("武器:", playerWeapon.name);
 console.log("特効リスト:", playerWeapon.effective);
 console.log("特効か？:", isEffective);
 console.log("敵タイプ:", enemyType);
 console.log("通常:", normalDamage);
 console.log("必殺:", criticalDamage);
 console.log("武器タイプ:", playerWeapon.type);
 console.log("魔防:", resistance);


 document.getElementById("result").innerHTML =
  `
  通常ダメージ: ${normalDamage}<br>
  必殺ダメージ: ${criticalDamage}<br>
  2回攻撃（通常）: ${doubleNormalDamage}<br>
  2回攻撃（片方必殺）: ${mixedDamage}<br>
  2回攻撃（両方必殺）: ${doubleCriticalDamage}
  `;
});

//命中率
function calculateHit() {
  const skill = parseInt(document.getElementById("skill").value);
  const enemySpeed = parseInt(document.getElementById("enemySpeed").value);
  const luck = parseInt(document.getElementById("luck").value);
  const terrain = parseInt(document.getElementById("terrain").value);
  const enemyType = document.getElementById("enemyType").value;

  const playerWeapon =
    weapons[parseInt(document.getElementById("playerWeapon").value)];

  const enemyWeapon =
    weapons[parseInt(document.getElementById("enemyWeapon").value)];

  let avoid;

  let hitRate = 0;

  let effectiveTerrain;

  // ① 自分の命中率
  if (playerWeapon.type === "magic") {
    hitRate = playerWeapon.hit;
  } else {
    hitRate = playerWeapon.hit + skill;
  }

 // 飛行ユニットは地形無効
 if (enemyType === "flying" || enemyType === "dragon_flying") {
   effectiveTerrain = 0;
 } else {
   effectiveTerrain = terrain;
 }

 // 回避計算
 if (playerWeapon.type === "magic") {
  avoid = luck;
 } else {
  avoid = effectiveTerrain + enemySpeed - enemyWeapon.weight;
 }

 // 下限処理
 if (avoid < 0) avoid = 0;

  // ② 実効命中率
  let finalHit = hitRate - avoid;

  // 補正
  if (finalHit < 0) finalHit = 0;
  if (finalHit > 100) finalHit = 100;

  console.log("自分の武器", playerWeapon.name);
  console.log("自分の武器の命中:", playerWeapon.hit);
  console.log("相手の武器:", enemyWeapon.name);
  console.log("相手の武器の重さ:", enemyWeapon.weight);
  console.log("回避:", avoid);
  console.log("技:", skill);
  console.log("最終命中:", finalHit);

  // 表示
  document.getElementById("hitResult").textContent =
    `命中率: ${finalHit}%`;
}

//追撃条件

function checkDouble() {
  const playerSpeed = parseInt(document.getElementById("playerSpeed").value);
  const enemySpeed = parseInt(document.getElementById("enemySpeed").value);

  const playerWeapon =
    weapons[parseInt(document.getElementById("playerWeapon").value)];

  const enemyWeapon =
    weapons[parseInt(document.getElementById("enemyWeapon").value)];

  // 攻速
  const playerAS = Math.max(0, playerSpeed - playerWeapon.weight);
  const enemyAS = Math.max(0, enemySpeed - enemyWeapon.weight);

  let result;

  if (playerWeapon.type === "none") {
  result = "自分は武器なしのため攻撃できない";
 } else {
  // 自分は攻撃可能

  if (enemyWeapon.type === "none") {
    // 敵は反撃不可
    if (playerAS > enemyAS) {
      result = "敵は反撃不可、自分は2回攻撃できる";
    } else {
      result = "敵は反撃不可、自分は1回攻撃";
    }
  } else {
    // 通常の追撃判定
    if (playerAS > enemyAS) {
      result = "自分が2回攻撃できる";
    } else if (enemyAS > playerAS) {
      result = "敵が2回攻撃できる";
    } else {
      result = "どちらも追撃なし";
    }
  }
 }

  console.log("自分AS:", playerAS);
  console.log("敵AS:", enemyAS);

  document.getElementById("doubleResult").textContent =
    `自分の攻速: ${playerAS} / 敵の攻速: ${enemyAS} → ${result}`;
}


//必殺率
function calculateCrit() {
  const skill = parseInt(document.getElementById("skill").value);
  const luck = parseInt(document.getElementById("critLuck").value);
  const playerWeapon =
    weapons[parseInt(document.getElementById("playerWeapon").value)];

  if (playerWeapon.type === "none") {
    critRate = 0;
  } else {
    critRate = Math.floor((skill + luck) / 2) + playerWeapon.crit;
  }

  // 上限下限（安全）
  if (critRate < 0) critRate = 0;
  if (critRate > 100) critRate = 100;

  console.log("技:", skill);
  console.log("運:", luck);
  console.log("武器必殺:", playerWeapon.crit);
  console.log("最終必殺:", critRate);

  document.getElementById("critResult").textContent =
    `必殺率: ${critRate}%`;
}


function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");
}

// 初期表示（超重要）
showTab("damage");

