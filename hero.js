const Hero = function(name, favFood){
  this.name = name;
  this.favFood = favFood;
  this.health = 0;
  this.tasks = [];
}

Hero.prototype.talk = function(){
  return `Hello my name is ${this.name} !`;
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

module.exports = Hero;
