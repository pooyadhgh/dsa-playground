class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.unshift(value);
  }

  dequeue() {
    return this.items.pop();
  }

  toArray() {
    return this.items;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.toArray());
queue.dequeue();
console.log(queue.toArray());
