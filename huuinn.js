
// 武器データ
const weapons = [
  { name: "なし", power: 0,hit: 0,weight: 0,  crit: 0, effective: [], type: "none", weaponType: null },

  // 剣

  { name: "てつの剣", power: 5, hit: 85, weight: 5, crit: 0, type: "physical", weaponType: "sword", effective: [] },
  { name: "ほそみの剣", power: 3, hit: 95, weight: 2, crit: 5, type: "physical", weaponType: "sword", effective: [] },
  { name: "レイピア", power: 5, hit: 95, weight: 5, crit: 10, type: "physical", weaponType: "sword", effective: ["armored", "mounted"] },
  { name: "はがねの剣", power: 8, hit: 70, weight: 10, crit: 0, type: "physical", weaponType: "sword", effective: [] },
  { name: "てつの大剣", power: 9, hit: 65, weight: 12, crit: 0, type: "physical", weaponType: "sword", effective: [] },
  { name: "どくの剣", power: 3, hit: 70, weight: 6, crit: 0, type: "physical", weaponType: "sword", effective: [] },
  { name: "アルの剣", power: 7, hit: 75, weight: 7, crit: 0, type: "physical", weaponType: "sword", effective: [] },
  { name: "倭刀", power: 8, hit: 75, weight: 5, crit: 40, type: "physical", weaponType: "sword", effective: [] },
  { name: "アーマーキラー", power: 8, hit: 85, weight: 11, crit: 0, type: "physical", weaponType: "sword", effective: ["armored"] },
  { name: "はがねの大剣", power: 11, hit: 60, weight: 14, crit: 0, type: "physical", weaponType: "sword", effective: [] },
  { name: "キルソード", power: 9, hit: 80, weight: 7, crit: 30, type: "physical", weaponType: "sword", effective: [] },
  { name: "ドラゴンキラー", power: 10, hit: 70, weight: 5, crit: 0, type: "physical", weaponType: "sword", effective: ["dragon", "Manakete"] },
  // 三すくみ補正用（槍に強い）
  { name: "ランスバスター", power: 9, hit: 80, weight: 9, crit: 5, type: "physical", weaponType: "sword", effective: [], special: "anti-lance" },
  // 魔法剣
  { name: "ひかりの剣", power: 9, hit: 70, weight: 9, crit: 0, type: "physical", weaponType: "sword", effective: [], special: "range-magic" },
  { name: "ゆうしゃの剣", power: 9, hit: 80, weight: 12, crit: 0, type: "physical", weaponType: "sword", effective: [], special: "brave" },
  { name: "ぎんの剣", power: 13, hit: 75, weight: 8, crit: 0, type: "physical", weaponType: "sword", effective: [] },
  { name: "ぎんの大剣", power: 14, hit: 55, weight: 13, crit: 0, type: "physical", weaponType: "sword", effective: [] },
  { name: "ルーンソード", power: 12, hit: 60, weight: 11, crit: 0, type: "magic", weaponType: "sword", effective: [], special: "magic" },
  { name: "デュランダル", power: 17, hit: 90, weight: 12, crit: 0, type: "physical", weaponType: "sword", effective: ["dragon", "Manakete"], special: "str+5" },
  { name: "エッケザックス", power: 15, hit: 90, weight: 15, crit: 5, type: "physical", weaponType: "sword", effective: [] },
  { name: "封印の剣", power: 18, hit: 95, weight: 8, crit: 10, type: "physical", weaponType: "sword", effective: ["DemonDragon", "Manakete"], special: "defRes+5" },


  // 槍

  { name: "てつのやり", power: 7, hit: 70, weight: 8, crit: 0, type: "physical", weaponType: "lance", effective: [] },
  { name: "ほそみのやり", power: 4, hit: 80, weight: 4, crit: 5, type: "physical", weaponType: "lance", effective: [] },
  { name: "てやり", power: 6, hit: 55, weight: 11, crit: 0, type: "physical", weaponType: "lance", effective: [], range: "1-2" },
  { name: "はがねのやり", power: 10, hit: 55, weight: 13, crit: 0, type: "physical", weaponType: "lance", effective: [] },
  { name: "ガントのやり", power: 9, hit: 65, weight: 10, crit: 0, type: "physical", weaponType: "lance", effective: [] },
  { name: "ナイトキラー", power: 11, hit: 75, weight: 13, crit: 0, type: "physical", weaponType: "lance", effective: ["mounted"] },
  { name: "キラーランス", power: 10, hit: 75, weight: 9, crit: 30, type: "physical", weaponType: "lance", effective: [] },
  // 三すくみ拡張（斧に強い）
  { name: "アクスバスター", power: 10, hit: 75, weight: 11, crit: 0, type: "physical", weaponType: "lance", effective: [], special: "anti-axe" },
  { name: "ゆうしゃのやり", power: 14, hit: 70, weight: 14, crit: 0, type: "physical", weaponType: "lance", effective: [], special: "brave" },
  { name: "スレンドスピア", power: 10, hit: 65, weight: 10, crit: 5, type: "physical", weaponType: "lance", effective: [], range: "1-2" },
  { name: "ぎんのやり", power: 14, hit: 65, weight: 10, crit: 0, type: "physical", weaponType: "lance", effective: [] },
  // 伝説
  { name: "マルテ", power: 16, hit: 80, weight: 11, crit: 0, type: "physical", weaponType: "lance", effective: ["dragon", "Manakete"], special: "skill+5" },


  // 斧
  
  { name: "てつのおの", power: 8, hit: 65, weight: 10, crit: 0, type: "physical", weaponType: "axe", effective: [] },
  { name: "はがねのおの", power: 11, hit: 50, weight: 15, crit: 0, type: "physical", weaponType: "axe", effective: [] },
  { name: "ておの", power: 7, hit: 50, weight: 12, crit: 0, type: "physical", weaponType: "axe", effective: [], range: "1-2" },
  { name: "デビルアクス", power: 18, hit: 55, weight: 18, crit: 0, type: "physical", weaponType: "axe", effective: [], special: "devil" },
  { name: "どくのおの", power: 4, hit: 50, weight: 10, crit: 0, type: "physical", weaponType: "axe", effective: [] },
  { name: "ハンマー", power: 8, hit: 45, weight: 15, crit: 0, type: "physical", weaponType: "axe", effective: ["armored"] },
  { name: "ポールアクス", power: 10, hit: 55, weight: 15, crit: 0, type: "physical", weaponType: "axe", effective: ["mounted"] },
  { name: "キラーアクス", power: 11, hit: 65, weight: 11, crit: 30, type: "physical", weaponType: "axe", effective: [] },
  // 三すくみ拡張（剣に強い）
  { name: "ソードバスター", power: 11, hit: 60, weight: 13, crit: 0, type: "physical", weaponType: "axe", effective: [], special: "anti-sword" },
  { name: "ゆうしゃのおの", power: 10, hit: 55, weight: 16, crit: 0, type: "physical", weaponType: "axe", effective: [], special: "brave" },
  { name: "ぎんのおの", power: 15, hit: 55, weight: 12, crit: 0, type: "physical", weaponType: "axe", effective: [] },
  { name: "トマホーク", power: 13, hit: 55, weight: 14, crit: 0, type: "physical", weaponType: "axe", effective: [], range: "1-2" },
  // 伝説
  { name: "アルマーズ", power: 18, hit: 75, weight: 13, crit: 0, type: "physical", weaponType: "axe", effective: ["dragon", "Manakete"], special: "def+5" },


  // 弓

  { name: "てつの弓", power: 6, hit: 80, weight: 5, crit: 0, type: "physical", weaponType: "bow", effective: ["flying"], range: "2" },
  { name: "はがねの弓", power: 9, hit: 65, weight: 9, crit: 0, type: "physical", weaponType: "bow", effective: ["flying"], range: "2" },
  { name: "短弓", power: 5, hit: 80, weight: 3, crit: 10, type: "physical", weaponType: "bow", effective: ["flying"], range: "2" },
  { name: "長弓", power: 5, hit: 55, weight: 10, crit: 0, type: "physical", weaponType: "bow", effective: ["flying"], range: "2-3" },
  { name: "キラーボウ", power: 9, hit: 80, weight: 7, crit: 30, type: "physical", weaponType: "bow", effective: ["flying"], range: "2" },
  { name: "ゆうしゃの弓", power: 10, hit: 75, weight: 12, crit: 0, type: "physical", weaponType: "bow", effective: ["flying"], range: "2", special: "brave" },
  { name: "ぎんの弓", power: 13, hit: 70, weight: 6, crit: 0, type: "physical", weaponType: "bow", effective: ["flying"], range: "2" },
  // 伝説
  { name: "ミュルグレ", power: 16, hit: 80, weight: 9, crit: 0, type: "physical", weaponType: "bow", effective: ["dragon", "Manakete"], range: "2", special: "spd+5" },

  //アーチ
  
  { name: "アーチ", power: 8, hit: 70, weight: 20, crit: 0, type: "physical", weaponType: "ballista", effective: ["flying"], range: "3-10" },
  { name: "キラーアーチ", power: 12, hit: 65, weight: 20, crit: 10, type: "physical", weaponType: "ballista", effective: ["flying"], range: "3-10" },
  { name: "ロングアーチ", power: 13, hit: 60, weight: 20, crit: 0, type: "physical", weaponType: "ballista", effective: ["flying"], range: "3-15" },


  // 魔法

  // 理

  { name: "ファイアー", power: 5, hit: 95, weight: 1, crit: 0, type: "magic", weaponType: "anima", effective: [], range: "1-2" },
  { name: "サンダー", power: 6, hit: 80, weight: 2, crit: 5, type: "magic", weaponType: "anima", effective: [], range: "1-2" },
  { name: "エルファイアー", power: 8, hit: 75, weight: 4, crit: 0, type: "magic", weaponType: "anima", effective: [], range: "1-2" },
  { name: "エイルカリバー", power: 8, hit: 85, weight: 2, crit: 0, type: "magic", weaponType: "anima", effective: ["flying"], range: "1-2" },
  { name: "フィンブル", power: 13, hit: 80, weight: 8, crit: 0, type: "magic", weaponType: "anima", effective: [], range: "1-2" },
  { name: "サンダーストーム", power: 12, hit: 70, weight: 10, crit: 0, type: "magic", weaponType: "anima", effective: [], range: "3-10" },
  // 伝説
  { name: "フォルブレイズ", power: 14, hit: 85, weight: 5, crit: 0, type: "magic", weaponType: "anima", effective: ["dragon", "Manakete"], range: "1-2", special: "luck+5" },

  // 光

  { name: "ライトニング", power: 5, hit: 75, weight: 1, crit: 0, type: "magic", weaponType: "light", effective: [], range: "1-2" },
  { name: "ディヴァイン", power: 8, hit: 65, weight: 3, crit: 0, type: "magic", weaponType: "light", effective: [], range: "1-2" },
  { name: "パージ", power: 10, hit: 70, weight: 8, crit: 0, type: "magic", weaponType: "light", effective: [], range: "3-10" },
  // 伝説
  { name: "アーリアル", power: 15, hit: 90, weight: 9, crit: 5, type: "magic", weaponType: "light", effective: ["dragon", "Manakete"], range: "1-2", special: "res+5" },

  // 闇

  { name: "ミィル", power: 8, hit: 70, weight: 5, crit: 0, type: "magic", weaponType: "dark", effective: [], range: "1-2" },
  { name: "リザイア", power: 10, hit: 70, weight: 6, crit: 0, type: "magic", weaponType: "dark", effective: [], range: "1-2", special: "drain" },
  // 特殊（HP1にする）
  { name: "イクリプス", power: 0, hit: 10, weight: 9, crit: 0, type: "magic", weaponType: "dark", effective: [], range: "3-10", special: "hp1" },
  { name: "ノスフェラート", power: 15, hit: 65, weight: 13, crit: 0, type: "magic", weaponType: "dark", effective: [], range: "1-2", special: "drain" },
  // 伝説
  { name: "アポカリプス", power: 18, hit: 80, weight: 12, crit: 5, type: "magic", weaponType: "dark", effective: ["dragon", "Manakete"], range: "1-2", special: "mag+5" },


  // 竜石
   
  { name: "火竜石", power: 15, hit: 100, weight: 0, crit: 5, type: "physical", weaponType: "dragonstone", effective: [], special: "dragonBuff_enemy" },
  { name: "神竜石", power: 16, hit: 100, weight: 0, crit: 15, type: "physical", weaponType: "dragonstone", effective: ["DemonDragon", "Manakete"], special: "dragonBuff_fae" },
  { name: "魔竜石", power: 20, hit: 100, weight: 0, crit: 10, type: "physical", weaponType: "dragonstone", effective: [], special: "dragonBuff_enemy" },

  // ブレス
  { name: "闇のブレス", power: 20, hit: 100, weight: 0, crit: 10, type: "physical", weaponType: "breath", effective: [], special: "dragonBreath" }
  
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

  //戦闘時タイプ
function getEffectiveWeaponType(playerWeapon, enemyWeapon, isPlayer, attackRange) {
  const weapon = isPlayer ? playerWeapon : enemyWeapon;

  if (!weapon || weapon.type === "none") return null;

  const isRanged = attackRange > 1;

  // 光の剣（両方対応）
  if (weapon.name === "ひかりの剣") {
    return isRanged ? "light" : "sword";
  }

  // ルーンソード
  if (weapon.name === "ルーンソード") {
    return "dark";
  }

  return weapon.weaponType || null;
}


  //魔法判定
function isMagicAttack(playerWeapon, enemyWeapon, isPlayer, attackRange) {
  const weapon = isPlayer ? playerWeapon : enemyWeapon;

  if (!weapon || weapon.type === "none") return false;

  const isRanged = attackRange > 1;

  // 光の剣（遠距離）
  if (weapon.name === "ひかりの剣") {
    if (isPlayer && isRanged) return true;
    return false;
  }

  // ルーンソード
  if (weapon.name === "ルーンソード") {
    return true;
  }

  // 通常魔法
  if (weapon.type === "magic") return true;

  return false;
}



  // 射程
function canAttack(weapon, range) {
  if (!weapon || weapon.type === "none") return false;

  // 光の剣
  if (weapon.name === "ひかりの剣") {
    return range === 1 || range === 2;
  }

  if (!weapon.range) return range === 1;

  if (weapon.range === "1-2") return range === 1 || range === 2;
  if (weapon.range === "2") return range === 2;
  if (weapon.range === "2-3") return range >= 2 && range <= 3;
  if (weapon.range === "3-10") return range >= 3 && range <= 10;

  return false;
}




// 三すくみ
function getWeaponAdvantage(attackerType, defenderType) {


  const playerWeapon =
    weapons[parseInt(document.getElementById("playerWeapon").value)];
  
  const enemyWeapon =
    weapons[parseInt(document.getElementById("enemyWeapon").value)];

  let weaponTriangle = 0;


 

  if (!attackerType || !defenderType) weaponTriangle = 0;

  // 物理

  if (
    (attackerType === "sword" && defenderType === "axe") ||
    (attackerType === "axe" && defenderType === "lance") ||
    (attackerType === "lance" && defenderType === "sword")
  ) {
    weaponTriangle = 1;
  }

  if (
    (attackerType === "axe" && defenderType === "sword") ||
    (attackerType === "lance" && defenderType === "axe") ||
    (attackerType === "sword" && defenderType === "lance")
  ) {
    weaponTriangle = -1;
  }
 //　バスター系
  if (
    (playerWeapon.special === "anti-lance" && defenderType === "lance") ||
    (playerWeapon.special === "anti-axe" && defenderType === "axe") ||
    (playerWeapon.special === "anti-sword" && defenderType === "sword")
   ) {
    weaponTriangle = 1;
  }

  if (
    (playerWeapon.special === "anti-lance" && defenderType === "axe") ||
    (playerWeapon.special === "anti-axe" && defenderType === "sword") ||
    (playerWeapon.special === "anti-sword" && defenderType === "lance")
   ) {
    weaponTriangle = -1;
  }

//　バスター系同士
  if (
    (playerWeapon.special === "anti-lance" && enemyWeapon.special === "anti-sword") ||
    (playerWeapon.special === "anti-axe" && enemyWeapon.special === "anti-lance") ||
    (playerWeapon.special === "anti-sword" && enemyWeapon.special === "anti-axe")
   ) {
    weaponTriangle = 1;
  }

  if (
    (playerWeapon.special === "anti-lance" && enemyWeapon.special === "anti-axe") ||
    (playerWeapon.special === "anti-axe" && enemyWeapon.special === "anti-sword") ||
    (playerWeapon.special === "anti-sword" && enemyWeapon.special === "anti-lance")
   ) {
    weaponTriangle = -1;
  }

  // 魔法
  if (
    (attackerType === "anima" && defenderType === "light") ||
    (attackerType === "light" && defenderType === "dark") ||
    (attackerType === "dark" && defenderType === "anima")
  ) {
    weaponTriangle = 1;
  }

  if (
    (attackerType === "light" && defenderType === "anima") ||
    (attackerType === "dark" && defenderType === "light") ||
    (attackerType === "anima" && defenderType === "dark")
  ) {
    weaponTriangle = -1;
  }

  return weaponTriangle;
}



// ボタン処理
document.getElementById("calcBtn").addEventListener("click", () => {
  calculateDamageFE6();
  calculateCrit();
});



// ダメージ計算
function calculateDamageFE6() {

  const strength = parseInt(document.getElementById("attack").value);
  const magic = parseInt(document.getElementById("magic").value);
  const defense = parseInt(document.getElementById("defense").value);
  const resistance = parseInt(document.getElementById("resistance").value);


  const playerWeapon =
    weapons[parseInt(document.getElementById("playerWeapon").value)];

  const enemyWeapon =
    weapons[parseInt(document.getElementById("enemyWeapon").value)];

    if (playerWeapon.type === "none") {
  document.getElementById("result").innerHTML = "武器がないため攻撃できません";
  return;
 }
  
  const attackRange = parseInt(document.getElementById("attackRange").value);

  const myType = getEffectiveWeaponType(playerWeapon, enemyWeapon, true, attackRange);
  const eneType = getEffectiveWeaponType(playerWeapon, enemyWeapon, false, attackRange);

// 三すくみ
  const weaponTriangle = getWeaponAdvantage(myType, eneType);

  if (!canAttack(playerWeapon, attackRange)) {
    document.getElementById("result").innerHTML = "射程外で攻撃できません";
    return;
  }

  const enemyType = document.getElementById("enemyType").value;

  const enemyMap = {
  normal: ["normal"],
  armored: ["armored"],
  mounted: ["mounted"],
  flying: ["flying"],
  dragon_flying: ["dragon", "flying"],
  Manakete: ["Manakete"],
  DemonDragon: ["DemonDragon"]
 };

 const enemyTypes = enemyMap[enemyType];

  // 仮（あとでUI化できる）
  const support = 0;
  const terrain = 0;

  // 攻撃力
  let weaponPower = playerWeapon.power;
  let triangleBonus = weaponTriangle;


  // 特効判定
 const isEffective = playerWeapon.effective.some(type =>
   enemyTypes.includes(type)
 );

 if (isEffective) {
    weaponPower *= 3;
    triangleBonus *= 3;
 }

  const magicFlag = isMagicAttack(playerWeapon, enemyWeapon, true, attackRange);

  let attackStat;
  let defensePower;

  if (magicFlag) {
    attackStat = magic;
    defensePower = resistance + support + terrain;
  } else {
    attackStat = strength;
    defensePower = defense + support + terrain;
  }

  const attackPower =
  attackStat + weaponPower + triangleBonus + support;

  // ダメージ
  let normalDamage = attackPower - defensePower;

  if (normalDamage < 0) normalDamage = 0;


  if (playerWeapon.name === "なし") {
    normalDamage = 0;
  }

  if (playerWeapon.name === "ひかりの剣" && attackRange > 1) {
    normalDamage = 10;
  }

 // 必殺ダメージ
 let criticalDamage = normalDamage * 3;


  console.log("武器:", playerWeapon.name);
  console.log("特効リスト:", playerWeapon.effective);
  console.log("特効か？:", isEffective);
  console.log("敵タイプ:", enemyType);
  console.log("通常:", normalDamage);
  console.log("必殺:", criticalDamage);
  console.log("武器タイプ:", playerWeapon.type);
  console.log("魔防:", resistance);


  let resultText = `
  通常ダメージ: ${normalDamage}ダメージ<br>
  必殺ダメージ: ${criticalDamage}ダメージ<br><br>
  `;

  // 基本（2回攻撃）
  resultText += `
  2回攻撃（必殺なし）: ${normalDamage * 2}ダメージ<br>
  2回攻撃（片方必殺）: ${normalDamage + criticalDamage}ダメージ<br>
  2回攻撃（両方必殺）: ${criticalDamage * 2}ダメージ<br>
  `;

  // 例外を追加していく
  if (playerWeapon.special?.includes("brave"))  {
    resultText += `
  4回攻撃（必殺なし）: ${normalDamage * 4}ダメージ<br>
  4回攻撃（1回必殺）: ${normalDamage * 3 + criticalDamage}ダメージ<br>
  4回攻撃（2回必殺）: ${normalDamage * 2 + criticalDamage * 2}<br>
  4回攻撃（3回必殺）: ${normalDamage + criticalDamage * 3}ダメージ<br>
  4回攻撃（4回必殺）: ${criticalDamage * 4}ダメージ<br>
  `;
  }

  // 例外を追加していく
  if (playerWeapon.name === "ルーンソード") {
    resultText += `
    その後与えたダメージ量だけ自分が回復
    `;
  }

  // 表示
  document.getElementById("result").innerHTML = resultText;
  
}



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
  const Constitution = parseInt(document.getElementById("Constitution").value);
  const enemyConstitution = parseInt(document.getElementById("enemyConstitution").value);

  const playerWeapon =
    weapons[parseInt(document.getElementById("playerWeapon").value)];

  const enemyWeapon =
    weapons[parseInt(document.getElementById("enemyWeapon").value)];

  const playerWt = Math.max(0, playerWeapon.weight - Constitution);
  const enemyWt = Math.max(0, enemyWeapon.weight - enemyConstitution);

  
  // 攻速
  const playerAS = Math.max(0, playerSpeed - playerWt);
  const enemyAS = Math.max(0, enemySpeed - enemyWt);

  // 距離
  const attackRange = parseInt(document.getElementById("attackRange").value);
  const canPlayerAttack = canAttack(playerWeapon, attackRange);
  const canEnemyAttack = canAttack(enemyWeapon, attackRange);

  let result;

  if (playerWeapon.type === "none") {
    result = "自分は武器なしのため攻撃できない";
  } else if(!canPlayerAttack) {
    result = "プレイヤーは攻撃できません";
  }else {
  // 自分は攻撃可能

  if (enemyWeapon.type === "none" || !canEnemyAttack || enemyWeapon.range === "3-10") {
    // 敵は反撃不可
    if ((playerAS - enemyAS) >= 4) {
      result = "敵は反撃不可、自分は2回攻撃できる";
    } else {
      result = "敵は反撃不可、自分は1回攻撃";
    }
  } else {
    // 通常の追撃判定
    if ((playerAS - enemyAS) >= 4) {
      result = "自分が2回攻撃できる";
    } else if ((enemyAS - playerAS) >= 4) {
      result = "敵が2回攻撃できる";
    } else {
      result = "どちらも追撃なし";
    }
  }
 }

  console.log("自分Wt:", playerWt);
  console.log("敵Wt:", enemyWt);
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

