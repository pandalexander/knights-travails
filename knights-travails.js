//┌─────────────────────┐
//│                     │
//│   The Assignment!   │
//│                     │
//└─────────────────────┘

// Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

// You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:

// knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
// Sometimes there is more than one fastest path. Examples of this are shown below. Any answer is correct as long as it follows the rules and gives the shortest possible path.

// knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]] or knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
// knightMoves([3,3],[0,0]) == [[3,3],[2,1],[0,0]] or knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]
// knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6], [7,7]]

//  * * * * * * * * * * * * * * * * * * * * * * *
//  *              let's get started            *
//  * * * * * * * * * * * * * * * * * * * * * * *

//┌─────────────────────┐
//│                     │
//│      PLANNING!      │
//│                     │
//└─────────────────────┘

// I would like to organize my chess board locations into an Adjacent List graph representation. Each space on the board has a two-way relationship with the spaces the knight can move to, so this adjacent list will allow me to see all of the spaces related to a particular location on the board

// From here on out, I will refer to "location" as "node", as I am using the locations on the board as nodes.

// Here are the initial considerations:

//    1. How will I find my destination node from the beginning node?
//    2. How will track my path while I traverse?
//    3. How will I make sure I am not visiting nodes I have visited before?

// 1. I will find my destination node by doing a BFS (breadth first search) on my graph. When I find my destination node, it will mean that whatever path I used to find that node is the shortest path because I am traversing breadth first.

// I will be using a queue to do the BFS. I will examine the starting nodes related nodes and push them all onto the queue. While I pop them all onto the queue, I will assign each of them a place in my parent dictionary (see 2). Then I will pop each node off the stack and explore them individually. After popping the node off the stack, I will add the node to the set of visited nodes (see 3 below).

// 2. I will trace my paths by using a parent-child dictionary. The dictionary will be made up of key value pairs. For my search, I will examine a node, push the node's children onto the queue, and then add each child node into my dictionary as a key. I will then assign the value for each of these keys to be the parent node (the node currently being examined). This is because I want to track the parent of each node I visit so I can re-trace my steps after I find my destination node. This will allow me to return the shortest path to the destination. This dictionary will be function-specific, so it can be discarded once the function stops and will be based on the parameters given.

// When I find my destination node, I will trace the path using the dictionary. The dictionary will be a Map.

// 3. I will use the same Map to keep track of "visited nodes" to make sure I am not visiting nodes I have visited before. Before visiting and exploring a node, I will check if that node exists in the Map. If it does, I can move on. If not, I will visit and explore the node.

// console.log("Hello, knights travails!");

// Build an example Table and an Adjacent Set

const chessBoard = [];

for (let i = 0; i < 8; i++) {
  let newRow = [];
  for (let j = 0; j < 8; j++) {
    newRow.push([i, j]);
  }
  chessBoard.push(newRow);
}

console.table(chessBoard);

console.log(chessBoard[0][1]);

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
}

const chessGraph = new Graph();

console.log(chessGraph.adjacencyList);
