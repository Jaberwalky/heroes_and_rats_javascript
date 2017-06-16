var assert = require('assert')
var Rat = require('../rat.js')
var Food = require('../food.js')

describe("Rat", function(){

  var rat;
  var banana;

  beforeEach(function(){
    rat = new Rat();
    banana = new Food("Banana", 5);
  });

  it("Should be able to touch food and poison it", function(){
    rat.touchFood(banana);
    assert.strictEqual(true, banana.poisoned);
  });











})