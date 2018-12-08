/**
* https://leetcode-cn.com/problems/palindrome-number/
* Difficulty：Easy
* 
* Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
* 
* 
*Input: 121
*Output: true

*Input: -123
*Output: -fasle

*/

/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function(x) {
   if(String(x).split('').reverse().join('')==x){
       return true
   }else{
       return false
   }
};