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

Hero.prototype.sortTasksByDifficulty = function(){

  return this.tasks.sort(function(task1, task2){
    return task2.difficulty - task1.difficulty;
  })
}

Hero.prototype.sortTasksByUrgency = function(){

  return this.tasks.sort(function(task1, task2){
    return task2.urgency - task1.urgency;
  })
}

Hero.prototype.sortTasksByReward = function(){

  return this.tasks.sort(function(task1, task2){
    return task2.reward - task1.reward;
  })
}

Hero.prototype.completeTask = function(taskToComplete){
  if (!this.tasks.includes(taskToComplete))
    return task.description + " is not one of " + this.name + "s outstanding tasks";

  this.tasks.forEach(function(task){
  if(task === taskToComplete){
    task.setComplete()
    this.score += task.reward;
  }
  }.bind(this));
}


Hero.prototype.completedTasks = function(){

  return this.tasks.filter(function(task){
    return task.isComplete() === true;
  })
}


Hero.prototype.inCompleteTasks = function(){

  return this.tasks.filter(function(task){
    return task.isComplete() === false;
  })
}
module.exports = Hero;
