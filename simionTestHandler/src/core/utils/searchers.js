const { stringGetter, dnaMatching } = require("./validators");

function diagonalsSearcher(matrix = []) {
  return new Promise((resolve, reject) => {
    try {
      if (matrix.length < 4) return resolve(false);
      const diagonal1 = [],
        diagonal2 = [],
        simianSequencesMatches = [],
        humanSequencesMatches = [];

      for (let i = 0; i < matrix.length; i++) {
        diagonal1.push(matrix[i][i]);
        diagonal2.push(matrix[i][matrix.length - i - 1]);
      }

      const dnaSequence1 = stringGetter(diagonal1);
      const dnaSequence2 = stringGetter(diagonal2);

      const dnaSequenceMatch1 = dnaMatching(dnaSequence1);
      const dnaSequenceMatch2 = dnaMatching(dnaSequence2);

      if (dnaSequenceMatch1) simianSequencesMatches.push(dnaSequenceMatch1);
      else humanSequencesMatches.push(dnaSequence1);

      if (dnaSequenceMatch2) simianSequencesMatches.push(dnaSequenceMatch2);
      else humanSequencesMatches.push(dnaSequence2);

      if (simianSequencesMatches.length > 0) {
        return resolve({
          simianSequencesMatches,
          humanSequencesMatches,
          result: true
        });
      }

      resolve({ simianSequencesMatches, humanSequencesMatches, result: false });
    } catch (error) {
      return reject(new Error(error.message));
    }
  });
}

function searcher(matrix = []) {
  return new Promise((resolve, reject) => {
    const simianSequencesMatches = [],
      humanSequencesMatches = [];
    try {
      for (let i = 0; i < matrix.length; i++) {
        const dnaSequence = stringGetter(matrix[i]);
        const dnaSequenceMatch = dnaMatching(dnaSequence);

        if (dnaSequenceMatch) simianSequencesMatches.push(dnaSequence);
        else humanSequencesMatches.push(dnaSequence);

        if (simianSequencesMatches.length > 0 && i + 1 === matrix.length) {
          return resolve({
            simianSequencesMatches,
            humanSequencesMatches,
            result: true,
          });
        }
      }

      resolve({ simianSequencesMatches, humanSequencesMatches, result: false });
    } catch (error) {
      reject(new Error(error.message));
    }
  });
}

module.exports = {
  searcher,
  diagonalsSearcher
};
