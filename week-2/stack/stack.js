class Stack{
    constructor(){
        this.items=[];
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }
    display(){
        console.log(this.items.toString());
    }
}

const stack= new Stack()
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.display()
stack.pop()
stack.display()