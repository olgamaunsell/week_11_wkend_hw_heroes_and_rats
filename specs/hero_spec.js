const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');

describe('Hero tests', function (){

  let hero1;

  beforeEach("setup", function(){
      hero1 = new Hero("Tom", "Cheese");
      taskEat = new Task("Eat Food", "Easy", "Medium", 100);
  })

  it("should have a name", function(){
    assert.strictEqual(hero1.name, "Tom");
  });

  it("should have a favourite food", function(){
    assert.strictEqual(hero1.favFood, "Cheese");
  });

  it("should talk saying it's name", function(){
    const talk = hero1.talk();
    assert.strictEqual(talk, "Hello my name is Tom !");
  });

  it('should have a favourite food', function(){
    assert.strictEqual(hero1.favFood, "Cheese");
  });

  describe('Health tests', function (){
    it('should have health starting at zero', function(){
      assert.strictEqual(hero1.health, 0);
    });

  })


  describe('Task tests', function (){
    it('should have zero tasks at start', function(){
      assert.strictEqual(hero1.tasks.length, 0);
    });

    it('should have be able to add a task', function(){
      hero1.addTask(taskEat);
      assert.strictEqual(hero1.tasks.length, 1);
    });

  })



})


// A Hero has a collection of tasks to complete, which leads nicely to -
