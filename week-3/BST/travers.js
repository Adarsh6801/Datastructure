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
        if(this.root===null){
            this.root=newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
        if(root.value< newNode.value){
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

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            console.log("hi");
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)

        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
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
tree.preOrder(tree.root)
console.log("******************");
tree.inOrder(tree.root)
console.log("******************");

tree.postOrder(tree.root)