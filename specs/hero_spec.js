const assert = require('assert');
const Hero = require('../hero.js');

describe('Hero tests', function (){

  let hero1;

  beforeEach("setup", function(){
      hero1 = new Hero("Tom", "Cheese");
  })

  it('should have a name', function(){
    assert.strictEqual(hero1.name, "Tom");
  });

})

// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete, which leads nicely to -
