console.log('A Monster approches');
console.log('Prepare to Fight!');
console.log('Choose your attack');

class Character{

constructor(){



}
  health(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      this.health= Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
    } 
  armourClass(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      this.armourClass= Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
    } 

}

class player extends Character{
  constructor(health,armourClass){
    super(health);
    super(armourClass);
  }
  slice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.slice= Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  } 
  hack(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.hack= Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  } 
  smash(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.smash= Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  } 

}

class monster extends Character{
  constructor(health,armourClass){
    super(health);
    super(armourClass);
  }
  attack(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.attack= Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  } 



}