var assert = require('assert');
var Food = require('../food.js');

describe("Food", function(){

  var food;

  beforeEach(function() {
    food = new Food("Banana", 5);
  })

  it("Should have a name", function(){
    assert.strictEqual("Banana", food.name);
  });

  it("Should have a replenishment value", function(){
    assert.strictEqual(5, food.replenishmentVal);
  });





})