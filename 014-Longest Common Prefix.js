// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

解法一 双重循环
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prev = strs[0]
  let len = strs.length
  for (let i = 1; i < len; i++) {
      for(j=0;j<strs[i].length && j<prev.length;j++){
          if(prev.charAt(j) !== strs[i].charAt(j))break;
      }
      prev = prev.substring(0,j)
  }
  return prev || ""
};

解法二 最大公约

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let len = strs.length
  if (!strs || !len) return ""
  if(len == 1) return strs[0]
  let min = 0, max = 0;
  for (let i = 0; i < len; i++) {
      if (strs[i] < strs[min]) min = i;
      if (strs[i] > strs[max]) max = i;
  }
  for (let j = 0; j < strs[min].length; j++) {
      if (strs[min].charAt(j) !== strs[max].charAt(j)) {
          strs[min] = strs[min].substring(0, j)
      }
  }
  return strs[min]
};

解法三 递归

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) return ""
  return recursive(strs)
};

function recursive(arr) {
  if (arr.length == 1) return arr[0]
  let len = arr.length
  let mid = Math.floor(len / 2)
  let letf = arr.slice(0, mid)
  let right = arr.slice(mid, len)
  return getPrefix(recursive(letf),recursive(right))
}

function getPrefix(str1, str2){
  for(var i=0;i<str1.length && str2.length;i++){
      if(str1.charAt(i) !== str2.charAt(i)) break
  }
  return str1.substring(0, i)
}

解法四 字典树

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if(!strs || !strs.length) return ""
  
  let trie = new Trie()
  let len = strs.length;
  for(let i=0;i<len;i++){
      if(!trie.insertNode(strs[i])) return ""
  }
  return trie.searchLongestPrefix()
};

function Trie(){
    this.root = new TrieNode()
}
function TrieNode(){
    this.next = {}
    this.isEnd = false
}
Trie.prototype.insertNode =  function(value){
    if(!value) return false
    let node = this.root;
    let len = value.length
    for(let i=0;i<len;i++){
        if(!node.next[value[i]]){
            node.next[value[i]] = new TrieNode()
        }
        node = node.next[value[i]]
    }
    node.isEnd = true
    return true
}

Trie.prototype.searchLongestPrefix = function(){
    let node = this.root;
    let prev = ""
    while(node.next){
        let keys = Object.keys(node.next)
        if(keys.length != 1) break
        if(node.next[keys[0]].isEnd){
            prev += keys[0]
            break
        }
        prev += keys[0]
        node = node.next[keys[0]]
    }
    return prev
}

