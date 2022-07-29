class LinkedList {
  constructor() {
    this.head = null;
    this.tale = null;
  }

  append(value) {
    const newElement = { value, next: null };

    if (this.tale) {
      this.tale.next = newElement;
    }

    this.tale = newElement;

    if (!this.head) {
      this.head = newElement;
    }
  }

  prepend(value) {
    const newElement = { value, next: this.head };

    this.head = newElement;

    if (!this.tale) {
      this.tale = newElement;
    }
  }

  insertAfter(value, afterValue) {
    const existingElement = this.find(afterValue);

    if (existingElement) {
      const newElement = { value, next: existingElement.next };
      existingElement.next = newElement;
    }
  }

  find(value) {
    if (!this.head) return;

    let currentElement = this.head;

    while (currentElement) {
      if (currentElement.value === value) {
        return currentElement;
      } else {
        currentElement = currentElement.next;
      }
    }

    return;
  }

  delete(value) {
    if (!this.head) return;

    // If the value equals to the head
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    // If the value is somewhere between head and tale
    let currentElement = this.head;

    while (currentElement.next) {
      if (currentElement.next.value === value) {
        currentElement.next = currentElement.next.next;
      } else {
        currentElement = currentElement.next;
      }
    }

    // If the value equals to the tale
    if (this.tale.value === value) {
      this.tale = currentElement;
    }
  }

  deleteHead() {
    if (!this.head) return;

    const deletedItem = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tale = null;
    }

    return deletedItem;
  }

  toArray() {
    const elemenets = [];
    let currentElement = this.head;

    while (currentElement) {
      elemenets.push(currentElement);
      currentElement = currentElement.next;
    }

    return elemenets;
  }
}

const linkedList = new LinkedList();

linkedList.append('a');
linkedList.append('b');
linkedList.append('c');
linkedList.prepend(1);
linkedList.delete(1);
linkedList.insertAfter('z', 'a');

// console.log('toArray', linkedList.toArray());
// console.log('find', linkedList.find('a'));

module.exports = LinkedList;
