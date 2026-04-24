
// 追撃条件
function checkDouble_FE6() {

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

  // 表示
  display(
    "doubleResult",
    `自分の攻速: ${playerAS} / 敵の攻速: ${enemyAS} → ${result}`
  );
}