const Hero = function(name, favFood){
  this.name = name;
  this.favFood = favFood;
  this.health = 0;
  this.tasks = [];
}

Hero.prototype.talk = function(){
  return `Hello my name is ${this.name} !`;
}

module.exports = Hero;
