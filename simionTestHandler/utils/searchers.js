const { stringGetter, dnaMatching } = require('./validators');

function diagonalsSearcher(matrix = []) {
  return new Promise((resolve, reject) => {
    try {
      if (matrix.length < 4) return resolve(false);
      const diagonal1 = [],
        diagonal2 = [],
        sequencesMatches = [];

      for (let i = 0; i < matrix.length; i++) {
        diagonal1.push(matrix[i][i]);
        diagonal2.push(matrix[i][matrix.length - i - 1]);
      }

      const dnaSequence1 = stringGetter(diagonal1);
      const dnaSequence2 = stringGetter(diagonal2);

      const dnaSequenceMatch1 = dnaMatching(dnaSequence1);
      const dnaSequenceMatch2 = dnaMatching(dnaSequence2);

      if (dnaSequenceMatch1) sequencesMatches.push(dnaSequenceMatch1);
      if (dnaSequenceMatch2) sequencesMatches.push(dnaSequenceMatch2);

      if (sequencesMatches.length > 0) return resolve(true);

      return resolve(false);
    } catch (error) {
      return reject(error);
    }
  });
}

function searcher(matrix = []) {
  return new Promise((resolve, reject) => {
    try {
      for (let i = 0; i < matrix.length; i++) {
        const dnaSequence = stringGetter(matrix[i]);
        const dnaSequenceMatch = dnaMatching(dnaSequence);

        if (dnaSequenceMatch) return resolve(true);
      }
      resolve(false);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  searcher,
  diagonalsSearcher,
};
