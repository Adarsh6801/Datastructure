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
    display(){
        console.log(this.items.toString());
    }
}

const queue= new Queue()
queue.enqueue(8)
queue.enqueue(7)
queue.enqueue(6)
queue.enqueue(5)
queue.enqueue(4)
queue.display()
queue.dequeue()
queue.display()