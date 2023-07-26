/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const conversions = {
      "I":1,
      "V":5,
      "X":10,
      "L": 50,
      "C":100,
      "D":500,
      "M":1000
  }
  let integer = 0;
  for (let i=0; i < s.length; i++){
      let curr = conversions[s[i]]
      let next = conversions[s[i+1]]
      if(curr < next) {
          integer += next-curr
          i++
      } else {
          integer += curr
      }

  }
  return integer;
};