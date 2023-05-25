function insertionSort(arr){
    for(let i=1;i<=arr.length-1;i++){
        let insertElement = arr[i];
        let j= i-1;
        while(j>=0 && arr[j]>insertElement){
            arr[j+1]=arr[j]
            j=j-1;
        }
        arr[j+1]=insertElement;
    }
}


const array=[1,-8,5,2,10,4,-11]

insertionSort(array)

console.log(array);