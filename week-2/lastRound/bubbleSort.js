function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i];
            arr[i]=arr[i+1]
            arr[i+1]=temp;
            swapped=true
        }
    }
  } while (swapped);
}
const array=[1,2,4,10,-41,20,31,5]
console.log(array);