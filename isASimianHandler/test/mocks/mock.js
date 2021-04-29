exports.RESULT_FROM_MATRIX = {
  horizontalResult: {
    simianSequencesMatches: ["CCCCTA"],
    humanSequencesMatches: ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "TCACTG"],
    result: true,
  },
  verticalResult: {
    simianSequencesMatches: ["GGGGTT"],
    humanSequencesMatches: ["ACTACT", "TATGCC", "GGAACA", "CTTACC", "ACTGAG"],
    result: true,
  },
  diagonalResult: {
    simianSequencesMatches: ["AAAATG"],
    humanSequencesMatches: ["AGTACT"],
    result: true,
  },
};

exports.DEFAULT_ARR = [ 'ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG' ];

exports.MATRIX = [
  ["A", "T", "G", "C", "G", "A"],
  ["C", "A", "G", "T", "G", "C"],
  ["T", "T", "A", "T", "G", "T"],
  ["A", "G", "A", "A", "G", "G"],
  ["C", "C", "C", "C", "T", "A"],
  ["T", "C", "A", "C", "T", "G"],
];

exports.TRANSPOSED_MATRIX = [
  ["A", "C", "T", "A", "C", "T"],
  ["T", "A", "T", "G", "C", "C"],
  ["G", "G", "A", "A", "C", "A"],
  ["C", "T", "T", "A", "C", "C"],
  ["G", "G", "G", "G", "T", "T"],
  ["A", "C", "T", "G", "A", "G"],
];
