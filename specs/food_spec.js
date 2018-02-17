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

})

// Food should have a name
// Food should have a replenishment value
