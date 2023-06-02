class Node{
    constructor(value) {
        this.value=value;
        this.right=null;
        this.left=null;
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
            this.root=newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode;
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode;
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(root.value<value){
                return this.search(root.right, value)
            }else{
                return this.search(root.left, value)
            }
        }
    }

    min(root){
        if(root){
            if(root.left===null){
            console.log(root.value);
            }else{
                this.min(root.left)
            }
        }
    }

    max(root){
        if(root){
            if(root.right===null){
                 console.log(root.value);
            }else{
                this.max(root.right)
            }
        }
    }
}

const tree = new BinarySearchTree()

tree.insert(30)
tree.insert(0)
tree.insert(20)
tree.insert(45)
tree.insert(11)
tree.insert(-1)
console.log(tree.search(tree.root, 8));
console.log(tree.search(tree.root, 0));
console.log(tree.search(tree.root, -1));
console.log(tree.search(tree.root, 999));
tree.min(tree.root)
tree.max(tree.root)
