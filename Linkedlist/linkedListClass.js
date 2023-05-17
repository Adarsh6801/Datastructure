// Node class
class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

//linked list class
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }

    // empty checking function
    isEmpty(){
        return this.size===0
    }

    // size checking function
    getSize(){
        return this.size
    }
}

// instance of linked list
const list = new LinkedList()

console.log(`The size of the linked list is ${list.getSize()}`);
console.log(`Is the list is empty ${list.isEmpty()}`);