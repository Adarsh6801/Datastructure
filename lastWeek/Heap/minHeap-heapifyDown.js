class MinHeap{
    constructor(){
        this.heap=[]
    }

    build(array){
        this.heap=array
        if(this.heap.length>0){
            for(let i=Math.floor(this.heap.length/2);i>=0;i--){
                this.heapifyDown(i)
            }
        }
    }
    heapifyDown(index){
        const leftIndex=2*index+1;
        const rightIndex=2*index+2;
        let smallestIndex=index;

        if(leftIndex<this.heap.length && this.heap[leftIndex]<this.heap[smallestIndex]){
            smallestIndex=leftIndex;
        }
        if(rightIndex<this.heap.length && this.heap[rightIndex]<this.heap[smallestIndex]){
            smallestIndex=rightIndex;
        }

        if(smallestIndex!=index){
            [this.heap[index],this.heap[smallestIndex]]=[this.heap[smallestIndex],this.heap[index]]
            this.heapifyDown(smallestIndex)
        }
    }
}

const heap=new MinHeap()
heap.build([10,2,4,8,9])