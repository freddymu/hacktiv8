// Exercise 6 - Palindrome Number
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to return the next palindrom number
function angkaPalindrome (num) {
  // Find the next number that is palindrome
  num++
  // reverse the input using several array built-in functions
  let reverseNum = num.toString().split('').reverse().join('')

  if (parseInt(reverseNum) === num) {
    return num
  } else {
    // console.log('bukan palindrom:' + num);
    return angkaPalindrome(num)
  }
}

// TEST CASES
console.log(angkaPalindrome(8)) // 9
console.log(angkaPalindrome(10)) // 11
console.log(angkaPalindrome(117)) // 121
console.log(angkaPalindrome(175)) // 181
console.log(angkaPalindrome(1000)) // 1001
