const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;


MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(100,75,50,0,2*Math.PI);
  ctx.stroke();
  ctx.fillStyle = 'black';
};

MovingObject.prototype.move = function(vel) {
  return this.pos += vel;
};


Function.prototype.inherits = function(Parentclass) {
  function Surrogate () {}
  Surrogate.prototype = Parentclass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
