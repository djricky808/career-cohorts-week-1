/*
 * Problem: Merge Intervals
 *
 * Given an array of intervals, merge overlapping intervals.
 *
 * Example:
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 *
 */

function mergeInterval(intervals: number[][]): number[][] {
  let merged: number[][] = [];
  //Assuming in the event the intervals are out of numerical order.
  intervals.sort((a: number[], b: number[]): number => {
    if (a[0] > b[0]) {
      return +1;
    } else {
      return -1;
    }
  });

  intervals.forEach((interval: number[], i: number, arr: number[][]) => {
    if (i === 0) {
      merged.push(interval);
    } else {
      let [current, previous] = [interval, arr[i - 1]];
      if (current[0] < previous[1]) {
        let lastMergeEnd: number[] = merged[merged.length - 1];
        if (merged.length >= 1 && lastMergeEnd[1] > current[0]) {
          let temp: number = lastMergeEnd[0];
          merged.pop();
          merged.push([
            temp,
            interval[1] > lastMergeEnd[1] ? interval[1] : lastMergeEnd[1],
          ]);
        } else {
          merged.push([previous[0], current[1]]);
        }
      } else {
        merged.push(interval);
      }
    }
  });
  return merged;
}

// console.log(
//   mergeInterval([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );

// console.log(
//   mergeInterval([
//     [1, 3],
//     [2, 6],
//     [5, 10],
//     [15, 18],
//     [9, 12],
//   ])
// );

/*
 * Problem: Group Anagrams
 *
 * Given an array of words, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 */

function groupAnagrams(words: string[]): string[][] {
  let wordHashTable: { [sortedWord: string]: string[] } = {};
  words.forEach((word) => {
    let sorted = word.split("").sort().join("");
    if (wordHashTable[sorted]) {
      wordHashTable[sorted].push(word);
    } else {
      wordHashTable[sorted] = [word];
    }
  });

  return Object.values(wordHashTable);
}

//console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/*
 * Problem: Longest Palindromic Substring
 *
 * Find the longest palindromic substring in a given string.
 *
 * Example:
 * Input: "babad"
 * Output: "bab" (or "aba")
 *
 */

function longestPalindrome(string: string): string {
  let max: number[] = [0, 1];

  const findPalindrome = (
    left: number,
    right: number,
    string: string
  ): number[] => {
    while (left >= 0 && right < string.length) {
      if (string[left] !== string[right]) {
        break;
      }
      left--;
      right++;
    }
    return [left + 1, right];
  };

  for (let i = 0; i < string.length; i++) {
    let even: number[] = findPalindrome(i - 1, i, string);
    let odd: number[] = findPalindrome(i - 1, i + 1, string);
    let currentMax: number[] = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

    max = max[1] - max[0] > currentMax[1] - currentMax[0] ? max : currentMax;
  }

  return string.slice(max[0], max[1]);
}

//console.log(longestPalindrome("babadracecar"));
/*
 * Problem: Flatten Nested Object
 *
 * Convert a deeply nested object into a flat key-value map.
 *
 * Example:
 * Input: { a: { b: { c: 1 } }, d: 2 }
 * Output: { "a.b.c": 1, d: 2 }
 *
 * Hint: Use recursion + a helper function.
 */
type TObject = Record<string, any>;
function flattenObject(object: TObject): TObject {
  let flattened: { [letter: string]: number } = {};
  for (const elm in object) {
    if (typeof object[elm] === "object" && !Array.isArray(object[elm])) {
      const tempObj = flattenObject(object[elm]);
      for (const tElm in tempObj) {
        flattened[`${elm}.${tElm}`] = tempObj[tElm];
      }
    } else {
      flattened[elm] = object[elm];
    }
  }
  return flattened;
}

console.log(flattenObject({ a: { b: { c: 1 } }, d: [2, 3, 4] }));

/*
 * Problem: Deep Object Comparison
 *
 * Write a function to deeply compare two objects.
 *
 * Example:
 * Input: obj1 = { a: { b: 1 } }, obj2 = { a: { b: 1 } }
 * Output: true
 *
 * Hint: Use recursion and check nested properties.
 */

/*
 * Problem: Maximum Subarray Sum
 *
 * Find the contiguous (elements next to each other in sequence) subarray with the largest sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6  // Subarray: [4,-1,2,1]
 *
 */

function maxSubarray(numbers: number[]): number {
  let finalMaxSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let currentMaxSum = 0;
    let runningSum = 0;
    for (let j = i; j < numbers.length; j++) {
      let newSum = runningSum + numbers[j];
      runningSum = newSum;
      if (runningSum > currentMaxSum) {
        currentMaxSum = runningSum;
      }
    }
    if (currentMaxSum > finalMaxSum) {
      finalMaxSum = currentMaxSum;
    }
  }
  return finalMaxSum;
}

//console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
