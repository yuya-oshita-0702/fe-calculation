// 必殺率
function calculateCrit_FE6() {

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

}