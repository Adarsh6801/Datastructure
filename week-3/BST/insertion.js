class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root=null;
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const newNode= new Node(value)
        if(this.root===null){
            this.root=newNode;
        }else{

        }
    }
    insertNode(root,newNode){
        if(root.value>newNode.value){
            if(root.left===null){
                root.left=newNode
            }
            else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

}