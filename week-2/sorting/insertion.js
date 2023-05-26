function insertionSort(arr){
    for(let i=1; i<= arr.length-1;i++){
        let inserElement=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>inserElement){
            arr[j+1]=arr[j]
            j=j-1;
        }
        arr[j+1]=inserElement
    }
}

const array=[1,5,-1,-5,0]
insertionSort(array)
console.log(array);