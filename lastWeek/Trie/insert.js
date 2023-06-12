class TrieNode{
    constructor(){
        this.children= new Map();
        this.isEndOfWord=false;
    }
}

class Trie{
    constructor() {
        this.root= new TrieNode()
    }
    insert(word){
        let current= this.root;
        for(let i=0; i<=word.length; i++){
            const char=word[i]
            if(!current.children.has(char)){
                current.children.set(char, new TrieNode())
            }
            current=current.children.get(char)
        }
        current.isEndOfWord=true;
    }
}