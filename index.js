function part1(arr, target) {
  // left 表示在arr 数组中下标小于等于left 的都是满足小于等于target的范围
  let left = -1;
  // right 表示在arr 数组中下标大于等于right的 都是满足大于等于target的范围
  let right = arr.length;
  //控制循环变量
  let index = 0;
  while (index < right) {
    if (arr[index] <= target) {
      left++;
      // 交换索引为index和left对应的数组元素
      let temp = arr[index];
      arr[index] = arr[left];
      arr[left] = temp;
      index++;
    } else {
      right--;
      let temp = arr[index];
      arr[index] = arr[right];
      arr[right] = temp;
      // 注意，此时arr[index]与arr[right]交换后
      // 还需要继续比较target与交换后的arr[index]值
    }
  }
  console.log(`right=${right},index=${index}`);

  return arr;
}

let arr1 = [20, 30, 100, 35, 62, 99, 123, 0, 2];
console.log(part1(arr1, 35));

function part2(arr, target) {
  // left 表示在arr 数组中下标小于等于left 的都是满足小于等于target的范围
  let left = -1;
  // right 表示在arr 数组中下标大于等于right的 都是满足大于等于target的范围
  let right = arr.length;
  //控制循环变量
  let index = 0;
  while (index < right) {
    if (arr[index] < target) {
      left++;
      // 交换索引为index和left对应的数组元素
      let temp = arr[index];
      arr[index] = arr[left];
      arr[left] = temp;
      index++;
    } else if (arr[index] > target) {
      right--;
      let temp = arr[index];
      arr[index] = arr[right];
      arr[right] = temp;
      // 注意，此时arr[index]与arr[right]交换后
      // 还需要继续比较target与交换后的arr[index]值
    } else {
      index++;
    }
  }
  console.log(`right=${right},index=${index}`);

  return arr;
}
let arr2 = [20, 30, 35, 35, 62, 35, 123, 0, 2];
console.log(part1(arr2, 35));
console.log(part2(arr2, 35));
