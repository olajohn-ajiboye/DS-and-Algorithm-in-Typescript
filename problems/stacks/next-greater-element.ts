function nextGreaterElement(nums1: number[], nums2: number[]) {
  let length = nums1.length;
  // let l2 = nums2.length
  const result = [];
  // for(let i=0; i< length-1; length-- ){
  //     for(let j=0;j<l2-1; l2--){
  //         if(nums2[j]> nums1[i]){
  //             result.push(nums2[i])
  //             nums2.splice(i,0)
  //         }else{
  //             result.push(-1)
  //         }
  //     }
  //     nums1.pop()
  // }
  // return result

  let j = 0;
  for (let i = 0; i <= nums2.length - 1; i++) {
    if (nums2[i] > nums1[0]) {
      if (i > j) {
        result.push(nums2[i]);
        nums2.splice(i, 1);
      }
    } else {
        result.push(-1)
    }
    j++;
    nums1.splice(0, 1);
  }
  return result;
}
