/*
 * @Author: YiY
 * @Date: 2024-01-05 14:36:49
 * @LastEditTime: 2024-01-05 17:24:18
 */
const arr = [666, 1, 5, 252, 34, 52, 4, 29, 635, 285]
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
  let len = list.length

  for (let i = 0; i < len; i++) {
    let flag = -1 //插入标识
    let ol = i - 1 //有序/无序 最后一个有序值
    while (ol >= 0 && list[i] < list[ol]) {
      flag = ol-- //寻找最小值
    }
    if (flag > -1) list = insert(list, flag, i) //标识可能为0
  }

  console.log('list :>> ', list, arr);
}

Insertion(arr)