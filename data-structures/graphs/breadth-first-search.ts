function GraphBreadthFirstSearch(graph: AdjacencySetGraph, start = 0): void {
  const queue = [start];
  // mark all as unvisited with 0
  const visited = Array(graph.numberOfVertices).fill(false);
  // equivalent to while queue is not empty
  while (queue.length) {
    const firstOnQueue = queue.shift();
    if (visited[firstOnQueue]) {
      continue;
    } else {
      console.log('current Vertex', firstOnQueue);
      // marks it as visited
      visited[firstOnQueue] = true;
    }
    // get all the adjacent vertices for this particularNode and put the on queue
    graph.getAdjacentVertices(firstOnQueue).forEach((vertex) => {
      if (!visited[vertex]) queue.push(vertex);
    });
  }
}
