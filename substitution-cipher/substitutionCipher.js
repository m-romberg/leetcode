/*
You decide to create a substitution cipher. The cipher alphabet is based on a key shared amongst those of your friends who don't mind spoilers.

Suppose the key is:
"The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!".

We use only the unique letters in this key to set the order of the characters in the substitution table.

T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

(spaces added for readability)

We then align it with the regular alphabet:
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

Which gives us the substitution mapping: A becomes T, B becomes H, C becomes E, etc.

Write a function that takes a key and a string and encrypts the string with the key.

Example:
key = "The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!"
encrypt("It was all a dream.", key) -> "Od ptw txx t qsutg."
encrypt("Would you kindly?", key) -> "Pljxq zlj yobqxz?"
*/

function substitutionCipher(text, key) {
  const map = createCipherMap(key);
  text=text.toUpperCase()
  let cipherText = "";

  for (let char of text){
    //in alphabet
    if (map[char]){
      cipherText += map[char];
    }
    //space or character
    else {
      cipherText += char;
    }
  }

  return normalizeCapitals(cipherText);

}
/**
 * createCipherMap
 *
 * Takes in a key (string) and returns a cipher map to the alphabet
 * using only unique alphabet characters from the key.
 *
 * @param {} key
 * @returns
 */
function createCipherMap (key) {
  const ALPHABET_UPPERCASE = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  key = key.toUpperCase();

  //remove spaces
  const keyWordsNoSpaces = key.split(" ").join("");
  //get unique chars
  let keySet = new Set(keyWordsNoSpaces.split(""))

  //remove nonalphabet characters
  keySet = [...keySet]
  keySet = keySet.filter(val => {
    if (ALPHABET_UPPERCASE.includes(val)) return val;
  })

  let charMap = {}
  for (let i=0; i < keySet.length; i++){
    charMap[keySet[i]] = ALPHABET_UPPERCASE[i]
  }

  return charMap;

}
/**
 *
 * Takes a string of all capitalized letter and normalize.
 * Periods must be followed by spaces
 *
 * "I AM SO SAD. HE WENT TO HE MOVIES ALONE" =>
 *
 * "I am so sad. He went to the movies alone"
 * @param {} text
 */
function normalizeCapitals(text){
  let normalized = "";

  for (let i=0; i<text.length; i++){
    if (i===0){ //first letter in string. always capital.
      normalized += text[i];
    }
    //come across a period and is NOT end of the sentence (last char)
    else if (text[i] === "." && i != text.length-1){
      normalized += ". " + text[i+2];
      i+=2;
    }
    else {
      normalized += text[i].toLowerCase();
    }
  }
  return normalized;
}