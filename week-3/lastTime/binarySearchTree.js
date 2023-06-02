class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root===null;
    }
    insert(value){
        const newNode= new Node(value)
        if(this.isEmpty()){
            this.root=newNode;
        }else{

        }
    }
    insertNode(root,value){
        
    }
}