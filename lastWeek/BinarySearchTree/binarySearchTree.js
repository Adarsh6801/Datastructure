class Node{
    constructor(value) {
        this.value=value
        this.right=null;
        this.left=null
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
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
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

    search(root, value){
        if(!root){
            return false;
        }else{
            if(root.value===value){
                return true
            }else if(value< root.value){
                this.search(root.left, value)
            }else{
                this.search(root.right, value)
            }
        }
    }

    min(root){
        if(root){
            if(root.left=== null){
               console.log(root.value);
            }
            else{
                this.min(root.left)
            }
        }
    }
    max(root){
        if(root)
        if(root.right=== null){
            console.log(root.value);
        }else{
            this.max(root.right)
        }
    }

    // traversals
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
// delete node
   delete(value){
    this.root=this.deleteNode(this.root, value)
   }

   deleteNode(root,value){
    if(root===null){
        return root
    }
    if(value< root.value){
        root.left=this.deleteNode(root.left, value)
    }else if(value> root.value){
        root.right=this.deleteNode(root.right, value)
    }
    else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }
        root.value=this.min(root.right)
        root.right=this.deleteNode(root.right, value)
    }
    return root
   }

// closest value of the given number

findClosestValue(target){
    let closest=this.root.value
    let currentNode=this.root;

    while(currentNode!=null){
        if(Math.abs(target-currentNode.value) < Math.abs(target-closest)){
            closest=currentNode.value
        }   
        if(target<currentNode.value){
            currentNode=currentNode.left
        }else if(target>currentNode.value){
            currentNode=currentNode.right
        }else{
            break;
        }
    }
    return closest
}

//Validating the is binary Search tree

isBst(){
    return this.BstUtil(this.root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)
}
BstUtil(node,min,max){
    if(node===null){
        return true
    }
    if(node.value<=min || node.value>=max){
        return false;
    }
    return(
        this.BstUtil(node.left,min,node.value) &&
        this.BstUtil(node.right,node.value,max)
    )
}
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
console.log(tree.search(5));
console.log(tree.search(25));
tree.min(tree.root)
tree.max(tree.root)
tree.inOrder(tree.root)
tree.preOrder(tree.root)
tree.postOrder(tree.root)

console.log("++++++");
console.log(tree.findClosestValue(1));
console.log(tree.isBst());