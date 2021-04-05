// Adjacency Matrix Graph

class AdjacencyMatrixGraph {
  matrix: number[][];

  constructor(public numberOfVertices = 0, public directed: boolean = false) {
    this.matrix = Array(numberOfVertices)
      .fill(0)
      .map(() => Array(numberOfVertices).fill(0));
  }

  private isInValidVertices(v1: number, v2?: number) {
    if (!v2) {
      if (v1 < 0 || v1 >= this.numberOfVertices) {
        console.error('Bad idea');
        return false;
      }
    } else {
      if (
        v1 < 0 ||
        v1 >= this.numberOfVertices ||
        v2 < 0 ||
        v2 >= this.numberOfVertices
      ) {
        console.log('Bad idea');
        return false;
      }
    }
  }

  /**
   *
   * @param v1 {number} - Vertex1
   * @param v2 {number}  - Vertex2
   * @param weight {number} - Weight of the edge between Vertex1 and Vertex2
   */
  addEdge(v1: number, v2: number, weight: number = 1): void {
    // ensure valid vertexes. i.e within range
    if (!this.isInValidVertices(v1, v2)) return;

    this.matrix[v1][v2] = weight;
    if (this.directed === false) {
      this.matrix[v2][v1] = weight;
    }
  }

  getAdjacentVertices(vertex: number) {
    // ensure vertex is within range
    if (!this.isInValidVertices(vertex)) return;
    const adjacentVertices = [];
    // map through the number of vertices. If there is an edge indicated by value greater than 0
    // push into adjacentMatrix
    for (let i = 0; i < this.numberOfVertices; i++) {
      if (this.matrix[vertex][i] > 0) adjacentVertices.push(i);
    }
    return adjacentVertices;
  }

  /**
   * Gets the weight between two edges
   * @param v1 vertex1
   * @param v2 vertex2
   */
  getEdgeWeight(v1: number, v2: number) {
    if (!this.isInValidVertices(v1, v2)) return;
    return this.matrix[v1][v2];
  }
  getInDegree(vertex: number) {
    if (!this.isInValidVertices(vertex)) return;
    let indegree = 0;
    for (let i = 0; i < this.numberOfVertices; i++) {
      if (this.matrix[i][vertex] > 0) indegree++;
    }
    return indegree;
  }

  display() {
    this.matrix.forEach((vertices) => {
      vertices.forEach((vertex) => {
        console.log(vertex, `${this.getAdjacentVertices(vertex)}`);
      });
    });
  }
}

export { AdjacencyMatrixGraph };
