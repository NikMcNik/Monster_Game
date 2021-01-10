import readlineSync from "readline-sync";

import Player from "./Player";
import Monster from "./Monster";

const koz = new Player(25, 50, 10, 15, 13, 20, 15, 25, 17, 28);
const cathulu = new Monster(20, 40, 40, 70, 5, 15);

console.clear();
console.log("Welcome to your adventure!");
console.log("You have 3 different attacs, slice, hack and smash.");
console.log("Slice is dealing " + koz.determineDamage("slice") + " damage");
console.log("Hack is dealing " + koz.determineDamage("hack") + " damage");
console.log("Smash is dealing " + koz.determineDamage("smash") + " damage");
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

  if (cathulu.isAlive()) {
    cathulu.dealDamage(koz);
  }
}

if (koz.health <= 0) {
  console.log("You were killed by the monster");
}
if (cathulu.health <= 0) {
  console.log("You Defeated the Monster!!!");
}
