/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++)
    {
        let validate = nums.shift()
        for(let j=0;j< nums.length;j++){
            if((validate+nums[j]) == target)
            {
                return [i,i+j+1]
            }  
        }
        nums.push(validate)
    }
};

console.log(twoSum([2,7,11,15],9)); //Output: [0,1]
console.log(twoSum([3,2,4],6)); //Output: [1,2]
console.log(twoSum([3,3],6)); //Output: [0,1]
