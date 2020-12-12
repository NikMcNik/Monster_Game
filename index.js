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
    this.slice = this.randomIntInclusive(sliceMin, sliceMax);
    this.hack = this.randomIntInclusive(hackMin, hackMax);
    this.smash = this.randomIntInclusive(smashMin, smashMax);
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
    this.attack = this.randomIntInclusive(attackMin, attackMax);
  }
}

const koz = new Player(25, 50, 10, 15, 13, 20, 1, 15, 25, 17, 28);
console.log(koz);

const cathulu = new Monster(20, 40, 40, 70, 5, 15);
console.log(cathulu);

console.log("A Monster approches");
console.log("Prepare to Fight!");
while (koz.isAlive() && cathulu.isAlive()) {
  let attackChosen = readlineSync.question("Choose your attack: ");
  let damage;
  if (attackChosen.toLowerCase() == "slice") {
    damage = koz.slice;
  } else if (attackChosen.toLowerCase() == "hack") {
    damage = koz.hack;
  } else if (attackChosen.toLowerCase() == "smash") {
    damage = koz.smash;
  } else {
    console.log("Invalid attack chosen, Try again");
    continue;
  }
  // you attack monster
  cathulu.health -= damage;
  console.log("You delt " + damage + " damage to the monster");
  console.log("Monsters health is now " + cathulu.health);
  //monster attacks you
  koz.health -= cathulu.attack;
  console.log("The Monster delt " + cathulu.attack + " damage to you");
  console.log("Your health is now " + koz.health);
}

if (koz.health <= 0) {
  console.log("You were killed by the monster");
}
if (cathulu.health <= 0) {
  console.log("You Defeated the Monster!!!");
}
