function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let indices = [];
  
    while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      console.log(middleIndex);
      if (target === arr[middleIndex]) {
        // Save the index and continue searching in both directions
        indices.push(middleIndex);
  
        // Search left side
        let left = middleIndex - 1;
        while (left >= leftIndex && arr[left] === target) {
          indices.push(left);
          left--;
        }
  
        // Search right side
        let right = middleIndex + 1;
        while (right <= rightIndex && arr[right] === target) {
          indices.push(right);
          right++;
        }
  
        return indices;
      }
      
      if (target > arr[middleIndex]) {
        leftIndex = middleIndex + 1;
      } else {
        rightIndex = middleIndex - 1;
      }
    }
  
    return console.log("Element is not found");
  }
  
  console.log(binarySearch([1, 2, 3, 4, 5, 5], 2));
  