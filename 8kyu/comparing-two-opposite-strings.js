// Comparing two opposite strings

// DESCRIPTION:

// Give you two strings: s1 and s2.If they are opposite, return true; otherwise, return false.Note: The result should be a boolean value, instead of a string.
// The opposite means: All letters of the two strings are the same, but the case is opposite.you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.
// Examples(input -> output)

// "ab", "AB" -> true
// "aB", "Ab" -> true   пройти по страке вычислить большую          пройти по страке вычислить малую     если индексы равны то хорошо
// "aBcd", "AbCD" -> true

// "AB", "Ab" -> false  все большие и большая с малой             .toUpperCase() .toLowerCase()
// "", "" -> false

// SOLUTION:

function isOpposite(s1, s2) {

  if (s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) === s2.charAt(i)) {
      return false;
    }
  }
  return true;
}