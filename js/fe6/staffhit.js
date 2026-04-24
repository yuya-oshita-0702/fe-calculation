//杖命中率
function calculateStaffhit_FE6() {
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