const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => {
    console.log("viiiii:", v, "iiiiiiv", i);
    return arr.slice(i * size, i * size + size)
  }
  );

let x = chunk([1, 2, 3, 4, 5], 2)
console.log(x);