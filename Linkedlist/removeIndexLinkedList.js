class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
    getSize(){
        return this.size;
    }
    isEmpty(){
        return this.size===0
    }
    preppend(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }

    insert(value, index){
        if(index==0){
            this.preppend()
        }else{
            const node = new Node(value);
            let prev=this.head
            for(let i=0;i<=index-1;i++){
                prev=prev.next;
            }
            let previousNode=prev.next;
            prev.next=node;
            node.next=previousNode;
            this.size++;
        }
    }

    remove(index){
        let removedNode;
        if(index==0){
            removedNode=this.head;
            this.head=this.head.next;
        }else{
            let prev=this.head
            for(let i=0;i<=index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next;
            prev.next=removedNode.next;
        }
        this.size++;
        return removedNode.value;
    }

    print(){
      if(this.isEmpty()){
        console.log("The list is empty");
      }else{
        let listValues=''
        let curr=this.head;
        while(curr){
            listValues+=`${curr.value} `;
            curr=curr.next;
        }
      }
       
    }
}