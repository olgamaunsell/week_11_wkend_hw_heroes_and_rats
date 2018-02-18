const Hero = function(name, favFood){
  this.name = name;
  this.favFood = favFood;
  this.health = 100;
  this.tasks = [];
  this.score = 0;
}

Hero.prototype.talk = function(){
  return `Hello my name is ${this.name} !`;
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

Hero.prototype.removeTask = function(task){
  const itemIndex = this.tasks.indexOf(task);
  this.tasks.splice(itemIndex, 1);
}

Hero.prototype.eatFood = function(food){
   if(food.name === this.favFood){
     this.health += (1.5 * food.replenishmentValue);
   } else {
     this.health += food.replenishmentValue;
   }
}

module.exports = Hero;
