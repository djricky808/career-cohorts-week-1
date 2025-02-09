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
  intervals.forEach((interval: number[], i: number, arr: number[][]) => {
    //THINGS TO CORRECT!!
    //The first interval should always be pushed to merged
    //Compare the current interval to the previous interval so that the last interval can be included without error
    if (i === 0) {
      merged.push(interval);
    } else {
      let [current, previous] = [interval, arr[i - 1]];
      console.log(current[0], previous[1]);
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
    console.log(merged);
  });
  return merged;
}

console.log(
  mergeInterval([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

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
 * Find the contiguous subarray with the largest sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6  // Subarray: [4,-1,2,1]
 *
 */
