class Graph{
    constructor(){
        this.adjecencyList={}
    }

    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]= new Set()
        }
    }

    addEdge(vertex1, vertex2, bidirectional){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        if(bidirectional){
            this.adjecencyList[vertex2].add(vertex1)
        }
    }

    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex+" -> "+ [...this.adjecencyList[vertex]]);
        }
    }

    hasEdge(vertex1,vertex2){
        return (
            this.adjecencyList[vertex1].has(vertex2) &&
            this.adjecencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1, vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(! this.adjecencyList[vertex]){
            return false
        }
        for(let adjacencyVertex of this.adjecencyList[vertex]){
            console.log(adjacencyVertex);
            this.removeEdge(vertex,adjacencyVertex)
        }
        delete this.adjecencyList[vertex]
    }
}

const graph = new Graph()
graph.addEdge(4,5,true)
graph.addEdge(3,5,false)
graph.addEdge(5,6,false)

graph.display()
graph.removeVertex(4)
graph.display()
