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
        return this.size
    }
    isEmpty(){
        return this.size===0;
    }
    preppend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next=this.head;
            this.head=node;
        }
        this.size++
    }
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            let prev= this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node
        }
        this.size++;
    }
    insert(value,index){
        if(index===0){
            this.preppend(value)
        }else if (index<this.getSize()){
            const node = new Node(value)
            let prev= this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next;
            prev.next=node;
            this.size++; 
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("The linked is empty");
        }else{
            let curr=this.head;
            let listValues='';
            while(curr){
                listValues+=`${curr.value} `;
                curr=curr.next;
            }
            console.log(listValues);
        }
    }
}