class Node {
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root===null){
            this.root=newNode;
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
}

const tree = new BinarySearchTree()
console.log(tree.isEmpty());
tree.insert(50)
tree.insert(20)
tree.insert(150)
tree.insert(5)
console.log(tree.isEmpty());



