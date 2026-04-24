
function calculateAll_FE6() {
  const data = getInputs();

  // ダメージ
  const dmgErrors = validateDamage_FE6(data);
  if (dmgErrors.length > 0) {
    display("result", dmgErrors.join("<br>"));
  } else {
    calculateDamage_FE6();
  }

  // 命中
  const hitErrors = validateHit_FE6(data);
  if (hitErrors.length > 0) {
    display("hitResult", hitErrors.join("<br>"));
  } else {
    calculateHit_FE6();
  }

  // 杖命中
  const staffhitErrors = validateStaffHit_FE6(data);
  if (staffhitErrors.length > 0) {
    display("staffhitResult", staffhitErrors.join("<br>"));
  } else {
    calculateStaffhit_FE6();
  }

  // 必殺
  const critErrors = validateCrit_FE6(data);
  if (critErrors.length > 0) {
    display("critResult", critErrors.join("<br>"));
  } else {
    calculateCrit_FE6();
  }

  // 追撃
  const doubleErrors = validateDouble_FE6(data);
  if (doubleErrors.length > 0) {
    display("doubleResult", doubleErrors.join("<br>"));
  } else {
    checkDouble_FE6();
  }
}