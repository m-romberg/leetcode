"use strict";

/**
 * validAnagram
 *
 * Given two strings, return true if anagrams and false if not
 */

function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  const sCounter = frequencyCounter(s);
  const tCounter = frequencyCounter(t);

  for (const char in sCounter) {
    if (sCounter[char] != tCounter[char]) {
      return false;
    };
  };

  return true;
};

function frequencyCounter(str) {
  let counter = {};
  str.split("").forEach(s => (counter[s] ? counter[s]++ : counter[s] = 1));

  return counter;
};
