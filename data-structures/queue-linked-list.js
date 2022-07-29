const LinkedList = require('./linked-list');

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.deleteHead();
  }

  toArray() {
    return this.list.toArray();
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.toArray());
queue.dequeue();
console.log(queue.toArray());
