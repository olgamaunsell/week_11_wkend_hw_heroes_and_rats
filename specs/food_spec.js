const assert = require('assert');
const Food = require('../food.js');

describe('Food tests', function (){

  let cheese;

  beforeEach("setup", function(){
      cheese = new Food("Cheese", 15);
  })

  it("should have a name", function(){
    assert.strictEqual(cheese.name, "Cheese");
  });

  it("should have a replenishment value", function(){
    assert.strictEqual(cheese.replenishmentValue, 15);
  });

})
