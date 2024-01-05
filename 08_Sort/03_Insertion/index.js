/*
 * @Author: YiY
 * @Date: 2024-01-05 14:36:49
 * @LastEditTime: 2024-01-05 17:33:26
 */
const arr = [858, 1, 5, 252, 34, 52, 4, 29, 635, 285]
/**
 * @description:
 * @param {*} list
 * @param {*} i 插入的位置 前
 * @param {*} j 取出的元素
 * @return {*}
 */
function insert(list, i, j) {
  let x = list.splice(j, 1)
  list.splice(i, 0, x[0])
  return list
}

let Insertion = (arr) => {
  let list = JSON.parse(JSON.stringify(arr))
  console.log('list :>> ', list);
  let len = list.length
  for (let i = 0; i < len; i++) {
    let k = -1
    for (let ol = i - 1; ol >= 0 && list[i] < list[ol]; ol--) {
      k = ol
    }
    if (k > -1) { list = insert(list, k, i) }
  }
  console.log('list :>> ', list, arr);
}

Insertion(arr)

// Time(O(1))
// Space(O(n^2))