class Graph{
    constructor() {
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2, bidirectional){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        if(bidirectional){
            this.adjacencyList[vertex2].add(vertex1)
        }
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"->"+[...this.adjacencyList[vertex]]);
        }
    }
    hasEdge(vertex1, vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2)
        )
    }
    edgeRemove(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return false;
        }
        for(let adjacencyVertex of this.adjacencyList[vertex]){
            this.removeVertex(vertex,adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }

}