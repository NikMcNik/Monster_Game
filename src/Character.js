class Character {
  constructor(healthMin, healthMax, armourClassMin, armourClassMax) {
    this.health = this.randomIntInclusive(healthMin, healthMax);

    this.armourClass = this.randomIntInclusive(armourClassMin, armourClassMax);
  }
  randomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  isAlive() {
    return this.health > 0;
  }
  dealDamage(damage, opponent) {
    // you attack monster
    opponent.health -= damage;
    console.log(this.name + " delt " + damage + " damage to " + opponent.name);
    console.log(opponent.name_your + " health is now " + opponent.health);
  }
}

export default Character;
