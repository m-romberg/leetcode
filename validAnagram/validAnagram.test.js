"use strict";

describe("#validAnagram", function() {
  it("returns true for valid words", function() {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
    expect(validAnagram("rat", "tar")).toBe(true);
  });

  it("returns false for invalud words", function() {
    expect(validAnagram("hello", "hey")).toBe(false);
    expect(validAnagram("money", "honey")).toBe(false);
  });
});