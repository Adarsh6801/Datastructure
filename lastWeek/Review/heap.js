class MinHeap{
    constructor() {
        this.heap=[]
    }
    build(array){
        this.heap=array
        if(this.heap.length>0){
            for(let i=Math.floor(this.heap.length/2);i>=0;i--){
                this.heapifyDown(i)               }
        }
    }
    heapifyDown(index){
        let leftIndex=2*index+1;
        let rightIndex=2*index+2;
        let smallestIndex=index;

        if(leftIndex<this.heap.length && this.heap[leftIndex]<this.heap[smallestIndex]){
            smallestIndex=leftIndex;
        }
        if(rightIndex<this.heap.length && this.heap[rightIndex]<this.heap[smallestIndex]){
            smallestIndex=rightIndex;
        }
        if(smallestIndex!=index){
            [this.heap[index],this.heap[smallestIndex]]=[this.heap[smallestIndex],this.heap[index]]
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        
    }
}