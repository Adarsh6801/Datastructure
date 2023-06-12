class Node{
    constructor(value) {
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
        return this.root===null;
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode;
        }else{

        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(newNode.left===null){
                root.left=newNode;
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(newNode.right===null){
                root.right=newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value===value){
                return true;
            }else if(value<root.value){
                this.search(root.left,value)
            }else{
                this.search(root.right,value)
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

    preOrder(root){
        console.log(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
    inOrder(root){
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }
    postOrder(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value);
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return root;
        }
        if(value< root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,value)
        }
        return root
    }
    findClosestValue(target){
        let closest=this.root.value;
        let currentNode= this.root;
        while(currentNode!=null){
            if(Math.abs(target-currentNode.value)<Math.abs(target-closest)){
                closest=currentNode.value
            }
            if(target<currentNode.value){
                currentNode=currentNode.left;
            }
            else if(target>currentNode.value){
                currentNode=currentNode.right;
            }else{
                 break
            }
        }
        return closest;
    }

    isBst(){
        return this.isBstUtil(this.root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)
    }
    isBstUtil(node,min,max){
        if(node===null){
            return true;
        }if(node.value<=min || node.value>=max){
            return false
        }
        return(
            this.isBstUtil(root.left,min,node.value) &&
            this.isBstUtil(root.right,node.value,max)
        )
    }
}