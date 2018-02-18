const assert = require('assert');
const Task = require('../task.js');
// const Food = require('../food.js');

describe('Task tests', function (){
  let task1;

  beforeEach("setup", function(){
      // food1 = new Food("Fruit & Nut", 100);
      task1 = new Task("Fire Rescue", 3, 30, 1000);
  })

  it("should have a description", function(){
    assert.strictEqual(task1.description, "Fire Rescue");
  });

  it("should have a difficulty level", function(){
    assert.strictEqual(task1.difficulty, 3);
  });

  it("should have a urgency level", function(){
    assert.strictEqual(task1.urgency, 30);
  });

  it("should have a reward level", function(){
    assert.deepStrictEqual(task1.reward, 1000);
  });

  it("should start as not complete", function(){
    assert.strictEqual(task1.isComplete(), false);
  });

  it("should be able to mark task as complete", function(){
    task1.setComplete();
    assert.strictEqual(task1.isComplete(), true);
  });

})


// A task has a description
// A task has a difficulty level
  // Easy, Moderate, Hard
// A task has an urgency level
  // Low, Medium, High
// A task has a reward - Numeric or Food ?
// A task should be able to be marked as completed
