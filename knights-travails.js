class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.buildGraph();
  }

  addNode(node, related) {
    this.adjacencyList.set(JSON.stringify(node), related);
  }

  getRelated(node) {
    return this.adjacencyList.get(JSON.stringify(node));
  }

  getKnightMoves(node) {
    let possibleChanges = [
      [-2, 1],
      [-1, 2],
      [2, 1],
      [1, 2],
      [2, -1],
      [1, -2],
      [-2, -1],
      [-1, -2],
    ];

    let possibleMoves = possibleChanges.map(([dx, dy]) => [
      node[0] + dx,
      node[1] + dy,
    ]);

    let possibleLegalMoves = possibleMoves.filter(
      (item) => item[0] >= 0 && item[0] <= 7 && item[1] >= 0 && item[1] <= 7
    );

    return possibleLegalMoves;
  }

  buildGraph() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.addNode([i, j], this.getKnightMoves([i, j]));
      }
    }
  }

  knightMoves(startNode, destinationNode) {
    let dictionary = new Map();

    let queue = [];
    queue.push(startNode);
    dictionary.set(startNode.toString(), null);
    let found = false;

    do {
      let current = queue.shift();

      if (current.toString() === destinationNode.toString()) {
        found = true;

        let arr = [];

        while (current !== null) {
          let newArr = current.toString().split(",");
          let stringArr = newArr.map((element) => Number(element));
          arr.unshift(stringArr);
          current = dictionary.get(current.toString());
        }
        return arr;
      }

      let currentRelatedArray = this.getRelated(current);

      currentRelatedArray.forEach((element) => {
        if (!dictionary.has(element.toString())) {
          queue.push(element);
          dictionary.set(element.toString(), current.toString());
        }
      });
    } while (!found);
  }
}

const chessGraph = new Graph();

console.log(chessGraph.knightMoves([0, 0], [7, 6]));
