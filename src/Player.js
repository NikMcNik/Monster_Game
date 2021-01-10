import Character from "./Character";
class Player extends Character {
  constructor(
    healthMin,
    healthMax,
    armourClassMin,
    armourClassMax,
    sliceMin,
    sliceMax,
    hackMin,
    hackMax,
    smashMin,
    smashMax
  ) {
    super(healthMin, healthMax, armourClassMin, armourClassMax);
    this.name = "You";
    this.name_your = "Your";
    this.slice = this.randomIntInclusive(sliceMin, sliceMax);
    this.hack = this.randomIntInclusive(hackMin, hackMax);
    this.smash = this.randomIntInclusive(smashMin, smashMax);
  }
  determineDamage(attackChosen) {
    let damage = false;
    if (attackChosen.toLowerCase() == "slice") {
      damage = this.slice;
    } else if (attackChosen.toLowerCase() == "hack") {
      damage = this.hack;
    } else if (attackChosen.toLowerCase() == "smash") {
      damage = this.smash;
    }
    return damage;
  }
}
export default Player;
