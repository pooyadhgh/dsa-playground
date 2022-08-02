class Node {
  constructor(value, parentNode = null) {
    this.parent = parentNode;
    this.children = [];
    this.value = value;
  }

  addNode(value) {
    const segments = value.split('/');

    if (segments.length === 0) return;

    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.children.push(node);
      return { node, index: this.children.length - 1 };
    }

    const existingChildNode = this.children.find(
      (item) => item.value === segments[0]
    );

    if (existingChildNode) {
      existingChildNode.addNode(segments.slice(1).join('/'));
    } else {
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join('/'));
      this.children.push(node);
      return { node, index: this.children.length - 1 };
    }
  }

  removeNode(value) {
    const segments = value.split('/');

    if (segments.length === 0) return;

    if (segments.length === 1) {
      const existingNodeIndex = this.children.findIndex(
        (item) => item.value === segments[0]
      );

      if (existingNodeIndex < 0) throw new Error('Could not find the child');

      this.children.splice(existingNodeIndex, 1);
    }

    if (segments.length > 1) {
      const existingChildNode = this.children.find(
        (item) => item.value === segments[0]
      );

      if (!existingChildNode) throw new Error('Could not find the child');

      existingChildNode.removeNode(segments.slice(1).join('/'));
    }
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  add(path) {
    this.root.addNode(path);
  }

  remove(path) {
    this.root.removeNode(path);
  }
}

const user = new Tree('root');

user.add('/user/username/Pooya');
user.add('/cart/Product 1');
user.add('/cart/Product 2');
user.add('/cart/Product 3');

user.remove('/cart/Product 3');

console.log(user);
