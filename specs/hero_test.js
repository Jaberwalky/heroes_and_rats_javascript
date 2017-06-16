var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js')
var Task = require('../task.js')

describe("Hero", function(){

  var hero;
  var banana;
  var pasta;
  var task1;
  var task2;
  var task3;

  beforeEach(function(){
    hero = new Hero("Superman", 10, "Banana");
    banana = new Food("Banana", 5);
    pasta = new Food("Pasta", 7);
    task1 = new Task(4, 10, 2);
    task2 = new Task(7 , 14, 10);
    task3 = new Task(2, 8, 20);
  });

  it("Should have a name", function() {
    assert.strictEqual("Superman", hero.name);
  });

  it("Should have a health value", function(){
    assert.strictEqual(10, hero.health);
  });

  it("Should have a favourite food", function(){
    assert.strictEqual("Banana", hero.favouriteFood);
  });

  it("Should talk and say their name", function(){
    assert.strictEqual("Hi, I'm Superman!", hero.talk());
  });

  it("Should have tasks to complete", function(){
    assert.strictEqual(0, hero.tasks.length);
  });

  it("Should be able to eat and increase health value", function(){
    hero.eat(pasta);
    assert.strictEqual(17, hero.health);
  });

  it("Should eat and health increase by 1.5 if food is favourite", function(){
    hero.eat(banana);
    assert.strictEqual(17.5, hero.health)
  });

  it("Should be able to add task", function(){
    hero.addTask(task1);
    assert.strictEqual(1, hero.tasks.length);
  });

  it("Should sort by difficulty", function(){
    hero.addTask(task1)
    hero.addTask(task2)
    hero.addTask(task3)
    hero.sortBy("difficulty");
    assert.deepEqual(task2, hero.tasks[0])
  })

  it("Should sort by urgency", function(){
    hero.addTask(task1)
    hero.addTask(task2)
    hero.addTask(task3)
    hero.sortBy("urgency");
    assert.deepEqual(task2, hero.tasks[0])
  });

  it("Should sort by reward", function(){
    hero.addTask(task1)
    hero.addTask(task2)
    hero.addTask(task3)
    hero.sortBy("reward");
    assert.deepEqual(task3, hero.tasks[0])
  })
  
  it("Should be able to list by not complete", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    task3.markCompleted();
    assert.deepEqual([task1, task2], hero.showTasksBy("incomplete"));
  });

  it("Should be able to list by complete", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    task3.markCompleted();
    assert.deepEqual([task3], hero.showTasksBy("complete"));
  });

  it("Should lose health when poisoned by food", function(){
    banana.poisoned = true;
    hero.eat(banana);
    assert.strictEqual(5, hero.health);
  })




})