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
    display(){
        console.log(this.items.toString());
    }
    size(){
        return this.items.length
    }
    update(value,pos){
        for(let i=0;i<this.size();i++){
            if(pos===i){
                this.
            }
        }
    }
}

const stack= new Stack()
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)
stack.display()

