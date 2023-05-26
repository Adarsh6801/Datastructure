class HashTable{
    constructor(size){
        this.table= new Array(size);
        this.size=size
    }
    hash(key){
        let total=0;
        for(let i=0;i<=key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        let index = this.hash(key)
        if(index){
            return console.log(this.table[index]);
        }
    }
    remove(key){
        let index=this.hash(key)
        this.table[index]=undefined
    }
    display(){
        for(let i=0;i<=this.table.length-1;i++){
            return console.log(i,this.table[i]);
        }
    }
}