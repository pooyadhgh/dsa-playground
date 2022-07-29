const LinkedList = require('./linked-list');

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  peek() {
    return this.list.head;
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.deleteHead();
  }

  toArray() {
    return this.list.toArray();
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.toArray());
stack.pop();
console.log(stack.toArray());
console.log('peek', stack.peek());
