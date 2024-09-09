class Graph {
  constructor() {
    // Initialize an empty Map to store the adjacency list
    this.adjacencyList = new Map();
    // Build the graph representation of the chessboard
    this.buildGraph();
  }

  // Add a node (location on board) to the graph with its related moves
  addNode(node, related) {
    this.adjacencyList.set(JSON.stringify(node), related);
  }

  // Get the related moves for a given node
  getRelated(node) {
    return this.adjacencyList.get(JSON.stringify(node));
  }

  // Calculate all possible knight moves from a given position
  getKnightMoves(node) {
    // All possible changes in x and y coordinates for a knight's move
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

    // Apply the changes to the current position to get all possible moves
    let possibleMoves = possibleChanges.map(([dx, dy]) => [
      node[0] + dx,
      node[1] + dy,
    ]);

    // Filter out moves that would be off the chessboard
    let possibleLegalMoves = possibleMoves.filter(
      (item) => item[0] >= 0 && item[0] <= 7 && item[1] >= 0 && item[1] <= 7
    );

    return possibleLegalMoves;
  }

  // Build the graph representation of the chessboard
  buildGraph() {
    // Iterate through all squares on the chessboard
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        // Add each square as a node with its possible knight moves
        this.addNode([i, j], this.getKnightMoves([i, j]));
      }
    }
  }

  // Find the shortest path for a knight from startNode to destinationNode
  knightMoves(startNode, destinationNode) {
    // Map to store visited nodes and their parents (or predecessors)
    let dictionary = new Map();

    // Queue for breadth-first search
    let queue = [];
    queue.push(startNode);
    dictionary.set(startNode.toString(), null);
    let found = false;

    do {
      // Get the next node in the queue
      let current = queue.shift();

      // Check if we've reached the destination space on chess board
      if (current.toString() === destinationNode.toString()) {
        found = true;

        // Reconstruct the path
        let arr = [];

        while (current !== null) {
          // Convert the node back to an array of numbers
          let newArr = current.toString().split(",");
          let stringArr = newArr.map((element) => Number(element));
          arr.unshift(stringArr);
          current = dictionary.get(current.toString());
        }
        return arr;
      }

      // Get all possible moves from the current position
      let currentRelatedArray = this.getRelated(current);

      // Explore each possible move
      currentRelatedArray.forEach((element) => {
        // If the move hasn't been explored yet, add it to the queue
        if (!dictionary.has(element.toString())) {
          queue.push(element);
          dictionary.set(element.toString(), current.toString());
        }
      });
    } while (!found);
  }
}

// Create a new Graph instance representing the chessboard
const chessGraph = new Graph();

// Find the shortest path for a knight from [0, 0] to [7, 6]
console.log(chessGraph.knightMoves([0, 0], [7, 6]));
