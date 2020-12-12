const readlineSync = require("readline-sync");
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
      damage = koz.slice;
    } else if (attackChosen.toLowerCase() == "hack") {
      damage = koz.hack;
    } else if (attackChosen.toLowerCase() == "smash") {
      damage = koz.smash;
    }
    return damage;
  }
}

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

const koz = new Player(25, 50, 10, 15, 13, 20, 1, 15, 25, 17, 28);
const cathulu = new Monster(20, 40, 40, 70, 5, 15);

console.clear();
console.log("Welcome to your adventure!");
console.log("You have 3 different attacs, slice, hack and smash.");
console.log("Slice is dealing " + koz.slice + " damage");
console.log("Hack is dealing " + koz.hack + " damage");
console.log("Smash is dealing " + koz.smash + " damage");
console.log("Defeat the monster! Good luck on your advenure!\n");
console.log("A Monster approches");
console.log("Prepare to Fight!");

while (koz.isAlive() && cathulu.isAlive()) {
  let attackChosen = readlineSync.question("\nChoose your attack: ");
  let damage = koz.determineDamage(attackChosen);
  if (!damage) {
    console.log("Invalid attack chosen, Try again");
    continue;
  }

  console.log();

  // you attack monster
  koz.dealDamage(damage, cathulu);

  // monster attacks you
  cathulu.dealDamage(koz);
}

if (koz.health <= 0) {
  console.log("You were killed by the monster");
}
if (cathulu.health <= 0) {
  console.log("You Defeated the Monster!!!");
}
