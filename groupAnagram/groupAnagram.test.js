"use strict";

describe("#ggroupAnagram", function() {
  it("works", function() {
    expect(groupAnagram(["eat","tea","tan","ate","nat","bat"])).toBe([["bat"],["nat","tan"],["ate","eat","tea"]]);
    expect(groupAnagram([""])).toBe([[""]]);
  });
});