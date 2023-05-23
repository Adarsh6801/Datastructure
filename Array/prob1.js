var shuffle = function(nums, n) {
    let shuffledArray=[]
    for(let i=0,j=n;i<n;i++,j++){
        shuffledArray.push(nums[i]);
        shuffledArray.push(nums[j])
    }
    return shuffledArray
};

console.log(shuffle([1,2,3,4,5,6,7,8],4));