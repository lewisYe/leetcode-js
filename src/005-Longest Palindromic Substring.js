/**
* https://leetcode-cn.com/problems/longest-palindromic-substring/
* Difficulty：Medium
* 
* Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
* 
* 
*Input: "babad"
*Output: "bab"
*Note: "aba" is also a valid answer.
*/

// solution 1 超时 
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = 0;
  let temp =''
  let len = s.length;
  for(let i=0;i<len;i++){
      for(let j=i+1;j<=len;j++){
          let str = s.substring(i,j);
          let res = isPalindromic(str);
          if(res.isPalindromic && res.len > max){
              max = res.len;
              temp = res.str
          }
      }
  }
  return temp;
};

function isPalindromic(str){
  let obj = {
      isPalindromic:false,
      len:str.length,
      str:str
  };
  if(str.split('').reverse().join('') === str){
      obj.isPalindromic = true
  }
  return obj
}
var a = longestPalindrome('cbbd')

// solution 2 
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = 0;
    let temp =''
    let len = s.length;
    for(let i=len;i>=1;i--){
        for(let j=0;j<len - i;j++){
            let str = s.substr(j,i);
            let res = isPalindromic(str);
            if(res.isPalindromic && res.len > max){
                max = res.len;
                temp = res.str
                break;
            }
        }
    }
    return temp;
  };
  
  function isPalindromic(str){
    let obj = {
        isPalindromic:false,
        len:str.length,
        str:str
    };
    if(str.split('').reverse().join('') === str){
        obj.isPalindromic = true
    }
    return obj
  }
  var b = longestPalindrome('cbbd')
  console.log(b)