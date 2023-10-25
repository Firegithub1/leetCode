function convertNumberToGrade(num) {
  const gradeMap = {
    1: '一年级',
    2: '二年级',
    3: '三年级',
    4: '四年级',
    5: '五年级',
    6: '六年级',
    7: '七年级'
  };




  const gradeNum = Math.floor(num / 100);
  const classNum = num % 100;

  return `${gradeMap[gradeNum]}${classNum}班`;
}
let num_list = [104, 107, 105, 106, 103, 205, 204, 204, 205, 105, 107, 103, 107, 101, 102, 106, 107, 101, 103]

for (const num of num_list) {
  console.log(convertNumberToGrade(num));
}
