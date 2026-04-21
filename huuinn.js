
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
   
  { name: "火竜石", power: 15, hit: 100, weight: 0, crit: 5, type: "physical", weaponType: "breath", effective: [], special: "dragonBuff_enemy" },
  { name: "神竜石", power: 16, hit: 100, weight: 0, crit: 15, type: "physical", weaponType: "breath", effective: ["DemonDragon", "Manakete"], special: "dragonBuff_fae" },
  { name: "魔竜石", power: 20, hit: 100, weight: 0, crit: 10, type: "physical", weaponType: "breath", effective: [], special: "dragonBuff_enemy" },

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



  // ブレス
function ignoreDefense(weapon) {
  return weapon.weaponType === "breath";
}



// 三すくみ
function getWeaponAdvantage(attackerType, defenderType, playerWeapon, enemyWeapon) {

  if (!attackerType || !defenderType) {
    return { atk: 0, hit: 0 };
  }

  if (playerWeapon.ignoreTriangle) {
    return { atk: 0, hit: 0 };
  }

  let weaponTriangle = 0;

  // 物理
  if (
    (attackerType === "sword" && defenderType === "axe") ||
    (attackerType === "axe" && defenderType === "lance") ||
    (attackerType === "lance" && defenderType === "sword")
  ) {
    weaponTriangle = 1;
  } else if (
    (attackerType === "axe" && defenderType === "sword") ||
    (attackerType === "lance" && defenderType === "axe") ||
    (attackerType === "sword" && defenderType === "lance")
  ) {
    weaponTriangle = -1;
  }

  // 物理
  if (
    (playerWeapon.special === "anti-lance" && defenderType === "lance") ||
    (playerWeapon.special === "anti-axe" && defenderType === "axe") ||
    (playerWeapon.special === "anti-sword" && defenderType === "sword")
  ) {
    weaponTriangle = 1;
  } else if (
    (playerWeapon.special === "anti-lance" && defenderType === "axe") ||
    (playerWeapon.special === "anti-axe" && defenderType === "sword") ||
    (playerWeapon.special === "anti-sword" && defenderType === "lance")
  ) {
    weaponTriangle = -1;
  }

  // 魔法
  else if (
    (attackerType === "anima" && defenderType === "light") ||
    (attackerType === "light" && defenderType === "dark") ||
    (attackerType === "dark" && defenderType === "anima")
  ) {
    weaponTriangle = 1;
  } else if (
    (attackerType === "light" && defenderType === "anima") ||
    (attackerType === "dark" && defenderType === "light") ||
    (attackerType === "anima" && defenderType === "dark")
  ) {
    weaponTriangle = -1;
  }

  return {
    atk: weaponTriangle,
    hit: weaponTriangle * 10
  };
}


  // 地形
  const terrainData = {
    plain: { def: 0, avo: 0 },
   road: { def: 0, avo: 0 },
    floor: { def: 0, avo: 0 },
    cliff: { def: 0, avo: 0 },
    chest: { def: 0, avo: 0 },
    river: { def: 0, avo: 0 },
    shoal: { def: 0, avo: 0 },

    desert: { def: 0, avo: 5 },
    sea: { def: 0, avo: 10 },
    lake: { def: 0, avo: 10 },
    village: { def: 0, avo: 10 },
    house: { def: 0, avo: 10 },
    armory: { def: 0, avo: 10 },
    shop: { def: 0, avo: 10 },
    arena: { def: 0, avo: 10 },

    wall: { def: 0, avo: 20 },
    forest: { def: 1, avo: 20 },
    fort: { def: 2, avo: 20 },
    gate: { def: 3, avo: 20 },

    mountain: { def: 1, avo: 30 },
    throne: { def: 3, avo: 30 },
    high_mountain: { def: 2, avo: 40 }
  };


  // 敵タイプ
  const enemyMap = {
    normal: ["normal"],
    armored: ["armored"],
    mounted: ["mounted"],
    flying: ["flying"],
    dragon_flying: ["dragon", "flying"],
    Manakete: ["Manakete"],
    DemonDragon: ["DemonDragon"]
  };



  // 地形に飛行は無効
  function isFlying(unitType) {
    return enemyMap[unitType]?.includes("flying");
  }



  function getTerrainBonus(unitType, terrainType) {

     if (isFlying(unitType)) {
      return { def: 0, avo: 0 };
    }

    return terrainData[terrainType] || { def: 0, avo: 0 };
  }


// 支援データ
const supportData = {
  "fire": {
    "fire": {
      "C": {
        "atk": 1,
        "def": 0,
        "hit": 5,
        "avo": 5,
        "crit": 5,
        "critAvo": 0
      },
      "B": {
        "atk": 2,
        "def": 0,
        "hit": 10,
        "avo": 10,
        "crit": 10,
        "critAvo": 0
      },
      "A": {
        "atk": 3,
        "def": 0,
        "hit": 15,
        "avo": 15,
        "crit": 15,
        "critAvo": 0
      }
    },
    "thunder": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 2.5,
        "avo": 5,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 5,
        "avo": 10,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 7.5,
        "avo": 15,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "wind": {
      "C": {
        "atk": 1,
        "def": 0,
        "hit": 5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 2,
        "def": 0,
        "hit": 10,
        "avo": 5,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 3,
        "def": 0,
        "hit": 15,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "ice": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 5,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 10,
        "avo": 10,
        "crit": 5,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 15,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 7.5
      }
    },
    "dark": {
      "C": {
        "atk": 0.5,
        "def": 0,
        "hit": 5,
        "avo": 5,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 0,
        "hit": 10,
        "avo": 10,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 0,
        "hit": 15,
        "avo": 15,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "light": {
      "C": {
        "atk": 1,
        "def": 0.5,
        "hit": 5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 0
      },
      "B": {
        "atk": 2,
        "def": 1,
        "hit": 10,
        "avo": 5,
        "crit": 10,
        "critAvo": 0
      },
      "A": {
        "atk": 3,
        "def": 1.5,
        "hit": 15,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 0
      }
    },
    "anima": {
      "C": {
        "atk": 1,
        "def": 0.5,
        "hit": 2.5,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 2,
        "def": 1,
        "hit": 5,
        "avo": 10,
        "crit": 5,
        "critAvo": 5
      },
      "A": {
        "atk": 3,
        "def": 1.5,
        "hit": 7.5,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 7.5
      }
    }
  },
  "thunder": {
    "fire": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 2.5,
        "avo": 5,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 5,
        "avo": 10,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 7.5,
        "avo": 15,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "thunder": {
      "C": {
        "atk": 0,
        "def": 1,
        "hit": 0,
        "avo": 5,
        "crit": 5,
        "critAvo": 5
      },
      "B": {
        "atk": 0,
        "def": 2,
        "hit": 0,
        "avo": 10,
        "crit": 10,
        "critAvo": 10
      },
      "A": {
        "atk": 0,
        "def": 3,
        "hit": 0,
        "avo": 15,
        "crit": 15,
        "critAvo": 15
      }
    },
    "wind": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 2.5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 5,
        "avo": 5,
        "crit": 10,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 7.5,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 15
      }
    },
    "ice": {
      "C": {
        "atk": 0,
        "def": 1,
        "hit": 2.5,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 0,
        "def": 2,
        "hit": 5,
        "avo": 10,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 0,
        "def": 3,
        "hit": 7.5,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 15
      }
    },
    "dark": {
      "C": {
        "atk": 0,
        "def": 0.5,
        "hit": 2.5,
        "avo": 5,
        "crit": 5,
        "critAvo": 5
      },
      "B": {
        "atk": 0,
        "def": 1,
        "hit": 5,
        "avo": 10,
        "crit": 10,
        "critAvo": 10
      },
      "A": {
        "atk": 0,
        "def": 1.5,
        "hit": 7.5,
        "avo": 15,
        "crit": 15,
        "critAvo": 15
      }
    },
    "light": {
      "C": {
        "atk": 0.5,
        "def": 1,
        "hit": 2.5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 2,
        "hit": 5,
        "avo": 5,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 3,
        "hit": 7.5,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "anima": {
      "C": {
        "atk": 0.5,
        "def": 1,
        "hit": 0,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 2,
        "hit": 0,
        "avo": 10,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 3,
        "hit": 0,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 15
      }
    }
  },
  "wind": {
    "fire": {
      "C": {
        "atk": 1,
        "def": 0,
        "hit": 5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 2,
        "def": 0,
        "hit": 10,
        "avo": 5,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 3,
        "def": 0,
        "hit": 15,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "thunder": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 2.5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 5,
        "avo": 5,
        "crit": 10,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 7.5,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 15
      }
    },
    "wind": {
      "C": {
        "atk": 1,
        "def": 0,
        "hit": 5,
        "avo": 0,
        "crit": 5,
        "critAvo": 5
      },
      "B": {
        "atk": 2,
        "def": 0,
        "hit": 10,
        "avo": 0,
        "crit": 10,
        "critAvo": 10
      },
      "A": {
        "atk": 3,
        "def": 0,
        "hit": 15,
        "avo": 0,
        "crit": 15,
        "critAvo": 15
      }
    },
    "ice": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 5,
        "avo": 2.5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 10,
        "avo": 5,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 15,
        "avo": 7.5,
        "crit": 7.5,
        "critAvo": 15
      }
    },
    "dark": {
      "C": {
        "atk": 0.5,
        "def": 0,
        "hit": 5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 0,
        "hit": 10,
        "avo": 5,
        "crit": 10,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 0,
        "hit": 15,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 15
      }
    },
    "light": {
      "C": {
        "atk": 1,
        "def": 0.5,
        "hit": 5,
        "avo": 0,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 2,
        "def": 1,
        "hit": 10,
        "avo": 0,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 3,
        "def": 1.5,
        "hit": 15,
        "avo": 0,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "anima": {
      "C": {
        "atk": 1,
        "def": 0.5,
        "hit": 2.5,
        "avo": 2.5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 2,
        "def": 1,
        "hit": 5,
        "avo": 5,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 3,
        "def": 1.5,
        "hit": 7.5,
        "avo": 7.5,
        "crit": 7.5,
        "critAvo": 15
      }
    }
  },
  "ice": {
    "fire": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 5,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 10,
        "avo": 10,
        "crit": 5,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 15,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 7.5
      }
    },
    "thunder": {
      "C": {
        "atk": 0,
        "def": 1,
        "hit": 2.5,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 0,
        "def": 2,
        "hit": 5,
        "avo": 10,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 0,
        "def": 3,
        "hit": 7.5,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 15
      }
    },
    "wind": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 5,
        "avo": 2.5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 10,
        "avo": 5,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 15,
        "avo": 7.5,
        "crit": 7.5,
        "critAvo": 15
      }
    },
    "ice": {
      "C": {
        "atk": 0,
        "def": 1,
        "hit": 5,
        "avo": 5,
        "crit": 0,
        "critAvo": 5
      },
      "B": {
        "atk": 0,
        "def": 2,
        "hit": 10,
        "avo": 10,
        "crit": 0,
        "critAvo": 10
      },
      "A": {
        "atk": 0,
        "def": 3,
        "hit": 15,
        "avo": 15,
        "crit": 0,
        "critAvo": 15
      }
    },
    "dark": {
      "C": {
        "atk": 0,
        "def": 0.5,
        "hit": 5,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 0,
        "def": 1,
        "hit": 10,
        "avo": 10,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 0,
        "def": 1.5,
        "hit": 15,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 15
      }
    },
    "light": {
      "C": {
        "atk": 0.5,
        "def": 1,
        "hit": 5,
        "avo": 2.5,
        "crit": 2.5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 2,
        "hit": 10,
        "avo": 5,
        "crit": 5,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 3,
        "hit": 15,
        "avo": 7.5,
        "crit": 7.5,
        "critAvo": 7.5
      }
    },
    "anima": {
      "C": {
        "atk": 0.5,
        "def": 1,
        "hit": 2.5,
        "avo": 5,
        "crit": 0,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 2,
        "hit": 5,
        "avo": 10,
        "crit": 0,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 3,
        "hit": 7.5,
        "avo": 15,
        "crit": 0,
        "critAvo": 15
      }
    }
  },
  "dark": {
    "fire": {
      "C": {
        "atk": 0.5,
        "def": 0,
        "hit": 5,
        "avo": 5,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 0,
        "hit": 10,
        "avo": 10,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 0,
        "hit": 15,
        "avo": 15,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "thunder": {
      "C": {
        "atk": 0,
        "def": 0.5,
        "hit": 2.5,
        "avo": 5,
        "crit": 5,
        "critAvo": 5
      },
      "B": {
        "atk": 0,
        "def": 1,
        "hit": 5,
        "avo": 10,
        "crit": 10,
        "critAvo": 10
      },
      "A": {
        "atk": 0,
        "def": 1.5,
        "hit": 7.5,
        "avo": 15,
        "crit": 15,
        "critAvo": 15
      }
    },
    "wind": {
      "C": {
        "atk": 0.5,
        "def": 0,
        "hit": 5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 0,
        "hit": 10,
        "avo": 5,
        "crit": 10,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 0,
        "hit": 15,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 15
      }
    },
    "ice": {
      "C": {
        "atk": 0,
        "def": 0.5,
        "hit": 5,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 0,
        "def": 1,
        "hit": 10,
        "avo": 10,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 0,
        "def": 1.5,
        "hit": 15,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 15
      }
    },
    "dark": {
      "C": {
        "atk": 0,
        "def": 0,
        "hit": 5,
        "avo": 5,
        "crit": 5,
        "critAvo": 5
      },
      "B": {
        "atk": 0,
        "def": 0,
        "hit": 10,
        "avo": 10,
        "crit": 10,
        "critAvo": 10
      },
      "A": {
        "atk": 0,
        "def": 0,
        "hit": 15,
        "avo": 15,
        "crit": 15,
        "critAvo": 15
      }
    },
    "light": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 10,
        "avo": 5,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 15,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "anima": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 2.5,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 5,
        "avo": 10,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 7.5,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 15
      }
    }
  },
  "light": {
    "fire": {
      "C": {
        "atk": 1,
        "def": 0.5,
        "hit": 5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 0
      },
      "B": {
        "atk": 2,
        "def": 1,
        "hit": 10,
        "avo": 5,
        "crit": 10,
        "critAvo": 0
      },
      "A": {
        "atk": 3,
        "def": 1.5,
        "hit": 15,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 0
      }
    },
    "thunder": {
      "C": {
        "atk": 0.5,
        "def": 1,
        "hit": 2.5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 2,
        "hit": 5,
        "avo": 5,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 3,
        "hit": 7.5,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "wind": {
      "C": {
        "atk": 1,
        "def": 0.5,
        "hit": 5,
        "avo": 0,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 2,
        "def": 1,
        "hit": 10,
        "avo": 0,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 3,
        "def": 1.5,
        "hit": 15,
        "avo": 0,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "ice": {
      "C": {
        "atk": 0.5,
        "def": 1,
        "hit": 5,
        "avo": 2.5,
        "crit": 2.5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 2,
        "hit": 10,
        "avo": 5,
        "crit": 5,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 3,
        "hit": 15,
        "avo": 7.5,
        "crit": 7.5,
        "critAvo": 7.5
      }
    },
    "dark": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 5,
        "avo": 2.5,
        "crit": 5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 10,
        "avo": 5,
        "crit": 10,
        "critAvo": 5
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 15,
        "avo": 7.5,
        "crit": 15,
        "critAvo": 7.5
      }
    },
    "light": {
      "C": {
        "atk": 1,
        "def": 1,
        "hit": 5,
        "avo": 0,
        "crit": 5,
        "critAvo": 0
      },
      "B": {
        "atk": 2,
        "def": 2,
        "hit": 10,
        "avo": 0,
        "crit": 10,
        "critAvo": 0
      },
      "A": {
        "atk": 3,
        "def": 3,
        "hit": 15,
        "avo": 0,
        "crit": 15,
        "critAvo": 0
      }
    },
    "anima": {
      "C": {
        "atk": 1,
        "def": 1,
        "hit": 2.5,
        "avo": 2.5,
        "crit": 2.5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 2,
        "def": 2,
        "hit": 5,
        "avo": 5,
        "crit": 5,
        "critAvo": 5
      },
      "A": {
        "atk": 3,
        "def": 3,
        "hit": 7.5,
        "avo": 7.5,
        "crit": 7.5,
        "critAvo": 7.5
      }
    }
  },
  "anima": {
    "fire": {
      "C": {
        "atk": 1,
        "def": 0.5,
        "hit": 2.5,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 2,
        "def": 1,
        "hit": 5,
        "avo": 10,
        "crit": 5,
        "critAvo": 5
      },
      "A": {
        "atk": 3,
        "def": 1.5,
        "hit": 7.5,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 7.5
      }
    },
    "thunder": {
      "C": {
        "atk": 0.5,
        "def": 1,
        "hit": 0,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 2,
        "hit": 0,
        "avo": 10,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 3,
        "hit": 0,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 15
      }
    },
    "wind": {
      "C": {
        "atk": 1,
        "def": 0.5,
        "hit": 2.5,
        "avo": 2.5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 2,
        "def": 1,
        "hit": 5,
        "avo": 5,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 3,
        "def": 1.5,
        "hit": 7.5,
        "avo": 7.5,
        "crit": 7.5,
        "critAvo": 15
      }
    },
    "ice": {
      "C": {
        "atk": 0.5,
        "def": 1,
        "hit": 2.5,
        "avo": 5,
        "crit": 0,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 2,
        "hit": 5,
        "avo": 10,
        "crit": 0,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 3,
        "hit": 7.5,
        "avo": 15,
        "crit": 0,
        "critAvo": 15
      }
    },
    "dark": {
      "C": {
        "atk": 0.5,
        "def": 0.5,
        "hit": 2.5,
        "avo": 5,
        "crit": 2.5,
        "critAvo": 5
      },
      "B": {
        "atk": 1,
        "def": 1,
        "hit": 5,
        "avo": 10,
        "crit": 5,
        "critAvo": 10
      },
      "A": {
        "atk": 1.5,
        "def": 1.5,
        "hit": 7.5,
        "avo": 15,
        "crit": 7.5,
        "critAvo": 15
      }
    },
    "light": {
      "C": {
        "atk": 1,
        "def": 1,
        "hit": 2.5,
        "avo": 2.5,
        "crit": 2.5,
        "critAvo": 2.5
      },
      "B": {
        "atk": 2,
        "def": 2,
        "hit": 5,
        "avo": 5,
        "crit": 5,
        "critAvo": 5
      },
      "A": {
        "atk": 3,
        "def": 3,
        "hit": 7.5,
        "avo": 7.5,
        "crit": 7.5,
        "critAvo": 7.5
      }
    },
    "anima": {
      "C": {
        "atk": 1,
        "def": 1,
        "hit": 0,
        "avo": 5,
        "crit": 0,
        "critAvo": 5
      },
      "B": {
        "atk": 2,
        "def": 2,
        "hit": 0,
        "avo": 10,
        "crit": 0,
        "critAvo": 10
      },
      "A": {
        "atk": 3,
        "def": 3,
        "hit": 0,
        "avo": 15,
        "crit": 0,
        "critAvo": 15
      }
    }
  }
};



// 属性表示
const attrMap = {
  fire: "炎",
  thunder: "雷",
  wind: "風",
  ice: "氷",
  dark: "闇",
  light: "光",
  anima: "理"
};


// サポート取得
function getSupportBonus(myAttr, enemyAttr, rank) {
 
  return (
    supportData[myAttr]?.[enemyAttr]?.[rank] || {
      atk: 0,
      def: 0,
      hit: 0,
      avo: 0,
      crit: 0,
      critAvo: 0
    }
  );
  
}



// 支援タブキー
function generateSupportKeys() {
  const keys = [];

  for (const myAttr in supportData) {
    for (const enemyAttr in supportData[myAttr]) {
      for (const rank in supportData[myAttr][enemyAttr]) {

        keys.push({
          myAttr,
          enemyAttr,
          rank
        });

      }
    }
  }

  return keys;
}


// タブ描画
function populateSupportOptions(selectId, allowedRanks = ["A","B","C"]) {

  const select = document.getElementById(selectId);
  select.innerHTML = "";

  // なし
  const noneOption = document.createElement("option");
  noneOption.value = "";
  noneOption.textContent = "なし";
  select.appendChild(noneOption);

  for (const myAttr in supportData) {
    for (const enemyAttr in supportData[myAttr]) {
      for (const rank in supportData[myAttr][enemyAttr]) {

        if (!allowedRanks.includes(rank)) continue;

        const option = document.createElement("option");

        const key = `${myAttr}_${enemyAttr}_${rank}`;

        option.value = key;
        option.textContent =
          attrMap[myAttr] + attrMap[enemyAttr] + rank;

        select.appendChild(option);

      }
    }
  }
}


populateSupportOptions("playerSupport1", ["A","B","C"]);
populateSupportOptions("playerSupport2", ["B","C"]);
populateSupportOptions("playerSupport3", ["C"]);
populateSupportOptions("playerSupport4", ["C"]);
populateSupportOptions("playerSupport5", ["C"]);
populateSupportOptions("enemySupport1", ["A","B","C"]);
populateSupportOptions("enemySupport2", ["B","C"]);
populateSupportOptions("enemySupport3", ["C"]);
populateSupportOptions("enemySupport4", ["C"]);
populateSupportOptions("enemySupport5", ["C"]);


// 支援取得
function getSelectedSupport(selectId) {

  const value = document.getElementById(selectId).value;

  if (!value) return null;

  const [myAttr, enemyAttr, rank] = value.split("_");

  return { myAttr, enemyAttr, rank };
  
}


// 支援合算処理
function calculateSupportBonus(playerSupports, enemySupports) {

  let support = {
    atk: 0,
    def: 0,
    hit: 0,
    avo: 0,
    crit: 0,
    critAvo: 0
  };

  // プレイヤー側（攻撃側）
  for (const s of playerSupports) {
    if (!s) continue;

    const bonus = getSupportBonus(s.myAttr, s.enemyAttr, s.rank);

    support.atk += bonus.atk;
    support.hit += bonus.hit;
    support.crit += bonus.crit;
  }

  // 敵側（防御側）
  for (const s of enemySupports) {
    if (!s) continue;

    const bonus = getSupportBonus(s.myAttr, s.enemyAttr, s.rank);

    support.def += bonus.def;
    support.avo += bonus.avo;
    support.critAvo += bonus.critAvo;
  }

  // 切り捨て
  support.atk = Math.floor(support.atk);
  support.def = Math.floor(support.def);
  support.hit = Math.floor(support.hit);
  support.avo = Math.floor(support.avo);
  support.crit = Math.floor(support.crit);
  support.critAvo = Math.floor(support.critAvo);

  return support;
}

// 支援まとめて取得
function getAllSupports(prefix) {
  const supports = [];

  for (let i = 1; i <= 5; i++) {
    supports.push(getSelectedSupport(prefix + i));
  }

  return supports;
}



// 例外ダメージ処理
function applySpecialDamageRules(damage, data) {

  if (data.playerWeapon.name === "なし") {
    return 0;
  }

  if (data.playerWeapon.name === "ひかりの剣" && data.attackRange > 1) {
    return 10;
  }

  return damage;
}


// ダメージ結果
function buildDamageResult(normalDamage, criticalDamage, data) {

  // イクリプス
  if (data.playerWeapon.name === "イクリプス") {
    return `
    イクリプス：敵HPを1にする攻撃<br>
    ※ダメージ計算は通常と異なるため数値表示なし
    `;
  }

  let text = `
  通常ダメージ: ${normalDamage}ダメージ<br>
  必殺ダメージ: ${criticalDamage}ダメージ<br><br>
  `;

  // 2回攻撃
  text += `
  2回攻撃（必殺なし）: ${normalDamage * 2}ダメージ<br>
  2回攻撃（片方必殺）: ${normalDamage + criticalDamage}ダメージ<br>
  2回攻撃（両方必殺）: ${criticalDamage * 2}ダメージ<br>
  `;

  // 勇者武器
  if (data.playerWeapon.special?.includes("brave")) {
    text += `
    4回攻撃（必殺なし）: ${normalDamage * 4}ダメージ<br>
    4回攻撃（1回必殺）: ${normalDamage * 3 + criticalDamage}ダメージ<br>
    4回攻撃（2回必殺）: ${normalDamage * 2 + criticalDamage * 2}ダメージ<br>
    4回攻撃（3回必殺）: ${normalDamage + criticalDamage * 3}ダメージ<br>
    4回攻撃（4回必殺）: ${criticalDamage * 4}ダメージ<br>
    `;
  }

  // 回復系
  if (
    data.playerWeapon.name === "ルーンソード" ||
    data.playerWeapon.name === "リザイア"
  ) {
    text += `その後与えたダメージ量だけ自分が回復`;
  }

  return text;
}


// 命中計算
function calculateHitRate(data, support, weaponTriangle) {
  return (
    data.playerWeapon.hit +
    data.skill * 2 +
    Math.floor(data.playerluck / 2) +
    support.hit +
    weaponTriangle.hit
  );
}



// 回避計算
function calculateAvoid(data, support, terrainAvo) {

  const enemyWt = Math.max(0, data.enemyWeapon.weight - data.enemyConstitution);
  const enemyAS = Math.max(0, data.enemySpeed - enemyWt);

  const avoid =
    enemyAS * 2 +
    data.enemyluck +
    support.avo +
    terrainAvo;

  return Math.max(0, avoid);
}



// 実効命中率計算
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
    table[n] = sum / 10000; // ←ここ重要
  }

  return table;
}



// 実効命中率
function calculateRealHit(displayHit) {

  if (displayHit <= 0) return 0;

  const rnTable = generate2RNTable();

  return (rnTable[displayHit - 1] || 0) * 100;
}



// clamp
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}



// 攻速計算
function calculateAS(speed, weight, con) {
  const wt = Math.max(0, weight - con);
  return Math.max(0, speed - wt);
}



// 反撃不可時
function handleNoCounter(playerAS, enemyAS) {
  if ((playerAS - enemyAS) >= 4) {
    return "敵は反撃不可、自分は2回攻撃できる";
  }
  return "敵は反撃不可、自分は1回攻撃";
}


// 通常追撃
function handleNormalDouble(playerAS, enemyAS) {

  if ((playerAS - enemyAS) >= 4) {
    return "自分が2回攻撃できる";
  }

  if ((enemyAS - playerAS) >= 4) {
    return "敵が2回攻撃できる";
  }

  return "どちらも追撃なし";
}



// 必殺率計算
function calculateCritRate(data, support) {

  const classBonus = getClassCritBonus(data.playerType);

  return (
    data.playerWeapon.crit +
    Math.floor(data.skill / 2) +
    support.crit +
    classBonus
  );
}



// 必殺回避計算
function calculateCritAvoid(data, support) {
  return data.enemyluck + support.critAvo;
}



// クラス補正
function getClassCritBonus(type) {
  if (type === "swordmaster" || type === "berserker") {
    return 30;
  }
  return 0;
}



// ボタン処理
document.getElementById("calcBtn").addEventListener("click", () => {
  calculateDamage();
  calculateCrit();
});



function getInputs() {
  return {
    strength: Number(document.getElementById("attack").value),
    magic: Number(document.getElementById("magic").value),
    defense: Number(document.getElementById("defense").value),
    skill: Number(document.getElementById("skill").value),
    resistance: Number(document.getElementById("resistance").value),
    playerSpeed: Number(document.getElementById("playerSpeed").value),
    enemySpeed: Number(document.getElementById("enemySpeed").value),
    playerluck: Number(document.getElementById("playerluck").value),
    enemyluck: Number(document.getElementById("enemyluck").value),
    Constitution: Number(document.getElementById("Constitution").value),
    enemyConstitution: Number(document.getElementById("enemyConstitution").value),
    playerWeapon: weapons[parseInt(document.getElementById("playerWeapon").value)],
    enemyWeapon: weapons[parseInt(document.getElementById("enemyWeapon").value)],
    attackRange: Number(document.getElementById("attackRange").value),
    playerType: document.getElementById("playerType").value,
    enemyType: document.getElementById("enemyType").value,
    terrainType: document.getElementById("terrain").value
  };
}



function display(id, text) {
  document.getElementById(id).innerHTML = text;
}



// ダメージ計算
function calculateDamage() {

  const data = getInputs();

  // 攻撃不可チェック
  if (data.playerWeapon.type === "none") {
    display("result", "武器がないため攻撃できません");
    return;
  }

  if (!canAttack(data.playerWeapon, data.attackRange)) {
    display("result", "射程外で攻撃できません");
    return;
  }

  // 武器タイプ・三すくみ
  const myType = getEffectiveWeaponType(data.playerWeapon, data.enemyWeapon, true, data.attackRange);
  const eneType = getEffectiveWeaponType(data.playerWeapon, data.enemyWeapon, false, data.attackRange);
  const weaponTriangle = getWeaponAdvantage(myType, eneType, data.playerWeapon, data.enemyWeapon);

  // 敵タイプ
  const enemyTypes = enemyMap[data.enemyType];

  // 地形
  const terrain = getTerrainBonus(data.enemyType, data.terrainType).def;

  // 支援
  const playerSupports = getAllSupports("playerSupport");
  const enemySupports = getAllSupports("enemySupport");
  const support = calculateSupportBonus(playerSupports, enemySupports);

  // 攻撃力計算 
  let weaponPower = data.playerWeapon.power;
  let triangleBonus = weaponTriangle.atk;

  // 特効
  const isEffective = data.playerWeapon.effective.some(type =>
    enemyTypes.includes(type)
  );

  if (isEffective) {
    weaponPower *= 3;
    triangleBonus *= 3;
  }

  // 攻撃種別
  const magicFlag = isMagicAttack(data.playerWeapon, data.enemyWeapon, true, data.attackRange);

  let attackStat;
  let defensePower;

  if (ignoreDefense(data.playerWeapon)) {
    attackStat = data.strength;
    defensePower = support.def + terrain;
  } else if (magicFlag) {
    attackStat = data.magic;
    defensePower = data.resistance + support.def + terrain;
  } else {
    attackStat = data.strength;
    defensePower = data.defense + support.def + terrain;
  }

  const attackPower = attackStat + weaponPower + triangleBonus + support.atk;

  // ダメージ
  let normalDamage = Math.max(0, attackPower - defensePower);

  // 例外処理
  normalDamage = applySpecialDamageRules(normalDamage, data);

  const criticalDamage = normalDamage * 3;

  // 表示
  let resultText = buildDamageResult(normalDamage, criticalDamage, data);

  display("result", resultText);
}



// 命中率計算
function calculateHit() {

  const data = getInputs();

  // 攻撃不可チェック
  if (data.playerWeapon.type === "none") {
    display("hitResult", "武器がないため攻撃できません");
    return;
  }

  // 三すくみ
  const myType = getEffectiveWeaponType(data.playerWeapon, data.enemyWeapon, true, data.attackRange);
  const eneType = getEffectiveWeaponType(data.playerWeapon, data.enemyWeapon, false, data.attackRange);
  const weaponTriangle = getWeaponAdvantage(myType, eneType, data.playerWeapon, data.enemyWeapon);

  // 地形（回避）
  const terrainAvo = getTerrainBonus(data.enemyType, data.terrainType).avo;

  // 支援
  const playerSupports = getAllSupports("playerSupport");
  const enemySupports = getAllSupports("enemySupport");
  const support = calculateSupportBonus(playerSupports, enemySupports);

  // 命中
  const hitRate = calculateHitRate(data, support, weaponTriangle);

  // 回避
  const avoid = calculateAvoid(data, support, terrainAvo);

  // 最終命中
  const finalHit = clamp(hitRate - avoid, 0, 100);

  // 実効命中
  const realHit = calculateRealHit(finalHit);

  // 表示
  display(
    "hitResult",
    `表示命中率: ${finalHit}%、実効命中率（実際の命中率）: ${realHit}%`
  );

  // デバッグ
  console.log({
    weapon: data.playerWeapon.name,
    weaponHit: data.playerWeapon.hit,
    enemyWeapon: data.enemyWeapon.name,
    enemyWeight: data.enemyWeapon.weight,
    avoid,
    skill: data.skill,
    finalHit
  });
}



//杖命中率
function calculateStaffhit() {
  const data = getInputs();

  let magichit = data.magic - data.resistance;
  if (magichit < 0) magichit = 0;


  let staffhhitRate =
  30 +
  magichit * 6 +
  data.skill -
  data.attackRange;

  // 補正
  staffhhitRate = clamp(staffhhitRate, 0, 100);

  // 表示
  display(
    "staffhitResult",
    `杖命中率: ${staffhhitRate}%: `
  );

}



// 追撃条件
function checkDouble() {

  const data = getInputs();

  // 攻速計算
  const playerAS = calculateAS(data.playerSpeed, data.playerWeapon.weight, data.Constitution);
  const enemyAS  = calculateAS(data.enemySpeed, data.enemyWeapon.weight, data.enemyConstitution);

  // 攻撃可否
  const canPlayerAttack = canAttack(data.playerWeapon, data.attackRange);
  const canEnemyAttack  = canAttack(data.enemyWeapon, data.attackRange);

  // 結果
  let result = "";

  // プレイヤー攻撃不可
  if (data.playerWeapon.type === "none") {
    result = "自分は武器なしのため攻撃できない";
  } else if (!canPlayerAttack) {
    result = "プレイヤーは攻撃できません";
  } else {

    // 敵が反撃できるか
    const enemyCanCounter =
      data.enemyWeapon.type !== "none" &&
      canEnemyAttack &&
      data.enemyWeapon.range !== "3-10";

    if (!enemyCanCounter) {
      result = handleNoCounter(playerAS, enemyAS);
    } else {
      result = handleNormalDouble(playerAS, enemyAS);
    }
  }

  // デバッグ
  console.log({
    playerAS,
    enemyAS
  });

  // 表示
  display(
    "doubleResult",
    `自分の攻速: ${playerAS} / 敵の攻速: ${enemyAS} → ${result}`
  );
}



// 必殺率
function calculateCrit() {

  const data = getInputs();

  // 攻撃不可チェック
  if (data.playerWeapon.type === "none") {
    display("critResult", "武器がないため攻撃できません");
    return;
  }

  // 支援
  const playerSupports = getAllSupports("playerSupport");
  const enemySupports = getAllSupports("enemySupport");
  const support = calculateSupportBonus(playerSupports, enemySupports);

  // 必殺率
  const critRate = calculateCritRate(data, support);

  // 必殺回避
  const critAvo = calculateCritAvoid(data, support);

  // 最終必殺
  const finalCrit = clamp(Math.floor(critRate) - Math.floor(critAvo), 0, 100);

  // 表示
  display("critResult", `必殺率: ${finalCrit}%`);

  // デバッグ
  console.log({
    weaponCrit: data.playerWeapon.crit,
    critRate,
    critAvo,
    finalCrit
  });
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

