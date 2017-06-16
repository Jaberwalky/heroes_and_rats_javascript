var assert = require('assert');
var Task = require('../task.js');

describe("Task", function(){

  var task;

  beforeEach(function(){
    task = new Task(7, 6, 10);
  });

  it("Should have a difficulty level", function(){
    assert.strictEqual(7, task.difficulty);
  });

  it("Should have an urgency level", function(){
    assert.strictEqual(6, task.urgency);
  });

  it("Should have a reward", function(){
    assert.strictEqual(10, task.reward);
  });

  it("Should be able to be marked as completed", function(){
    task.markCompleted();
    assert.strictEqual(true, task.completed);
  })






})