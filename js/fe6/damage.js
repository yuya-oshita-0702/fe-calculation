// ダメージ計算
function calculateDamage_FE6() {
  console.log("ダメージ計算実行された");

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