var makeBrianDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="briandancer"><img class="brolly" src="https://i.gifer.com/2iHn.gif"></span>')
  this.setPosition(top, left);

};
makeBrianDancer.prototype = Object.create(makeDancer.prototype);

makeBrianDancer.prototype.constructor = makeBrianDancer;

makeBrianDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);   // 'this' gains access to the mydancer scope
  //this.$node.toggle();
};
