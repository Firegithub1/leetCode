/*
 * @Author: YiY
 * @Date: 2024-01-05 16:23:12
 * @LastEditTime: 2024-01-05 16:24:44
 */
const arr = [1, 5, 252, 34, 52, 4, 29, 635, 285]

let x = arr.splice(1, 2, 666)

console.log('x :>> ', x);

console.log('arr :>> ', arr);


// 1. x是所有删除的数据,数组
// 2. 在start前插入
// 3. 修改原数组