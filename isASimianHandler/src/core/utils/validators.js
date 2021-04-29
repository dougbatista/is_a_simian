function dnaMatching(dna = "") {
  if (dna.match(/.*([G,A,T,C]+)\1{3}.*/g)) return dna;
}

function matrixValidator(matrix = []) {
  if (matrix.length === 0) return false;

  let words = {};

  for (let word of matrix) {
    words[word] = word.length;
  }

  const wordsValues = Object.values(words);
  const matrixValidation = wordsValues.every(
    (val, i, arr) => val === arr[0] && matrix.length === val
  );
  return matrixValidation;
}

function stringGetter(array = []) {
  return array.join("").toUpperCase();
}

module.exports = {
  dnaMatching,
  matrixValidator,
  stringGetter,
};
