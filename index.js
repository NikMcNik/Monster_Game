console.log('A Monster approches');
console.log('Prepare to Fight!');
console.log('Choose your attack');

class Character{

constructor(){



}
Health(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.health= Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  } 
  

}



