/*
 * @Author: YiY
 * @Date: 2024-01-04 15:42:21
 * @LastEditTime: 2024-01-05 17:41:25
 */
const arr = [858, 1, 5, 252, 34, 52, 4, 29, 635, 285]

let Bubble = arr => {
  let tmp = 0, list = arr
  for (let i = 0, len = list.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (list[i] > list[j]) {
        tmp = list[i]
        list[i] = list[j]
        list[j] = tmp
      }
    }
  }
  console.log('list :>> ', list, arr);
}

Bubble(arr)

// Time (O(n^2))
// Space (O(1))