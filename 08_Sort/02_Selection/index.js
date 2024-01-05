/*
 * @Author: YiY
 * @Date: 2024-01-05 17:42:17
 * @LastEditTime: 2024-01-05 17:44:24
 */
const arr = [858, 1, 5, 252, 34, 52, 4, 29, 635, 285]

/**
 * @description: Select
 * @param {*} arr
 * @return {*}
 */
let Seletion = arr => {
  let tmp = 0, list = JSON.parse(JSON.stringify(arr))
  for (let i = 0, len = list.length; i < len; i++) {
    let k = i
    for (let j = i + 1; j < len; j++) {
      if (list[i] > list[j]) {
        k = j
      }
    }
    tmp = list[i]
    list[i] = list[k]
    list[k] = tmp
  }
  console.log('list :>> ', list, arr);
}

Seletion(arr)

// Time (O(n^2))
// Space (O(1))