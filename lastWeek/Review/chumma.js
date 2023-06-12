class MinHeap{
    constructor(){
        this.heap=[]
    }
    build(array){
        this.heap=array;
      for(let i=Math.floor(this.heap.length/1);i>=0;i--){
        
      }
    }
    heapifyDown(index){
        let leftIndex= 2*index+1;
        let rightIndex= 2*index+2;
        let smallestIndex=index;
        if( leftIndex< this.heap.length && this.heap[leftIndex]<this.heap[smallestIndex]){
            smallestIndex=leftIndex
        }
        if(rightIndex< this.heap.length && this.heap[rightIndex]<this.heap[smallestIndex]){
            smallestIndex=rightIndex
        }
    }
}