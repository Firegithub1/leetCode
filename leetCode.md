1. for (let i = 0,len = s.length; i<len; i++) 比直接i < s.length较快几毫秒
    - //i和len两个变量是在for循环的第一个声明中，二者只会初始化一次
2. 使用for循环（如for(let i = 1;i<10;i++)）通常比迭代（如Array.prototype.forEach()或for...of循环）更快。
    - 这是因为for循环在底层实现上更加高效，因为它直接操作内存中的数组元素，而迭代则需要额外的函数调用和对象创建。