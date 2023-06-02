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
        const newNode = new Node(value)
        if(this.root===null){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode;
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value=== value){
                return true;
            }else if(value < root.value){
               return this.search(root.left,value)
            }
            else{
                return this.search(root.right,value)
            }
        }

        
    }
}

const tree = new BinarySearchTree()
tree.insert(89)
tree.insert(9)
tree.insert(49)
tree.insert(8)
tree.insert(0)
tree.insert(11)
console.log(tree.isEmpty());
console.log(tree.search(tree.root, 89)); 
console.log( tree.search(tree.root, 9));
console.log(tree.search(tree.root, 90)); 
console.log(tree.search(tree.root, 10)); 


