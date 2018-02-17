const Task = function(description, difficulty, urgency, reward){
  this.description =  description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = false;
}

Task.prototype.isComplete = function(){
  return this.complete;
}

Task.prototype.setComplete = function(){
  this.complete = true;
}

module.exports = Task;
