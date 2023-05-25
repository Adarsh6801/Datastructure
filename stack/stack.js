class Stack{
    constructor(){
        this.items=[]
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }
    print(){
        return this.items.toString()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length
    }
}

const stack = new Stack()
console.log(stack.size());
console.log(stack.print());

stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
console.log(stack.size());

console.log(stack.print());
stack.pop()
console.log(stack.print());
stack.peek()