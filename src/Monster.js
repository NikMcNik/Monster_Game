import Character from "./Character";
class Monster extends Character {
  constructor(
    healthMin,
    healthMax,
    armourClassMin,
    armourClassMax,
    attackMin,
    attackMax
  ) {
    super(healthMin, healthMax, armourClassMin, armourClassMax);
    this.name = "The Monster";
    this.name_your = "Monster's";
    this.attack = this.randomIntInclusive(attackMin, attackMax);
  }
  dealDamage(opponent) {
    super.dealDamage(this.attack, opponent);
  }
}
export default Monster;
