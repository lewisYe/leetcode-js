// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
//  

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.minStack = [Infinity]
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  let len = this.minStack.length
  this.stack.push(x)
  this.minStack.push(Math.min(x, this.minStack[len - 1]))
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.minStack.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  let len = this.stack.length
  return this.stack[len - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  let len = this.minStack.length
  return this.minStack[len - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/