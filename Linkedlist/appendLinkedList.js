class Node {
    constructor(value){
        this.value=value;
        this.next=0;
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
    preppend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }
        else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node;
        }
        this.size++;
}

print(){
    if(this.isEmpty()){
        console.log('The linked list is empty');
    }
    else{
        let curr= this.head;
        let listValues=''
        while(curr){
            listValues+=`${curr.value} `;
            curr=curr.next;
        }
        console.log(listValues);
        return listValues
    }
}
}

const list = new LinkedList()
list.print()

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.print()

list.preppend(10);
list.preppend(20);
list.preppend(30);
list.preppend(40);
list.preppend(50);
list.preppend(60);
list.print()