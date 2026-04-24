// 命中率計算
function calculateHit_FE6() {

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

}
