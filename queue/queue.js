class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        this.items.shift()
    }
    print(){
        console.log(this.items.toString());
    }
    isEmpty(){
        return this.items.length===0
    }
    size(){
        return this.items.length
    }
    peek(){
        console.log(this.items[0]);
    }
}


const queue= new Queue()
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)
queue.enqueue(9)
queue.print()
queue.dequeue()
queue.print()