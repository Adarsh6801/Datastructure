class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    getSize(){
        return this.size;
    }
    isEmpty(){
        return this.size===0;
    }
    prepend(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }
        else{
            node.next=this.head;
            this.head=node;
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("The linked list is empty");
        }
        else{
            let listElements=[];
            let curr= this.head;
            while(curr){
               listElements.push(curr.value)
                curr=curr.next;
            }
           return listElements;
        }
    }
    
}

const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);


console.log(list.print());
