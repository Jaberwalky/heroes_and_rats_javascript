var _ = require('lodash')

var Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype = {

  talk: function(){
    return "Hi, I'm " + this.name + "!";
  },

  eat: function(food){
    if (!food.poisoned){
    food.name === this.favouriteFood ? this.health += ( food.replenishmentVal * 1.5 ) : this.health += food.replenishmentVal;
    } else { this.health -= 5 };
  },
  addTask: function(task){
    this.tasks.push(task);
  },

  sortBy: function(category){
    this.tasks = _.reverse(_.sortBy(this.tasks, [category]));
  },

  showTasksBy: function(status){
    var stat;
    status === "complete" ? stat = true : stat = false;
    return _.filter(this.tasks, ['completed', stat]);
  }



}

module.exports = Hero;