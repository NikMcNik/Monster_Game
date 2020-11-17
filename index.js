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

const koz = new Player(15, 30, 10, 15, 13, 20, 1, 15, 25, 17, 28);
console.log(koz);

const cathulu = new Monster(50, 90, 40, 70, 15, 30);
console.log(cathulu);

console.log("A Monster approches");
console.log("Prepare to Fight!");
while (koz.health > 0 && cathulu.health > 0) {
  let attackChosen = readlineSync.question("Choose your attack: ");
  if (attackChosen == "slice") {
    cathulu.health -= koz.slice;
  }
  if (attackChosen == "hack") {
    cathulu.health -= koz.hack;
  }
  if (attackChosen == "smash") {
    cathulu.health -= koz.smash;
  }
  console.log(cathulu.health);
}

if (koz.health <= 0) {
  console.log("You were killed by the monster");
}
if (cathulu.health <= 0) {
  console.log("You Defeated the Monster!!!");
}
