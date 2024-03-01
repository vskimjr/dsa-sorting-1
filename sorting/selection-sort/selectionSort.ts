/** Sort in-place and return sorted array. */

function selectionSort(nums: number[]): number[] {

  if (nums.length === 0) return nums;

  for (let i = 0; i < nums.length; i++){
    let minimum = nums[i]
    for (let j = i + 1; j < nums.length; j ++){
      if (nums[j] < minimum) {
        let placeholder = nums[i];
        minimum = nums[j];
        nums[i] = nums[j];
        nums[j] = placeholder;
      }
    }
  }

  return nums;
}

export { selectionSort };

// [5, 1, 3, 2, 4]
// 5
// .. 1
// [1,5,3,2,1]