function stringPermutation(letters) {
  if (letters.length === 1) {
    return 1;
  }
  return letters.length * stringPermutation(letters.slice(1));
}
console.log(stringPermutation("syedsohan"));
