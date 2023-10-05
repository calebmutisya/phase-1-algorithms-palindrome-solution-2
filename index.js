function isPalindrome(word) {
  // Write your algorithm here
  const reversedString= word.split('').reverse().join('');
  if(word === reversedString){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
  1)Define palindrome(it takes a string and reads it backwards
    or reverses it and compares it with the original string)
  2)If the two strings match return true if return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
