var sortPeople = function (names, heights) {
  // let arr = JSON.parse(JSON.stringify(heights)).sort((a, b) => b - a)
  // let arr = [...heights].sort((a, b) => b - a)

  // 2.2
  return names.map((e, i) => [heights[i], e])
    .sort((a, b) => b[0] - a[0])
    .map(i => i[1])

  // 2.1
  // return arr.map(item => names[heights.indexOf(item)])

  // 1.0
  // return arr.reduce((res, item) => {
  //   res.push(names[heights.findIndex(value => value == item)])
  //   return res
  // }, [])
}


let names = ["Mary", "John", "Emma"]
let heights = [180, 165, 170]

let result = sortPeople(names, heights)
console.log(result);