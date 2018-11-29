/**
* https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
* Difficulty：Medium
* 
* Given a string, find the length of the longest substring without repeating characters.
* 
* 
*Input: "abcabcbb"
*Output: 3 
*Explanation: The answer is "abc", with the length of 3. 
*/

//solution 1 可行 但是超时

function stringUnique(str, i, j) {
  var newStr = str.substring(i, j).split('');
  var temp = true;
  newStr.map((item, index) => {
    var _index = newStr.indexOf(item)
    if (_index != index) {
      temp = false
    }
  })

  return temp
}
var lengthOfLongestSubstring = function (s) {
  var len = s.length;
  var max = 0;
  if (len == 1) {
    max = 1;
  }
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j <= len; j++) {
      if (stringUnique(s, i, j)) {
        max = Math.max(max, j - i)
      }
    }
  }
  return max
};

console.log(lengthOfLongestSubstring('aa'));

//soltion 2
var lengthOfLongestSubstring = function(s) {
  var max = 0;
  var i=0;
  var j=0;
  var len = s.length;
  var map ={}
  while(i<len && j<len){
      if(map[s[j]] === undefined){
          map[s[j]] = j;
          j++;
          max = Math.max(max, j - i);
      }else{
          delete map[s[i]]
          i++
      }
  }
  return max
};
