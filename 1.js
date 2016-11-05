/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. */
var twoSum = function(nums, target) {
    for(var i = 0;i<nums.length-1;i++){
        for(var j =i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
};


思路：使用双层循环，让数组里面的值两两相加，
	  不过这样做效率很慢，时间复杂度为O(n^2)
	  暂时没有很好的思路，下次刷题好好想想。