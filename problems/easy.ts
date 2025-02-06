/*
 * Problem: Two Sum
 *
 * Given an array of numbers and a target sum, return indices of two numbers that add up to the target.
 * Assume exactly one solution exists, and the same element cannot be used twice.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9
 *
 */

function twoSum(nums: number[], target: number): number[] | void {
  let results: number[] = [];
  nums.forEach((num, i, arr) => {
    if (num <= target) {
      for (let j = i + 1; j < nums.length; j++) {
        console.log(num + arr[j]);
        if (num + arr[j] === target) {
          results = [i, j];
          return;
        }
      }
    }
  });
  return results;
}

console.log(twoSum([2, 7, 11, 15], 9));

/*
 * Problem: Reverse Words in a String
 *
 * Given a string, reverse the order of words.
 *
 * Example:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 *
 */
function reverseWords(word: string): string {
  return word.split(" ").reverse().join(" ");
}

console.log(reverseWords("the sky is blue"));

/*
 * Problem: Most Common Character
 *
 * Given a string, find the most frequently occurring character.
 *
 * Example:
 * Input: "banana"
 * Output: "a"
 *
 */

/*
 * Problem: Find Duplicates
 *
 * Given an array, return all the duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */

/*
 * Problem: First Unique Character
 *
 * Given a string, return the index of the first unique character.
 *
 * Example:
 * Input: "leetcode"
 * Output: 0
 *
 */

function firstUniqueCharacter(string: string): number {
  let index = 0;
  let characterCount: { [letter: string]: number } = {};
  for (let i = 0; i < string.length; i++) {
    if (characterCount[string[i]]) {
      characterCount[string[i]] += 1;
    } else {
      characterCount[string[i]] = 1;
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (characterCount[string[i]] === 1) {
      index = i;
      break;
    }
  }
  console.log(characterCount);
  return index;
}

console.log(firstUniqueCharacter("leetcode"));
console.log(firstUniqueCharacter("racecar")); //3
console.log(firstUniqueCharacter("ababababababababababababababababbabz"));
/*
 * Problem: Find All Duplicates in an Array
 *
 * Given an array, return all duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */
