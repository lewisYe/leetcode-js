/**
* https://leetcode-cn.com/problems/reverse-integer/
* Difficulty：Easy
* 
* Given a 32-bit signed integer, reverse digits of an integer.
* 
* 
*Input: 123
*Output: 321

*Input: -123
*Output: -321

*Input: 120
*Output: 012
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var num = Math.abs(x).toString();
  var res = null;
  if(x > 0){
      res = Number(num.split('').reverse().join(''));
  }else{
      res = - Number (num.split('').reverse().join(''));
  }
  if(res <= 2147483647 && res >= -2147483648){
      return res
  }
  return 0;
};