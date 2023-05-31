class Node {
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
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
        const newNode= new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(root.value>newNode.value){
            if(root.left===null){
                root.left= newNode
            }else{
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
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(root.value>value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)

        }
    }

}

const tree = new BinarySearchTree()
tree.insert(40)
tree.insert(10)
tree.insert(20)
tree.insert(0)
tree.insert(4)
tree.preorder(tree.root)
