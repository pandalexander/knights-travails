# Knight's Travails

## Description

This project implements a solution to find the shortest path for a knight on a chessboard between two given positions. It uses a graph representation of the chessboard and employs a breadth-first search algorithm to find the optimal path.

## Purpose

This project was designed to explore and learn the Graph data structure and ways to solve problems with it.

## Features

- Represents the chessboard as a graph

- Calculates all possible knight moves from any position

- Uses an adjacency list to store these possible knight moves

- Finds the shortest path between two positions on the chessboard using BFS

## Implementation Details

The solution is implemented in JavaScript and consists of a `Graph` class with the following key methods:

- `constructor()`: Initializes the graph and builds the chessboard representation

- `addNode(node, related)`: Adds a node (chessboard position) to the graph with its related moves

- `getRelated(node)`: Retrieves the possible moves for a given position

- `getKnightMoves(node)`: Calculates all possible knight moves from a given position

- `buildGraph()`: Constructs the graph representation of the chessboard

- `knightMoves(startNode, destinationNode)`: Finds the shortest path between two positions

## Usage

To use this solution:

1\. Create a new `Graph` instance:

```javascript
const chessGraph = new Graph();
```

2\. Call the `knightMoves` method with start and end positions:

```javascript
console.log(chessGraph.knightMoves([0, 0], [7, 6]));
```

This will output the shortest path for a knight from position [0, 0] to [7, 6] on the chessboard.

## Example Output

```javascript
[
  [0, 0],

  [2, 1],

  [4, 2],

  [6, 3],

  [7, 5],

  [5, 6],

  [7, 6],
];
```

This output represents the sequence of positions the knight needs to move through to reach the destination in the least number of moves.

## Limitations

- The chessboard size is hardcoded to 8x8. This is because the problem focused primarily on a Knight on a chessboard, and the ability to scale the board size was not necessary.

- The solution assumes valid input (positions within the chessboard)

## Possible Future Improvements

- Add input validation for start and end positions

- Make the chessboard size configurable

- Optimize performance for larger board sizes

- Implement a visual representation of the path
