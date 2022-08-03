class Graph {
  constructor() {
    this.nodes = {};
    this.edges = {};
  }

  addNode(id, value) {
    this.nodes[id] = value;
  }

  addEdge(startNode, endNode) {
    if (
      this.edges[startNode] &&
      this.edges[startNode].indexOf(endNode) === -1
    ) {
      this.edges[startNode].push(endNode);
    } else {
      this.edges[startNode] = [endNode];
    }
  }

  removeNode(nodeId) {
    this.nodes[nodeId] = undefined;
    Reflect.deleteProperty(this.edges, nodeId);

    for (const edgeId in this.edges) {
      let i = 0;

      for (const endNode of this.edges[edgeId]) {
        if (endNode === nodeId) {
          this.edges[edgeId].splice(i, 1);
          break;
        }

        i++;
      }
    }
  }
}

const graph = new Graph();

graph.addNode(1, 'A');
graph.addNode(2, 'B');
graph.addNode(3, 'C');

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 2);

graph.removeNode(2);

console.log(graph);
