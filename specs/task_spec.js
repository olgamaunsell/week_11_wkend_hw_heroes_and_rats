const assert = require('assert');
const Task = require('../task.js');

describe('Task tests', function (){
  let task1;

  beforeEach("setup", function(){
      task1 = new Task("Eat", "Easy", "Medium", 10);
  })

  it("should have a description", function(){
    assert.strictEqual(task1.description, "Eat");
  });

  it("should have a difficulty level", function(){
    assert.strictEqual(task1.difficulty, "Easy");
  });

  it("should have a urgency level", function(){
    assert.strictEqual(task1.urgency, "Medium");
  });

  it("should have a reward level", function(){
    assert.strictEqual(task1.reward, 10);
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
// A task has a reward - Numeric
// A task should be able to be marked as completed
