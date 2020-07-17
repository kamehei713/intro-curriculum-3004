'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
function multi(numbers){
  let result = 0;
  for (let num of numbers){
    result *= num;
  }
}

module.exports = {
  add:add,
  multi:multi,
};
