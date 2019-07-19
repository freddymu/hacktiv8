// Exercise 13 - Deep Sum
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to calculate sum of integers in multidimensional array
function deepSum (arr) {
  if (!arr.length) {
    return 'No number'
  }
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        sum += arr[i][j][k]
      }
    }
  }
  return sum
}

// TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])) // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])) // 156

console.log(deepSum([])) // No number

// Shortest Solution
/* function deepSum (arr) {
  const arrSum = array => array.reduce((sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1), 0)
  if (!arrSum(arr)) {
    return 'No number'
  } else {
    return arrSum(arr)
  }
} */
