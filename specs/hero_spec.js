const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');
const Food = require('../food.js');

describe('Hero tests', function (){

  let hero1;

  beforeEach("setup", function(){
      hero1 = new Hero("Sir ChocoLot", "Fruit & Nut");

      foodCheese = new Food("Cheese", 15);
      foodFruitNut = new Food("Fruit & Nut", 100);
      taskFire = new Task("Fire Rescue", "Hard", "High", 1000);
      taskKillRat = new Task("Kill Rat", "Moderate", "Medium", 2000);

  })

  it("should have a name", function(){
    assert.strictEqual(hero1.name, "Sir ChocoLot");
  });

  it("should have a favourite food", function(){
    assert.strictEqual(hero1.favFood, "Fruit & Nut");
  });

  it("should have a score starting at zero", function(){
    assert.strictEqual(hero1.score, 0);

  });

  it("should talk saying it's name", function(){
    const talk = hero1.talk();
    assert.strictEqual(talk, "Hello my name is Sir ChocoLot !");
  });

  describe('Health tests', function (){
    it('should have health starting at 100', function(){
      assert.strictEqual(hero1.health, 100);
    });

  })

  describe('Task tests', function (){
    it('should have zero tasks at start', function(){
      assert.strictEqual(hero1.tasks.length, 0);
    });

    it('should be able to add a task', function(){
      hero1.addTask(taskFire);
      assert.strictEqual(hero1.tasks.length, 1);
    });

    it('should be able to remove a task', function(){
      hero1.addTask(taskFire);
      hero1.addTask(taskKillRat);

      hero1.removeTask(taskFire);
      assert.strictEqual(hero1.tasks.length, 1);
    });

    // it("should return error if task to complete is not one of hero's tasks", function(){
    //
    //   const actual = hero1.eatFood(taskEat, foodCheese);
    //   assert.strictEqual(actual, "Eat Food is not one of Toms outstanding tasks");
    // });

  });

  describe('Eat tests', function (){
    it('should be able to eat food, and health should go up by the replenishment value', function(){

      hero1.eatFood(foodCheese);
      assert.strictEqual(hero1.health, 115);

    });

    it('should be able to eat favourite food, and health should go up by the 1.5 * replenishment value', function(){

      hero1.eatFood(foodFruitNut);
      assert.strictEqual(hero1.health, 250);

    });

  })


})


// A Hero has a collection of tasks to complete, which leads nicely to -
// A hero should be able to sort their tasks by difficulty, urgency or reward.
// A hero should be able to view tasks that are marked as completed or incomplete.
