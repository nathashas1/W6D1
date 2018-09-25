function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function sum(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}



class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");


Function.prototype.myBind = function() {
  let newFunc = arguments[0];
  let that = this;
  let bindArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    let callArgs = Array.from(arguments);
    that.apply(newFunc, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBindRest = function(...arr) {
  let newFunc = arr.shift();
  let originalFn = this;
  let bindArgs = arr;
  return function(...inner) {

    originalFn.apply(newFunc, bindArgs.concat(inner));
  };
};


function curriedSum(numArgs) {
  let numbers =[];

  const curry =  function(num) {
      numbers.push(num);
      if( numbers.length < numArgs) {
        return curry;
      } else {
        let total = 0;

        for (let i = 0; i < numbers.length; i++) {
          total += numbers[i];
        }
        return total;
      }
    };
  return curry;
}

// console.log(curriedSum(2)(2)(3));


Function.prototype.curry = function(numArgs) {
  let numbers =[];
  let that = this;

   function _curry(num) {
      numbers.push(num);
      if (numbers.length === numArgs) {
        return that.apply(null, numbers);
      } else {
        return _curry;
      }
    }
  return _curry;
};

function sum() {
  let result = 0;
  args = Array.from(arguments);
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}



Function.prototype.curryB = function(numArgs) {

  let that = this;

  const _curry = function(...nums) {

    if (nums.length === numArgs) {
      return that.call(null, ...nums);
    } else {
      return _curry;
    }
  };
  return _curry;
};

function sum3(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sum.curry(4)(2)(2)(3)(42342));
