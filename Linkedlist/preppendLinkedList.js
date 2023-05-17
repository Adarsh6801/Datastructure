// node class
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

//linked list class
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    // size of the linked list checking function
    getSize(){
        return this.size
    }

    //empty size checking function
    isEmpty(){
        return this.size===0
    }

    // Add the element to the begining of the linked list function
    preppend(value){
        const node = new Node(value)

        // checking the linked is empty or not
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }

    }
}

const list = new LinkedList()
list.preppend(20);
list.preppend(30);