
function validateDamage_FE6(data) {
  const errors = [];

  console.log("strength raw:", document.getElementById("strength").value);
  console.log("isEmpty:", isEmpty("strength"));
  if (isNaN(data.attackRange)) {
    errors.push("攻撃距離を入力してください");
  }

  if (isNaN(data.strength)) {
    errors.push("攻撃側の力を入力してください");
  }

  if (isNaN(data.magic)) {
    errors.push("攻撃側の魔力を入力してください");
  }

  if (isNaN(data.defense)) {
    errors.push("相手の守備を入力してください");
  }

  if (isNaN(data.resistance)) {
    errors.push("相手の魔防を入力してください");
  }

  console.log("validateDamage動いた");
  return errors;
}



function validateHit_FE6(data) {
  const errors = [];

  if (data.skill == null || data.skill === "") {
    errors.push("攻撃側の技を入力してください");
  }

  if (data.playerluck == null || data.playerluck === "") {
    errors.push("攻撃側の幸運を入力してください");
  }

  if (data.enemySpeed == null || data.enemySpeed === "") {
    errors.push("相手の速さを入力してください");
  }

  if (data.enemyluck == null || data.enemyluck === "") {
    errors.push("相手の幸運を入力してください");
  }

  if (data.enemyConstitution == null || data.enemyConstitution === "") {
    errors.push("相手の体格を入力してください");
  }

  return errors;
}



function validateStaffHit_FE6(data) {
  const errors = [];

  if (data.magic == null || data.magic === "") {
    errors.push("攻撃側の魔力を入力してください");
  }

  if (data.skill == null || data.skill === "") {
    errors.push("攻撃側の技を入力してください");
  }

  if (data.resistance == null || data.resistance === "") {
    errors.push("相手の魔防を入力してください");
  }

  return errors;
}



function validateCrit_FE6(data) {
  const errors = [];

  if (data.skill == null || data.skill === "") {
    errors.push("攻撃側の技を入力してください");
  }

  if (data.enemyluck == null || data.enemyluck === "") {
    errors.push("相手の幸運を入力してください");
  }

  return errors;
}




function validateDouble_FE6(data) {
  const errors = [];

  if (data.playerSpeed == null || data.playerSpeed === "") {
    errors.push("攻撃側の速さを入力してください");
  }

  if (data.enemySpeed == null || data.enemySpeed === "") {
    errors.push("相手の速さを入力してください");
  }

  if (data.Constitution == null || data.Constitution === "") {
    errors.push("攻撃側の体格を入力してください");
  }

  if (data.enemyConstitution == null || data.enemyConstitution === "") {
    errors.push("相手の体格を入力してください");
  }

  if (data.attackRange == null) {
    errors.push("攻撃距離を入力してください");
  }


  return errors;
}