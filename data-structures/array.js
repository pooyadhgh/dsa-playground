class Arr {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
}

const array = new Arr();
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.pop();
array.shiftItems(0);
array.delete(1);
console.log(array);
