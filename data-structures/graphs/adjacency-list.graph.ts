class GraphNode<T = number> {
  constructor(public vertexId: T, public adjacencyList = new Set<T>()) {}

  addEdge(id: T) {
    if (id === this.vertexId) throw Error("Node can't be adjacent to itself");
    this.adjacencyList.add(id);
  }

  getAdjacentVertices() {
    // @ts-ignore
    return Array.from(this.adjacencyList).sort((a, b) => a - b);
  }
}

class AdjacencySetGraph {
  verticesList: GraphNode[];
  constructor(
    public numberOfVertices: number,
    public directed: boolean = false
  ) {
    for (let i = 0; i < numberOfVertices; i++) {
      this.verticesList[i] = new GraphNode(i);
    }
  }

  addEdge(v1: number, v2: number, weight = 1) {
    this.verticesList[v1].addEdge(v2);
    if (!this.directed) this.verticesList[v2].addEdge(v1);
  }
  getAdjacentVertices(vertexId: number) {
    return this.verticesList[vertexId].getAdjacentVertices();
  }

  getIndegree(vertexId: number) {
    let degreeCount = 0;
    for (let i = 0; i < this.numberOfVertices; i++) {
      if (this.getAdjacentVertices(i).indexOf(vertexId)) {
        degreeCount++;
      }
    }
  }
}
