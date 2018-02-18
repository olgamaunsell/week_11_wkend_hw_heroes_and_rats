const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');
const Food = require('../food.js');

describe('Hero tests', function (){

  let hero1;
  let foodCheese;
  let foodFruitNut;
  let taskHelpLady;
  let taskFire;

  beforeEach("setup", function(){
      hero1 = new Hero("Sir ChocoLot", "Fruit & Nut");

      foodCheese = new Food("Cheese", 15);
      foodFruitNut = new Food("Fruit & Nut", 100);
      taskHelpLady = new Task("Help lady cross the road", 1, 10, 500);
      taskKillRat = new Task("Kill Rat", 2, 30, 1000);
      taskFire = new Task("Fire Rescue", 3, 20, 2000);

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

    it('should be able to sort tasks by difficulty', function(){
      hero1.addTask(taskKillRat);
      hero1.addTask(taskFire);
      hero1.addTask(taskFire);
      hero1.addTask(taskHelpLady);
      hero1.addTask(taskKillRat);
      hero1.addTask(taskHelpLady);
      hero1.addTask(taskKillRat);
      hero1.addTask(taskHelpLady);
      hero1.addTask(taskFire);
      const actual = hero1.sortTasksByDifficulty();
      const expected = [taskFire, taskFire, taskFire, taskKillRat, taskKillRat, taskKillRat, taskHelpLady, taskHelpLady, taskHelpLady ]
      assert.deepStrictEqual(actual, expected);
    });

    it('should be able to sort tasks by urgency', function(){
      hero1.addTask(taskHelpLady);
      hero1.addTask(taskKillRat);
      hero1.addTask(taskFire);

      const actual = hero1.sortTasksByUrgency();
      const expected = [taskKillRat, taskFire, taskHelpLady ]
      assert.deepStrictEqual(actual, expected);
    });

    it('should be able to sort tasks by reward', function(){
      hero1.addTask(taskHelpLady);
      hero1.addTask(taskFire);
      hero1.addTask(taskKillRat);

      const actual = hero1.sortTasksByReward();
      const expected = [taskFire, taskKillRat,  taskHelpLady ]
      assert.deepStrictEqual(actual, expected);
    });


    it('should be able to view tasks that are marked as complete', function(){
      hero1.addTask(taskHelpLady);
      hero1.addTask(taskFire);
      hero1.addTask(taskKillRat);
      hero1.completeTask(taskHelpLady);

      const actual = hero1.completedTasks();
      const expected = [taskHelpLady ]
      assert.deepStrictEqual(actual, expected);
    });

    it('should be able to view tasks that are marked as incomplete', function(){
      hero1.addTask(taskHelpLady);
      hero1.addTask(taskFire);
      hero1.addTask(taskKillRat);
      hero1.completeTask(taskHelpLady);

      const actual = hero1.inCompleteTasks();
      const expected = [taskFire, taskKillRat]
      assert.deepStrictEqual(actual, expected);
    });

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


// A hero should be able to view tasks that are marked as completed or incomplete.
